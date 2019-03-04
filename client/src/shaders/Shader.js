import blurFace from './blurFaceShader';
import blurFaceBW from './blurFaceBWShader';
import blurFaceTT from './blurFaceTwoToneShader';
import dither from './ditherShader';
import frogGrid from './frogGridShader';
import randomGrid from './randomGridShader';

const SHADERS = {
	blurFace,
	blurFaceBW,
	blurFaceTT,
	dither,
	frogGrid,
	randomGrid
}

function Shader(shader, uniforms, blur){
	return SHADERS[shader](uniforms, blur);
}

export default Shader;