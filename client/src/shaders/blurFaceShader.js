/////////////////////////
// BLUR FACE SHADER /////
/////////////////////////
import * as THREE from 'three';

function shaderMaterial(uniforms, blur = true){ 
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
		uniform float centerX;
		uniform float centerY;
		uniform vec2 resolution;
		varying vec2 vUv;

		float scale = 2.0;
		vec2 getLocation(float x, float y, vec2 vUv) {
			vec2 location;
			float distance = sqrt(pow((centerX / resolution.x) - x, 2.) + pow((centerY  / resolution.y) - y, 2.));
			if (distance < .35) {
				float scaled = smoothstep(.35, 0., distance);
				vec2 diff = vUv - floor(vUv); // [0, 1)
				location = vUv - (diff * scaled);
			}
			else {
				location = vUv;
			}
			return location;
		}

		void main() {
			vec3 rgb;
			if (${blur}) rgb = texture2D(map, getLocation(vUv.x, 1. - vUv.y, vUv * 40.)/40.).rgb; //With face blur
			else rgb = texture2D(map, vUv).rgb;
			gl_FragColor = vec4(rgb, 1.0);
		}
		`,
	});
}

export default shaderMaterial;