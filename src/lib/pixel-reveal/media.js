import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vertexShader from './shaders/vertex.glsl?raw';
import fragmentShader from './shaders/fragment.glsl?raw';

gsap.registerPlugin(ScrollTrigger);

/**
 * One WebGL plane mapped onto a hidden <img>, revealing it with a
 * randomised pixel-grid wipe as it scrolls into view.
 * Adapted from J0SUKE's Codrops demo (MIT) — see fragment.glsl.
 */
export default class Media {
  constructor({ element, scene, sizes }) {
    this.element = element;
    this.scene = scene;
    this.sizes = sizes;

    // setMeshPosition() below reads getBoundingClientRect(), which is already
    // relative to whatever the scroll position is *right now* (e.g. a
    // lazy-loaded image set up long after scroll left 0). Seed lastScroll to
    // match that same scroll position, or the next updateScroll() call would
    // apply the whole scroll offset a second time and fling the mesh away.
    this.currentScroll = (-window.scrollY * this.sizes.height) / window.innerHeight;
    this.lastScroll = this.currentScroll;

    // Some cards (the "More projects" row) sit inside their own horizontally
    // scrolling track — that scroll never touches window.scrollY, so it needs
    // its own delta tracking or the mesh stays put while the row slides under it.
    this.scrollContainer = this.findScrollContainer(element);
    this.lastScrollLeft = this.scrollContainer ? this.scrollContainer.scrollLeft : 0;

    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      uniforms: {
        uTexture: new THREE.Uniform(null),
        uResolution: new THREE.Uniform(new THREE.Vector2(1, 1)),
        uContainerRes: new THREE.Uniform(new THREE.Vector2(1, 1)),
        uProgress: new THREE.Uniform(0),
        // Black grid cells while revealing — reads --color-ink so it stays in
        // sync with the site's ink colour if that ever changes.
        uColor: new THREE.Uniform(new THREE.Color((getComputedStyle(document.documentElement).getPropertyValue('--color-ink') || '#000000').trim())),
      },
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.setNodeBounds();
    this.setMeshDimensions();
    this.setMeshPosition();
    this.setTexture();

    this.scene.add(this.mesh);
  }

  findScrollContainer(el) {
    let node = el.parentElement;
    while (node && node !== document.body) {
      const style = getComputedStyle(node);
      if ((style.overflowX === 'auto' || style.overflowX === 'scroll') && node.scrollWidth > node.clientWidth) {
        return node;
      }
      node = node.parentElement;
    }
    return null;
  }

  setNodeBounds() {
    this.elementBounds = this.element.getBoundingClientRect();
    this.nodeDimensions = { width: this.elementBounds.width, height: this.elementBounds.height };
  }

  setMeshDimensions() {
    this.meshDimensions = {
      width: (this.nodeDimensions.width * this.sizes.width) / window.innerWidth,
      height: (this.nodeDimensions.height * this.sizes.height) / window.innerHeight,
    };
    this.mesh.scale.x = this.meshDimensions.width;
    this.mesh.scale.y = this.meshDimensions.height;
  }

  setMeshPosition() {
    const x =
      (this.elementBounds.left * this.sizes.width) / window.innerWidth -
      this.sizes.width / 2 +
      this.meshDimensions.width / 2;
    const y =
      (-this.elementBounds.top * this.sizes.height) / window.innerHeight -
      this.meshDimensions.height / 2 +
      this.sizes.height / 2;
    this.meshPosition = { x, y };
    this.mesh.position.x = x;
    this.mesh.position.y = y;
  }

  setTexture() {
    this.material.uniforms.uTexture.value = new THREE.TextureLoader().load(this.element.currentSrc || this.element.src, ({ image }) => {
      this.material.uniforms.uResolution.value.set(image.naturalWidth, image.naturalHeight);
      this.material.uniforms.uContainerRes.value.set(this.nodeDimensions.width, this.nodeDimensions.height);
    });
  }

  updateScroll(scrollY) {
    this.currentScroll = (-scrollY * this.sizes.height) / window.innerHeight;
    const delta = this.currentScroll - this.lastScroll;
    this.lastScroll = this.currentScroll;
    this.meshPosition.y -= delta;
    this.mesh.position.y = this.meshPosition.y;

    if (this.scrollContainer) {
      const scrollLeft = this.scrollContainer.scrollLeft;
      const deltaX = (scrollLeft - this.lastScrollLeft) * (this.sizes.width / window.innerWidth);
      this.lastScrollLeft = scrollLeft;
      this.meshPosition.x -= deltaX;
      this.mesh.position.x = this.meshPosition.x;
    }
  }

  observe() {
    this.scrollTrigger = gsap.to(this.material.uniforms.uProgress, {
      value: 1,
      duration: 1.4,
      ease: 'linear',
      scrollTrigger: {
        trigger: this.element,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play reset restart reset',
      },
    });
  }

  onResize(sizes) {
    this.sizes = sizes;
    this.setNodeBounds();
    this.setMeshDimensions();
    this.setMeshPosition();
    // setMeshPosition() just recomputed x/y from the current (post-resize)
    // bounding rect, so re-seed both scroll baselines here too — same reason
    // as the constructor comment above.
    this.lastScrollLeft = this.scrollContainer ? this.scrollContainer.scrollLeft : 0;
    this.material.uniforms.uContainerRes.value.set(this.nodeDimensions.width, this.nodeDimensions.height);
  }

  destroy() {
    this.scrollTrigger?.scrollTrigger?.kill();
    this.scrollTrigger?.kill();
    this.scene.remove(this.mesh);
    this.geometry.dispose();
    this.material.dispose();
  }
}
