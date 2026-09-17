// Pixel-block scroll reveal, adapted from J0SUKE's Codrops demo
// (https://github.com/J0SUKE/gsap-threejs-codrops, MIT).
uniform sampler2D uTexture;
varying vec2 vUv;

uniform vec2 uResolution;
uniform float uProgress;
uniform vec3 uColor;
uniform vec2 uContainerRes;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  float imageAspectX = uResolution.x / uResolution.y;
  float imageAspectY = uResolution.y / uResolution.x;

  float containerAspectX = uContainerRes.x / uContainerRes.y;
  float containerAspectY = uContainerRes.y / uContainerRes.x;

  vec2 ratio = vec2(
    min(containerAspectX / imageAspectX, 1.0),
    min(containerAspectY / imageAspectY, 1.0)
  );

  vec2 coverUvs = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  // grid cells over the container
  float gridSize = floor(uContainerRes.x / 20.0);
  vec2 grid = vec2(
    floor(coverUvs.x * gridSize) / gridSize,
    floor(coverUvs.y * gridSize) / gridSize
  );

  vec4 gridColor = vec4(uColor, 0.0);
  vec4 tex = texture2D(uTexture, coverUvs);

  float height = 0.2;
  float progress = (1.0 + height) - (uProgress * (1.0 + height + height));

  float dist = 1.0 - distance(grid.y, progress);
  float clampedDist = smoothstep(height, 0.0, distance(grid.y, progress));

  float randDist = step(1.0 - height * random(grid), dist);
  dist = step(1.0 - height, dist);

  float rnd = random(grid);
  float alpha = max(0.0, dist * (clampedDist + rnd - 0.5 * (1.0 - randDist)));
  gridColor.a = alpha;

  tex.rgba *= step(progress, grid.y);

  gl_FragColor = mix(tex, gridColor, gridColor.a);
}
