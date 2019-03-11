///////////////////////////////////
// BLUR FACE SHADER GRAYSCALE /////
//////////////////////////////////
import * as THREE from 'three';

function shaderMaterialGrayscale(uniforms, blur = true) {
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
		uniform vec3 facePoints[2];
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

		float pixelScale = 1.0;

		vec2 getLocation(float x, float y, vec2 vUv, float xCenter, float yCenter, float faceWidth) {
			vec2 location;
			float distance = sqrt(pow(xCenter - x, 2.) + pow(yCenter - y, 2.));
			if (distance < faceWidth * 1.4) {
				float scaled = smoothstep(faceWidth * 1.4, 0., distance);
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
			vec2 vUV2 = vUv;
			for( int i = 0; i < 10; i++ )
			{
				if (vUv.x == 0.) continue;
				vUV2 = getLocation(vUV2.x, 1. - vUV2.y, vUV2 * 40., facePoints[i].x, facePoints[i].y, facePoints[i].z)/40.; //With face blur
			}
			if (${blur}) rgb = texture2D(map, vUV2).rgb; //With face blur
			else rgb = texture2D(map, vUv).rgb;
			vec3 lum = vec3(0.299, 0.587, 0.114);

			float grayscale = dot(rgb, lum);

			vec2 xy = gl_FragCoord.xy * pixelScale;
			int x = int(mod(xy.x, 4.0));
			int y = int(mod(xy.y, 4.0));
			vec3 finalRGB;

			// b&w
			finalRGB.r = find_closest(x, y, grayscale);
			finalRGB.g = find_closest(x, y, grayscale);
			finalRGB.b = find_closest(x, y, grayscale);
			gl_FragColor = vec4(finalRGB, 1.0);
		}
		`,
	});
}

export default shaderMaterialGrayscale;