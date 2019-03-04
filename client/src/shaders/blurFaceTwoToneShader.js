//////////////////////////////////
// BLUR FACE SHADER TWO-TONE /////
//////////////////////////////////
import * as THREE from 'three';

function shaderMaterialTwoTone(uniforms, blur = true) {
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

		float find_closest(int x, int y, float c0) {
			vec4 dither0 = vec4( 1.0, 33.0, 9.0, 41.0);
			vec4 dither1 = vec4(49.0, 17.0, 57.0, 25.0);
			vec4 dither2 = vec4(13.0, 45.0, 5.0, 37.0);
			vec4 dither3 = vec4(61.0, 29.0, 53.0, 21.0);
			float limit = 0.0;
			float value = 0.0;
			vec4 dither;
			if(x == 0) {
				dither = dither0;
			} else if(x == 1) {
				dither = dither1;
			} else if(x == 2) {
				dither = dither2;
			} else if(x == 3) {
				dither = dither3;
			}
			if(x < 4) {
				if(y == 0) {
					value = dither[0];
				} else if(y == 1) {
					value = dither[1];
				} else if(y == 2) {
					value = dither[2];
				} else if(y == 3) {
					value = dither[3];
				}
				limit = (value + 1.0) / 64.0;
			}
			if(c0 < limit) {
				return 0.0;
			} else {
				return 1.0;
			}
		}

		float scale = 2.0;
		float pixelScale = 1.0;
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
			vec3 lum = vec3(0.299, 0.587, 0.114);

			float grayscale = dot(rgb, lum);

			vec2 xy = gl_FragCoord.xy * pixelScale;
			int x = int(mod(xy.x, 4.0));
			int y = int(mod(xy.y, 4.0));
			vec3 finalRGB;

			// halftone
			float m = find_closest(x, y, grayscale);
			vec3 darkRGB = vec3(0.45, 0.26, 0.96);
			vec3 lightRGB = vec3(0.96, 0.45, 0.1);
			finalRGB = mix(darkRGB, lightRGB, m);
			gl_FragColor = vec4(finalRGB, 1.0);
		}
		`,
	});
}

export default shaderMaterialTwoTone;