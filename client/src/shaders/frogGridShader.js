/////////////////////////
// FROG GRID SHADER /////
/////////////////////////

import * as THREE from 'three';

function shaderMaterialGridFrog(uniforms){
	return new THREE.ShaderMaterial({
		uniforms: uniforms,
		vertexShader: `attribute vec3 center;
		varying vec3 vCenter;
		varying vec2 vUv;
		void main() {
				vCenter = center;
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
		fragmentShader: `
		uniform sampler2D map;
		uniform sampler2D texture1;
		uniform sampler2D texture2;
		uniform sampler2D texture3;
		uniform float centerX;
		uniform float centerY;
		uniform vec2 resolution;
		varying vec2 vUv;

		float random(float x, float y, vec2 vUv) {
			float rand = fract(sin(dot(floor(vUv * 20.0), vec2(12.9898,78.233))) * 43758.5453123);
			return step(0.5, rand);
		}

		float getPixel(float x, float y, vec2 vUv) {
			vec4 rgbPixel = texture2D(texture3, vUv);
			return step(0.5, rgbPixel.r);
		}

		void main() {
			float scale = getPixel(vUv.x, vUv.y, vUv);
			vec3 rgb = texture2D(texture1, vUv).rgb;
			vec3 rgb2 = texture2D(texture2, vUv).rgb;
			vec3 rgbfinal;
			rgbfinal.r = rgb.r * (1.0 - scale) + (rgb2.r * scale);
			rgbfinal.g = rgb.g * (1.0 - scale) + (rgb2.g * scale);
			rgbfinal.b = rgb.b * (1.0 - scale) + (rgb2.b * scale);
			gl_FragColor = vec4(rgbfinal, 1.0);
		}
		`,
	});
}

export default shaderMaterialGridFrog;