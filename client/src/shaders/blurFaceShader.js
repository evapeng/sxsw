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
		uniform int numFaces;
		uniform vec3 facePoints[2];
		uniform vec2 resolution;
		varying vec2 vUv;

		vec2 getLocation(float x, float y, vec2 vUv, float xCenter, float yCenter, float faceWidth) {
			vec2 location;
			float distance = sqrt(pow(xCenter - x, 2.) + pow(yCenter - y, 2.));
			if (distance < faceWidth * 1.5) {
				float scaled = smoothstep(faceWidth * 1.5, 0., distance);
				vec2 diff = vUv - floor(vUv); // [0, 1)
				location = vUv - (diff * scaled);
			}
			else {
				location = vUv;
			}
			return location;
		}

		float testLocation(float x, float y, vec2 vUv, float xCenter, float yCenter, float faceWidth) {
			vec2 location;
			float ret;
			float distance = sqrt(pow(xCenter - x, 2.) + pow(yCenter - y, 2.));
			if (distance < faceWidth * 1.5) {
				ret = 1.;
			}
			else {
				ret = 0.;
			}
			return ret;
		}

		vec2 scalevUv(vec2 vUv) {
			return vUv * ((resolution.x / resolution.y) * 40., 40.);
		}

		vec2 unScalevUv(vec2 vUv) {
			return vUv / ((resolution.x / resolution.y) * 40., 40.);
		}

		void main() {
			vec3 rgb;
			vec2 vUV2 = vUv;
			float test = 0.;
			for( int i = 0; i < 4; i++ )
			{
				if (vUv.x == 0.) continue;
				vUV2 = getLocation(vUV2.x, 1. - vUV2.y, vUV2 * 40., facePoints[i].x, facePoints[i].y, facePoints[i].z)/40.; //With face blur
				// test += testLocation(vUv.x, 1. - vUv.y, vUv * 40., facePoints[i].x, facePoints[i].y, facePoints[i].z)/40.; //With face blur
			}
			if (${blur}) rgb = texture2D(map, vUV2).rgb; //With face blur
			// if (${blur} && test > 0.) rgb = vec3(1., 0., 0.); //With face blur
			// if (${blur} && test == 0.) rgb = texture2D(map, vUV2).rgb; //With face blur
			else rgb = texture2D(map, vUv).rgb;
			gl_FragColor = vec4(rgb, 1.0);
		}
		`,
	});
}

export default shaderMaterial;

// function shaderMaterial(uniforms, blur = true){ 
// 	return new THREE.ShaderMaterial({
// 		uniforms: uniforms,
// 		vertexShader: `attribute vec3 center;
// 		varying vec3 vCenter;
// 		varying vec2 vUv;
// 		void main() {
// 				vCenter = center;
// 				vUv = uv;
// 				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
// 		}`,
// 		fragmentShader: `
// 		uniform sampler2D map;
// 		uniform float centerX;
// 		uniform float centerY;
// 		uniform v2v facePoints;
// 		uniform vec2 resolution;
// 		varying vec2 vUv;

// 		float scale = 2.0;
// 		vec2 getLocation(float x, float y, vec2 vUv) {
// 			vec2 location;
// 			float distance = sqrt(pow((centerX / resolution.x) - x, 2.) + pow((centerY  / resolution.y) - y, 2.));
// 			if (distance < .35) {
// 				float scaled = smoothstep(.35, 0., distance);
// 				vec2 diff = vUv - floor(vUv); // [0, 1)
// 				location = vUv - (diff * scaled);
// 			}
// 			else {
// 				location = vUv;
// 			}
// 			return location;
// 		}

// 		void main() {
// 			vec3 rgb;
// 			if (${blur}) rgb = texture2D(map, getLocation(vUv.x, 1. - vUv.y, vUv * 40.)/40.).rgb; //With face blur
// 			else rgb = texture2D(map, vUv).rgb;
// 			gl_FragColor = vec4(rgb, 1.0);
// 		}
// 		`,
// 	});
// }