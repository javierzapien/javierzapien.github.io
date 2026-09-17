import * as THREE from 'three';
import Media from './media.js';

export default class Canvas {
  constructor(canvasEl) {
    this.element = canvasEl;
    this.medias = [];

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 10;
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.element, alpha: true });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.setSizes();
  }

  setSizes() {
    const fov = this.camera.fov * (Math.PI / 180);
    const height = this.camera.position.z * Math.tan(fov / 2) * 2;
    const width = height * this.camera.aspect;
    this.sizes = { width, height };
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.setSizes();
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.medias.forEach((m) => m.onResize(this.sizes));
  }

  addMedia(imgEl) {
    const media = new Media({ element: imgEl, scene: this.scene, sizes: this.sizes });
    this.medias.push(media);
    return media;
  }

  observeAll() {
    this.medias.forEach((m) => m.observe());
  }

  render(scrollY) {
    this.medias.forEach((m) => m.updateScroll(scrollY));
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    this.medias.forEach((m) => m.destroy());
    this.medias = [];
    this.renderer.dispose();
  }
}
