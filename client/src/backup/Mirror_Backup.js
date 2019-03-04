import React, { Component } from 'react';
import frog from './res/sxsw_eye_base.png';
import frogLogo from './res/friedolin_GW.png';
import frogEye from './res/sxsw_eye_center.png';
import slots from './res/slots.jpg';
import warp from './res/warp.mp4';
import pixel from './res/pixel_frog.jpg';
import mulFrogs from './res/pixel_frogs.jpg';
import head from './res/head.obj';
import smiley from './res/smiley.png';
import logo from './logo.svg';
import './App.css';
import {Curve, Create, Num, Geom, CanvasSpace, Pt, Group} from "pts"
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';
import * as Dither from 'canvas-dither';
import Typewriter from 'typewriter-effect';


OBJLoader(THREE);

const points = [
	'face',
	'confidence',
	'gaze_0_x',
	'gaze_0_y',
	'gaze_0_z',
	'gaze_1_x',
	'gaze_1_y',
	'gaze_1_z',
	'gaze_angle_x',
	'gaze_angle_y',
	'eye_lmk_x_0',
	'eye_lmk_x_1',
	'eye_lmk_x_2',
	'eye_lmk_x_3',
	'eye_lmk_x_4',
	'eye_lmk_x_5',
	'eye_lmk_x_6',
	'eye_lmk_x_7',
	'eye_lmk_x_8',
	'eye_lmk_x_9',
	'eye_lmk_x_10',
	'eye_lmk_x_11',
	'eye_lmk_x_12',
	'eye_lmk_x_13',
	'eye_lmk_x_14',
	'eye_lmk_x_15',
	'eye_lmk_x_16',
	'eye_lmk_x_17',
	'eye_lmk_x_18',
	'eye_lmk_x_19',
	'eye_lmk_x_20',
	'eye_lmk_x_21',
	'eye_lmk_x_22',
	'eye_lmk_x_23',
	'eye_lmk_x_24',
	'eye_lmk_x_25',
	'eye_lmk_x_26',
	'eye_lmk_x_27',
	'eye_lmk_x_28',
	'eye_lmk_x_29',
	'eye_lmk_x_30',
	'eye_lmk_x_31',
	'eye_lmk_x_32',
	'eye_lmk_x_33',
	'eye_lmk_x_34',
	'eye_lmk_x_35',
	'eye_lmk_x_36',
	'eye_lmk_x_37',
	'eye_lmk_x_38',
	'eye_lmk_x_39',
	'eye_lmk_x_40',
	'eye_lmk_x_41',
	'eye_lmk_x_42',
	'eye_lmk_x_43',
	'eye_lmk_x_44',
	'eye_lmk_x_45',
	'eye_lmk_x_46',
	'eye_lmk_x_47',
	'eye_lmk_x_48',
	'eye_lmk_x_49',
	'eye_lmk_x_50',
	'eye_lmk_x_51',
	'eye_lmk_x_52',
	'eye_lmk_x_53',
	'eye_lmk_x_54',
	'eye_lmk_x_55',
	'eye_lmk_y_0',
	'eye_lmk_y_1',
	'eye_lmk_y_2',
	'eye_lmk_y_3',
	'eye_lmk_y_4',
	'eye_lmk_y_5',
	'eye_lmk_y_6',
	'eye_lmk_y_7',
	'eye_lmk_y_8',
	'eye_lmk_y_9',
	'eye_lmk_y_10',
	'eye_lmk_y_11',
	'eye_lmk_y_12',
	'eye_lmk_y_13',
	'eye_lmk_y_14',
	'eye_lmk_y_15',
	'eye_lmk_y_16',
	'eye_lmk_y_17',
	'eye_lmk_y_18',
	'eye_lmk_y_19',
	'eye_lmk_y_20',
	'eye_lmk_y_21',
	'eye_lmk_y_22',
	'eye_lmk_y_23',
	'eye_lmk_y_24',
	'eye_lmk_y_25',
	'eye_lmk_y_26',
	'eye_lmk_y_27',
	'eye_lmk_y_28',
	'eye_lmk_y_29',
	'eye_lmk_y_30',
	'eye_lmk_y_31',
	'eye_lmk_y_32',
	'eye_lmk_y_33',
	'eye_lmk_y_34',
	'eye_lmk_y_35',
	'eye_lmk_y_36',
	'eye_lmk_y_37',
	'eye_lmk_y_38',
	'eye_lmk_y_39',
	'eye_lmk_y_40',
	'eye_lmk_y_41',
	'eye_lmk_y_42',
	'eye_lmk_y_43',
	'eye_lmk_y_44',
	'eye_lmk_y_45',
	'eye_lmk_y_46',
	'eye_lmk_y_47',
	'eye_lmk_y_48',
	'eye_lmk_y_49',
	'eye_lmk_y_50',
	'eye_lmk_y_51',
	'eye_lmk_y_52',
	'eye_lmk_y_53',
	'eye_lmk_y_54',
	'eye_lmk_y_55',
	'eye_lmk_X_0',
	'eye_lmk_X_1',
	'eye_lmk_X_2',
	'eye_lmk_X_3',
	'eye_lmk_X_4',
	'eye_lmk_X_5',
	'eye_lmk_X_6',
	'eye_lmk_X_7',
	'eye_lmk_X_8',
	'eye_lmk_X_9',
	'eye_lmk_X_10',
	'eye_lmk_X_11',
	'eye_lmk_X_12',
	'eye_lmk_X_13',
	'eye_lmk_X_14',
	'eye_lmk_X_15',
	'eye_lmk_X_16',
	'eye_lmk_X_17',
	'eye_lmk_X_18',
	'eye_lmk_X_19',
	'eye_lmk_X_20',
	'eye_lmk_X_21',
	'eye_lmk_X_22',
	'eye_lmk_X_23',
	'eye_lmk_X_24',
	'eye_lmk_X_25',
	'eye_lmk_X_26',
	'eye_lmk_X_27',
	'eye_lmk_X_28',
	'eye_lmk_X_29',
	'eye_lmk_X_30',
	'eye_lmk_X_31',
	'eye_lmk_X_32',
	'eye_lmk_X_33',
	'eye_lmk_X_34',
	'eye_lmk_X_35',
	'eye_lmk_X_36',
	'eye_lmk_X_37',
	'eye_lmk_X_38',
	'eye_lmk_X_39',
	'eye_lmk_X_40',
	'eye_lmk_X_41',
	'eye_lmk_X_42',
	'eye_lmk_X_43',
	'eye_lmk_X_44',
	'eye_lmk_X_45',
	'eye_lmk_X_46',
	'eye_lmk_X_47',
	'eye_lmk_X_48',
	'eye_lmk_X_49',
	'eye_lmk_X_50',
	'eye_lmk_X_51',
	'eye_lmk_X_52',
	'eye_lmk_X_53',
	'eye_lmk_X_54',
	'eye_lmk_X_55',
	'eye_lmk_Y_0',
	'eye_lmk_Y_1',
	'eye_lmk_Y_2',
	'eye_lmk_Y_3',
	'eye_lmk_Y_4',
	'eye_lmk_Y_5',
	'eye_lmk_Y_6',
	'eye_lmk_Y_7',
	'eye_lmk_Y_8',
	'eye_lmk_Y_9',
	'eye_lmk_Y_10',
	'eye_lmk_Y_11',
	'eye_lmk_Y_12',
	'eye_lmk_Y_13',
	'eye_lmk_Y_14',
	'eye_lmk_Y_15',
	'eye_lmk_Y_16',
	'eye_lmk_Y_17',
	'eye_lmk_Y_18',
	'eye_lmk_Y_19',
	'eye_lmk_Y_20',
	'eye_lmk_Y_21',
	'eye_lmk_Y_22',
	'eye_lmk_Y_23',
	'eye_lmk_Y_24',
	'eye_lmk_Y_25',
	'eye_lmk_Y_26',
	'eye_lmk_Y_27',
	'eye_lmk_Y_28',
	'eye_lmk_Y_29',
	'eye_lmk_Y_30',
	'eye_lmk_Y_31',
	'eye_lmk_Y_32',
	'eye_lmk_Y_33',
	'eye_lmk_Y_34',
	'eye_lmk_Y_35',
	'eye_lmk_Y_36',
	'eye_lmk_Y_37',
	'eye_lmk_Y_38',
	'eye_lmk_Y_39',
	'eye_lmk_Y_40',
	'eye_lmk_Y_41',
	'eye_lmk_Y_42',
	'eye_lmk_Y_43',
	'eye_lmk_Y_44',
	'eye_lmk_Y_45',
	'eye_lmk_Y_46',
	'eye_lmk_Y_47',
	'eye_lmk_Y_48',
	'eye_lmk_Y_49',
	'eye_lmk_Y_50',
	'eye_lmk_Y_51',
	'eye_lmk_Y_52',
	'eye_lmk_Y_53',
	'eye_lmk_Y_54',
	'eye_lmk_Y_55',
	'eye_lmk_Z_0',
	'eye_lmk_Z_1',
	'eye_lmk_Z_2',
	'eye_lmk_Z_3',
	'eye_lmk_Z_4',
	'eye_lmk_Z_5',
	'eye_lmk_Z_6',
	'eye_lmk_Z_7',
	'eye_lmk_Z_8',
	'eye_lmk_Z_9',
	'eye_lmk_Z_10',
	'eye_lmk_Z_11',
	'eye_lmk_Z_12',
	'eye_lmk_Z_13',
	'eye_lmk_Z_14',
	'eye_lmk_Z_15',
	'eye_lmk_Z_16',
	'eye_lmk_Z_17',
	'eye_lmk_Z_18',
	'eye_lmk_Z_19',
	'eye_lmk_Z_20',
	'eye_lmk_Z_21',
	'eye_lmk_Z_22',
	'eye_lmk_Z_23',
	'eye_lmk_Z_24',
	'eye_lmk_Z_25',
	'eye_lmk_Z_26',
	'eye_lmk_Z_27',
	'eye_lmk_Z_28',
	'eye_lmk_Z_29',
	'eye_lmk_Z_30',
	'eye_lmk_Z_31',
	'eye_lmk_Z_32',
	'eye_lmk_Z_33',
	'eye_lmk_Z_34',
	'eye_lmk_Z_35',
	'eye_lmk_Z_36',
	'eye_lmk_Z_37',
	'eye_lmk_Z_38',
	'eye_lmk_Z_39',
	'eye_lmk_Z_40',
	'eye_lmk_Z_41',
	'eye_lmk_Z_42',
	'eye_lmk_Z_43',
	'eye_lmk_Z_44',
	'eye_lmk_Z_45',
	'eye_lmk_Z_46',
	'eye_lmk_Z_47',
	'eye_lmk_Z_48',
	'eye_lmk_Z_49',
	'eye_lmk_Z_50',
	'eye_lmk_Z_51',
	'eye_lmk_Z_52',
	'eye_lmk_Z_53',
	'eye_lmk_Z_54',
	'eye_lmk_Z_55',
	'pose_Tx',
	'pose_Ty',
	'pose_Tz',
	'pose_Rx',
	'pose_Ry',
	'pose_Rz',
	'x_0',
	'x_1',
	'x_2',
	'x_3',
	'x_4',
	'x_5',
	'x_6',
	'x_7',
	'x_8',
	'x_9',
	'x_10',
	'x_11',
	'x_12',
	'x_13',
	'x_14',
	'x_15',
	'x_16',
	'x_17',
	'x_18',
	'x_19',
	'x_20',
	'x_21',
	'x_22',
	'x_23',
	'x_24',
	'x_25',
	'x_26',
	'x_27',
	'x_28',
	'x_29',
	'x_30',
	'x_31',
	'x_32',
	'x_33',
	'x_34',
	'x_35',
	'x_36',
	'x_37',
	'x_38',
	'x_39',
	'x_40',
	'x_41',
	'x_42',
	'x_43',
	'x_44',
	'x_45',
	'x_46',
	'x_47',
	'x_48',
	'x_49',
	'x_50',
	'x_51',
	'x_52',
	'x_53',
	'x_54',
	'x_55',
	'x_56',
	'x_57',
	'x_58',
	'x_59',
	'x_60',
	'x_61',
	'x_62',
	'x_63',
	'x_64',
	'x_65',
	'x_66',
	'x_67',
	'y_0',
	'y_1',
	'y_2',
	'y_3',
	'y_4',
	'y_5',
	'y_6',
	'y_7',
	'y_8',
	'y_9',
	'y_10',
	'y_11',
	'y_12',
	'y_13',
	'y_14',
	'y_15',
	'y_16',
	'y_17',
	'y_18',
	'y_19',
	'y_20',
	'y_21',
	'y_22',
	'y_23',
	'y_24',
	'y_25',
	'y_26',
	'y_27',
	'y_28',
	'y_29',
	'y_30',
	'y_31',
	'y_32',
	'y_33',
	'y_34',
	'y_35',
	'y_36',
	'y_37',
	'y_38',
	'y_39',
	'y_40',
	'y_41',
	'y_42',
	'y_43',
	'y_44',
	'y_45',
	'y_46',
	'y_47',
	'y_48',
	'y_49',
	'y_50',
	'y_51',
	'y_52',
	'y_53',
	'y_54',
	'y_55',
	'y_56',
	'y_57',
	'y_58',
	'y_59',
	'y_60',
	'y_61',
	'y_62',
	'y_63',
	'y_64',
	'y_65',
	'y_66',
	'y_67',
	'X_0',
	'X_1',
	'X_2',
	'X_3',
	'X_4',
	'X_5',
	'X_6',
	'X_7',
	'X_8',
	'X_9',
	'X_10',
	'X_11',
	'X_12',
	'X_13',
	'X_14',
	'X_15',
	'X_16',
	'X_17',
	'X_18',
	'X_19',
	'X_20',
	'X_21',
	'X_22',
	'X_23',
	'X_24',
	'X_25',
	'X_26',
	'X_27',
	'X_28',
	'X_29',
	'X_30',
	'X_31',
	'X_32',
	'X_33',
	'X_34',
	'X_35',
	'X_36',
	'X_37',
	'X_38',
	'X_39',
	'X_40',
	'X_41',
	'X_42',
	'X_43',
	'X_44',
	'X_45',
	'X_46',
	'X_47',
	'X_48',
	'X_49',
	'X_50',
	'X_51',
	'X_52',
	'X_53',
	'X_54',
	'X_55',
	'X_56',
	'X_57',
	'X_58',
	'X_59',
	'X_60',
	'X_61',
	'X_62',
	'X_63',
	'X_64',
	'X_65',
	'X_66',
	'X_67',
	'Y_0',
	'Y_1',
	'Y_2',
	'Y_3',
	'Y_4',
	'Y_5',
	'Y_6',
	'Y_7',
	'Y_8',
	'Y_9',
	'Y_10',
	'Y_11',
	'Y_12',
	'Y_13',
	'Y_14',
	'Y_15',
	'Y_16',
	'Y_17',
	'Y_18',
	'Y_19',
	'Y_20',
	'Y_21',
	'Y_22',
	'Y_23',
	'Y_24',
	'Y_25',
	'Y_26',
	'Y_27',
	'Y_28',
	'Y_29',
	'Y_30',
	'Y_31',
	'Y_32',
	'Y_33',
	'Y_34',
	'Y_35',
	'Y_36',
	'Y_37',
	'Y_38',
	'Y_39',
	'Y_40',
	'Y_41',
	'Y_42',
	'Y_43',
	'Y_44',
	'Y_45',
	'Y_46',
	'Y_47',
	'Y_48',
	'Y_49',
	'Y_50',
	'Y_51',
	'Y_52',
	'Y_53',
	'Y_54',
	'Y_55',
	'Y_56',
	'Y_57',
	'Y_58',
	'Y_59',
	'Y_60',
	'Y_61',
	'Y_62',
	'Y_63',
	'Y_64',
	'Y_65',
	'Y_66',
	'Y_67',
	'Z_0',
	'Z_1',
	'Z_2',
	'Z_3',
	'Z_4',
	'Z_5',
	'Z_6',
	'Z_7',
	'Z_8',
	'Z_9',
	'Z_10',
	'Z_11',
	'Z_12',
	'Z_13',
	'Z_14',
	'Z_15',
	'Z_16',
	'Z_17',
	'Z_18',
	'Z_19',
	'Z_20',
	'Z_21',
	'Z_22',
	'Z_23',
	'Z_24',
	'Z_25',
	'Z_26',
	'Z_27',
	'Z_28',
	'Z_29',
	'Z_30',
	'Z_31',
	'Z_32',
	'Z_33',
	'Z_34',
	'Z_35',
	'Z_36',
	'Z_37',
	'Z_38',
	'Z_39',
	'Z_40',
	'Z_41',
	'Z_42',
	'Z_43',
	'Z_44',
	'Z_45',
	'Z_46',
	'Z_47',
	'Z_48',
	'Z_49',
	'Z_50',
	'Z_51',
	'Z_52',
	'Z_53',
	'Z_54',
	'Z_55',
	'Z_56',
	'Z_57',
	'Z_58',
	'Z_59',
	'Z_60',
	'Z_61',
	'Z_62',
	'Z_63',
	'Z_64',
	'Z_65',
	'Z_66',
	'Z_67',
	'p_scale',
	'p_rx',
	'p_ry',
	'p_rz',
	'p_tx',
	'p_ty',
	'p_0',
	'p_1',
	'p_2',
	'p_3',
	'p_4',
	'p_5',
	'p_6',
	'p_7',
	'p_8',
	'p_9',
	'p_10',
	'p_11',
	'p_12',
	'p_13',
	'p_14',
	'p_15',
	'p_16',
	'p_17',
	'p_18',
	'p_19',
	'p_20',
	'p_21',
	'p_22',
	'p_23',
	'p_24',
	'p_25',
	'p_26',
	'p_27',
	'p_28',
	'p_29',
	'p_30',
	'p_31',
	'p_32',
	'p_33',
	'AU01_r',
	'AU02_r',
	'AU04_r',
	'AU05_r',
	'AU06_r',
	'AU07_r',
	'AU09_r',
	'AU10_r',
	'AU12_r',
	'AU14_r',
	'AU15_r',
	'AU17_r',
	'AU20_r',
	'AU23_r',
	'AU25_r',
	'AU26_r',
	'AU45_r',
	'AU01_c',
	'AU02_c',
	'AU04_c',
	'AU05_c',
	'AU06_c',
	'AU07_c',
	'AU09_c',
	'AU10_c',
	'AU12_c',
	'AU14_c',
	'AU15_c',
	'AU17_c',
	'AU20_c',
	'AU23_c',
	'AU25_c',
	'AU26_c',
	'AU28_c',
	'AU45_c'
]

const dat = require('dat.gui');
// 1280 / 2266
var objLoader;
var fov = 70;

var vidWidth = 680; //320
var vidHeight = 1133;


var canvasWidth = vidWidth / 2;
var canvasHeight = vidHeight / 2;
var tiltSpeed = 0.1;
var tiltAmount = 0.5;
var startTime = Date.now();

//var perlin = new ImprovedNoise();
var camera, scene, renderer;
var mouseX = 0;
var mouseY = 0;
var windowHalfX, windowHalfY;
var videoIn, videoInTexture;
var mainGroup;
var geometry;
var vidCanvas;
var vidCanvasCtx;
var ctx;
var pixels;
var noisePosn = 0;
var wireMaterial;
var meshMaterial;
var container;
var params;
var title, info, prompt;
var canvasText;
var uniforms; 
var wiremirror;
var backgroundImage;
var videoInTextureMask;
var defaultEmotion = 'Emotion';
var shaderMaterialFlipDot;

class Mirror extends Component {
	constructor(props){
		super(props);
		this.state = {xTranslate: 0, yTranslate: 0, clipPoints: [], bufferEyeL: [], bufferEyeR: []}
		this.onCamReady = this.onCamReady.bind(this);
		this.onCamMetaDataLoaded = this.onCamMetaDataLoaded.bind(this);
		this.animate = this.animate.bind(this);
		this.onOpen = this.onOpen.bind(this);
		this.renderCanvas = this.renderCanvas.bind(this);
		this.onMessage = this.onMessage.bind(this);
	}

	onOpen(evt){ }

	onMessage(evt){
		let msg = evt.data;
		let bufferOriginal = Buffer.from(msg);
		let bufferUTF8 = bufferOriginal.toString('utf8');
		let bufferArr = bufferUTF8.split(',');
		let bufferObj = Object.assign(...points.map((pt, index) => {
			return {[pt]: bufferArr[index]}
		}));

		let bufferGazeX = bufferObj['gaze_angle_x'];
		let bufferGazeY = bufferObj['gaze_angle_y'];
		let bufferEyeL = [bufferObj['eye_lmk_x_0'], bufferObj['eye_lmk_y_0']];
		let bufferEyeR = [bufferObj['eye_lmk_x_1'], bufferObj['eye_lmk_y_1']];

		let happinessEmotion = (Number(bufferObj['AU06_r']) + Number(bufferObj['AU12_r']))/10.;
		let sadnessEmotion = (Number(bufferObj['AU01_r']) + Number(bufferObj['AU04_r']) + Number(bufferObj['AU15_r']))/15.;
		let surpriseEmotion = (Number(bufferObj['AU01_r']) + Number(bufferObj['AU02_r']) + Number(bufferObj['AU05_r']) + Number(bufferObj['AU26_r']))/20.;
		let fearEmotion = (Number(bufferObj['AU01_r']) + Number(bufferObj['AU02_r']) + Number(bufferObj['AU04_r']) + Number(bufferObj['AU05_r']) + Number(bufferObj['AU07_r']) + Number(bufferObj['AU20_r']) + Number(bufferObj['AU26_r']))/35.;
		let angerEmotion = (Number(bufferObj['AU04_r']) + Number(bufferObj['AU05_r']) + Number(bufferObj['AU07_r']) + Number(bufferObj['AU23_r']))/20.;

		let emotions = [];
		let emotionsNames = ['Delight', 'Contemplation', 'Surprise', 'Fear', 'Frustration'];
		emotions.push(happinessEmotion, sadnessEmotion, surpriseEmotion, fearEmotion, angerEmotion);
		let max = 0;
		let tolerance = 0.15;
		for (let i = 0; i < emotions.length; i++){
			if (emotions[i] - tolerance > emotions[max]) max = i;
		}

		if (emotions[max] >= .1) {
			// console.log(emotionsNames[max])
			defaultEmotion = emotionsNames[max];
		}
		else defaultEmotion = 'Emotion'

		let newState = {xTranslate: bufferGazeX * 100, yTranslate: bufferGazeY * 100, bufferEyeL, bufferEyeR};
		let clipPoints = [];

		// Buttom of face
		for (let i = 0; i < 17; i++){
			clipPoints.push(`${bufferObj[`x_${i}`]}px ${bufferObj[`y_${i}`]}px`);
		}

		// Eyebrows
		for (let i =26; i > 16; i--){
			clipPoints.push(`${bufferObj[`x_${i}`]}px ${bufferObj[`y_${i}`]}px`);
		}

		this.setState({...newState, clipPoints, ...{ centerX: bufferObj['x_33'], centerY: bufferObj['y_33']}});
	}


	onCamReady(stream) {
		// Init webcam texture
		this.video.onloadedmetadata = this.onCamMetaDataLoaded;
		this.video.srcObject = stream;
	}

	animate() {
		shaderMaterialFlipDot.uniforms.time.value = (Date.now() - startTime)/800;
		requestAnimationFrame(this.animate);
		this.renderCanvas();
	}

	renderCanvas() {
		mainGroup.scale.setScalar(this.params.zoom);
		mainGroup.rotation.x += (mouseY * tiltAmount - mainGroup.rotation.x) * tiltSpeed;
		mainGroup.rotation.y += (mouseX * tiltAmount - mainGroup.rotation.y) * tiltSpeed;
		uniforms.centerX.value = this.state.centerX;
		uniforms.centerY.value = this.state.centerY;
		//camera.lookAt(camera.target);
		renderer.render(this.scene, this.camera);
	}

	onCamMetaDataLoaded() {
		function WCMParams() {
			this.zoom = 2;
			this.mOpac = 1;
			this.wfOpac = 0.1;
			this.contrast = 3;
			this.saturation = 1;
			this.invertZ = false;
			this.zDepth = 400;
			this.noiseStrength = 200;
			this.noiseScale = 0.01;
			this.noiseSpeed = 0.02;
			//this.doSnapshot = function() {};
		}
		// stop the user getting a text cursor
		document.onselectstart = function() {
			return false;
		};

		//init control panel
		this.params = new WCMParams();
		this.gui = new dat.GUI();
		this.gui
			.add(this.params, 'zoom', 0.1, 5)
			.name('Zoom')
			.onChange(this.onParamsChange);
		this.gui.add(this.params, 'zDepth', 0, 1000).name('Z Depth');
		this.gui
			.add(this.params, 'mOpac', 0, 1)
			.name('Mesh Opacity')
			.onChange(this.onParamsChange);
		this.gui
			.add(this.params, 'wfOpac', 0, 0.3)
			.name('Grid Opacity')
			.onChange(this.onParamsChange);
		this.gui
			.add(this.params, 'contrast', 1, 5)
			.name('Contrast')
			.onChange(this.onParamsChange);
		this.gui
			.add(this.params, 'saturation', 0, 2)
			.name('Saturation')
			.onChange(this.onParamsChange);
		this.gui.add(this.params, 'noiseStrength', 0, 600).name('Noise Strength');
		this.gui.add(this.params, 'noiseSpeed', 0, 0.05).name('Noise Speed');
		this.gui.add(this.params, 'noiseScale', 0, 0.1).name('Noise Scale');
		this.gui.add(this.params, 'invertZ').name('Invert Z');
		this.gui.close();
		this.gui.domElement.style.display = 'none';

		// Init 3D
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(fov, (.25), 1, 5000); //CHANGE ASPECT RATIO
		this.camera.target = new THREE.Vector3(0, 0, 0);
		this.scene.add(this.camera);
		this.camera.position.z = 600;

		// Toggle UI
		videoInTexture = new THREE.VideoTexture(this.video);
		videoInTextureMask = new THREE.VideoTexture(this.videoFrog);

		uniforms = {
				texture1: { // Main webcam
					type: 't',
					value: videoInTexture
				},
				texture2: { // Background Image
					type: 't',
					value: new THREE.TextureLoader().load( smiley )
				},
				texture3: { // Moving Mask
					type: 't',
					// value: videoInTextureMask
					value: new THREE.TextureLoader().load( mulFrogs )
				},
				centerX: {
					type: "f",
					value: this.state.centerX
				},
				centerY: {
					type: "f",
					value: this.state.centerY
				},
				time: {
					type: "f",
					value: Date.now() - startTime
				},
				resolution: { type: "v2", value: new THREE.Vector2() }
		};

		// Some adjustments for BLUR SHADER
		// TODO: Fix aspect ratio for face coordinates to be accurate
		uniforms.resolution.value.x = vidWidth / 3.1;
		uniforms.resolution.value.y = vidHeight / 1.2;

		mainGroup = new THREE.Object3D();
		this.scene.add(mainGroup);

		geometry = new THREE.PlaneGeometry(canvasWidth, canvasHeight, canvasWidth, canvasHeight);
		geometry.dynamic = true;

		meshMaterial = new THREE.MeshBasicMaterial({
			opacity: 1,
			map: videoInTexture,
		});

		// Add video feed
		var mirror = new THREE.Mesh(geometry, meshMaterial);
		mainGroup.add(mirror);

		// mainGroup.add(object); // ADD HEAD TO SCENE

		// add wireframe plane
		wireMaterial = new THREE.MeshBasicMaterial({
			opacity: 0.1,
			color: 0xffffff,
			wireframe: true,
			blending: THREE.AdditiveBlending,
			transparent: true,
		});

		/////////////////////////
		// FROG FLIP DOT DISPLAY /////
		/////////////////////////
		shaderMaterialFlipDot = new THREE.ShaderMaterial({
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
				uniform float centerX;
				uniform float centerY;
				uniform float time;
				uniform vec2 resolution;
				varying vec2 vUv;

				#define M_PI 3.141592653589793
				#define CELL_SIZE 40.0
				#define WIDTH 0.4
				#define ROUND 0.5

				#define INTERVAL 1.2

				// Rotate the uv coords for a flip dot plane around the x-axis.
				vec2 flipX(vec2 uv, float a){
					vec3 r = vec3(uv, 3.0);
					vec3 n = vec3(0.0, sin(a), cos(a));
					float t = (r.z*n.z)/dot(n, r);
					
					vec3 p = r*t;
					return vec2(p.x, p.y/n.z);
				}

				// Called for the value of each flip dot cell.
				// Borrowed from https://www.shadertoy.com/view/MdXGDH
				float display(vec2 uv, float t){
					uv *= 20.0;
					t *= 0.01;
					
					vec2 center = vec2(640.0/2.0, 360.0/2.0) + vec2(640.0/2.0*sin(-t*3.0), 360.0/2.0*cos(-t*3.0));

					float color1 = (sin(dot(uv.xy, vec2(sin(t*3.0), cos(t*3.0)))*0.02 + t*3.0) + 1.0)/2.0;
					float color2 = (cos(length(uv.xy - center)*0.03) + 1.0)/2.0;
					float color = (color1 + color2)/2.0;

					return (cos(M_PI*color/0.5 + t*3.0) + 1.0)/2.0;
				}

				// Each flip cell has a slightly different timing.
				float delay(vec2 uv){
					return 0.5;
					// return texture2D(texture1, uv/1024.0).r;
				}

				void main() {
					// Cell coordinates.
					vec2 cell = vUv * vec2(CELL_SIZE * 1.5, CELL_SIZE);
					vec2 cellf = fract(cell);
					vec2 celli = cell - cellf;
					
					// Time values.
					float t = time/INTERVAL + 0.5*delay(celli) + celli.y/40.0;
					float tf = fract(t);
					float ti = t - tf;
					
					// Current and next display value.
					float d0 = step(0.5, display(celli, ti));
					float d1 = step(0.5, display(celli, ti + 1.0));
					
					// Flip dot rotation phase. [0, 1]
					float phase = mix(d0, d1, smoothstep(0.0, 1.0, tf));
					
					// Coordinates of the flip dot's plane.
					vec2 plane = flipX(2.0*cellf - 1.0, M_PI*phase);
					
					// Implicit function for the rounded rectangle.
					float f = ROUND - length(plane - clamp(plane, -WIDTH, WIDTH));
					
					// Anti-alias and output!
					vec3 color = mix(vec3(0.2), vec3(1.0), step(phase, 0.5));

					// OUTLINE
					float aa = smoothstep(0.0, fwidth(f), f);

					vec4 webcamImage = vec4((aa*color), 1.) * texture2D(texture1, vUv);
					vec4 smileyImage = vec4((aa * vec3(step(0.5, phase))), 1.) * texture2D(texture2, cellf);

					gl_FragColor = webcamImage + smileyImage;
					// gl_FragColor = vec4(0., 0., 0., 0.);
				}
				`
		});

		/////////////////////////
		// FROG WARP /////
		/////////////////////////
		var shaderMaterialGridWarp = new THREE.ShaderMaterial({
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
				uniform float centerX;
				uniform float centerY;
				uniform vec2 resolution;
				varying vec2 vUv;

				// float random(float x, float y, vec2 vUv) {
				// 	float rand = fract(sin(dot(floor(vUv * 20.0), vec2(12.9898,78.233))) * 43758.5453123);
				// 	return step(0.5, rand);
				// }

				//Grid
				// vec4 getPixel(float x, float y, vec2 vUv) {

				// 	// sin(dot(floor(vUv * 20.0)))
				// 	// float scale = sin(dot(vUv * 40., vec2(12.9898, 4.1414)));
				// 	float scale = (sin(vUv.x * 20.)/2. + .5) * (sin(vUv.y * 20.)/2. + .5);
				// 	vec4 rgbPixel = step(0.5, scale) * texture2D(texture1, vUv);
				// 	return rgbPixel;
				// }

				vec4 getPixel(float x, float y, vec2 vUv) {
					vec4 rgbPixel = texture2D(texture2, vUv);
					float res = step(0.5, rgbPixel.g);
					vec3 temp = texture2D(texture1, vUv).rgb;
					vec3 temp2 = texture2D(texture2, vUv).rgb;
					return vec4(((res * temp) + ((1. - res) * temp2)), 1.);

				}

				void main() {
					// rgbfinal.r = rgb.r * (1.0 - scale) + (rgb2.r * scale);
					// rgbfinal.g = rgb.g * (1.0 - scale) + (rgb2.g * scale);
					// rgbfinal.b = rgb.b * (1.0 - scale) + (rgb2.b * scale);
					gl_FragColor = getPixel(vUv.x, vUv.y, vUv);
				}
				`,
		});

		shaderMaterialFlipDot.derivatives = true;
		wiremirror = new THREE.Mesh(geometry, shaderMaterialFlipDot);
		// wiremirror = new THREE.Mesh(geometry, shaderMaterialGrid);
		// wiremirror = new THREE.Mesh(geometry, shaderMaterialGridWarp);
		// wiremirror = new THREE.Mesh(geometry, wireMaterial);

		mainGroup.add(wiremirror);
		wiremirror.position.z = 5;

		//init renderer
		renderer = new THREE.WebGLRenderer({
			antialias: true,
		});

		renderer.sortObjects = false;
		// renderer.setSize(vidWidth, vidHeight); //CHANGE ASPECT RATIO
		renderer.setSize(vidWidth, vidHeight); //CHANGE ASPECT RATIO
		this.canvas = renderer.domElement;
		this.container.appendChild(renderer.domElement);

		//vidCanvas to draw screenshot from video
		// vidCanvas = document.createElement('canvas');
		// vidCanvas.width = 1280;
		// vidCanvas.height = 960;
		// vidCanvasCtx = vidCanvas.getContext('2d');
		
		//handle WebGL context lost
		renderer.domElement.addEventListener(
			'webglcontextlost',
			function(event) {
				prompt.style.display = 'inline';
				prompt.innerHTML = 'WebGL Context Lost. Please try reloading the page.';
			},
			false
		);

				//onResize();

		this.animate();
	}


	componentDidMount(){
		const websocket = new WebSocket('ws://localhost:8002');
		websocket.onopen = evt => { this.onOpen(evt) };
		websocket.onmessage = evt => { this.onMessage(evt) };

		this.video = document.querySelector("#videoElement");
		this.videoFrog = document.querySelector("#videoElementMask");
		this.container = document.querySelector('#mainVideoContainer');

		this.THREE = THREE;
		objLoader = new this.THREE.OBJLoader();
		if (navigator.mediaDevices.getUserMedia) {
			var that = this;
			navigator.mediaDevices.getUserMedia({video: true})
			.then(function(stream) {
				that.onCamReady(stream);
			})
			.catch(function(err0r) {
				console.log("Something went wrong!");
			});
		}

		// Blotter (animated text) stuff below
		const script = document.createElement("script");
		const script2 = document.createElement("script");

		script.src = "https://blotter-js.herokuapp.com/blotter.min.js";
		script.async = true;
		script2.src = "https://blotter-js.herokuapp.com/liquidDistortMaterial.js";
		script2.async = true;

		// script.onload = () => {
		// 	canvasText = new window.Blotter.Text("form follows", {
		// 		family : "Quarto",
		// 		weight: 600,
		// 		size : 50,
		// 		fill : "#000",
		// 		uSpeed: .1,
		// 		uVolatility: .15,
		// 		uSeed: .1,
		// 		paddingLeft: 40,
	// 			paddingRight: 40
		// 	});
		// }

		// script2.onload = () => {
		// 	if (canvasText){
		// 		var blotterMaterial = new window.Blotter.LiquidDistortMaterial();
		// 		blotterMaterial.uniforms.uSpeed.value = 0.25;
		// 					blotterMaterial.uniforms.uVolatility.value = 0.15;
		// 		var blotter = new window.Blotter(blotterMaterial, { texts : canvasText });
		// 		var elem = document.getElementById("ready");
		// 		var scope = blotter.forText(canvasText);

		// 		scope.appendTo(elem);
		// 	}
		// }

		document.body.appendChild(script);
		document.body.appendChild(script2);

		// var that = this;
		// function runType(){
		// 	console.log(defaultEmotion)
		// 	let curEmotion = defaultEmotion;
		// 	if (that.typewriter){
		// 		let randSplitIndex = Math.random() * curEmotion.length;
		// 		let initLetters = curEmotion.substr(0, randSplitIndex);
		// 		let remLetters = curEmotion.substr(randSplitIndex, curEmotion.length);
		// 		console.log(initLetters)
		// 		that.typewriter.typeString(initLetters)
		// 		.pauseFor(1500)
		// 		.typeString(remLetters)
		// 		.callFunction(() => {
		// 			console.log('Finishing typing first');
		// 			// runType();
		// 		})
		// 		.pauseFor(800)
		// 		.deleteAll()
		// 		.start()
		// 		.callFunction(() => {
		// 			console.log('All strings were deleted');
		// 			// runType();
		// 		})
		// 	}
		// };

		// setTimeout(runType, 1000);

		// let counter = 0;
		// setInterval(() => {
		// 	let curEmotion = defaultEmotion;
		// 	let start = Date.now();
		// 	if (this.typewriter) {
		// 		console.log(counter, curEmotion)
		// 		let randSplitIndex = Math.random() * curEmotion.length;
		// 		let initLetters = curEmotion.substr(0, randSplitIndex);
		// 		let remLetters = curEmotion.substr(randSplitIndex, curEmotion.length);
		// 		this.typewriter.typeString(initLetters)
		// 		.pauseFor(800)
		// 		this.typewriter.typeString(remLetters)
		// 		.pauseFor(1200)
		// 		.deleteAll()
		// 		.start()
		// 		.callFunction(() => {
  //       			console.log(counter, 'Done!');
  //       			counter++;
  //       			console.log(Date.now() - start)
  //     			})
		// 	}
		// }, 4500)

		window.addEventListener('resize', () => {
			// this.camera.aspect = .25; // WTF I DON'T UNDERSTAND THIS
			// this.camera.updateProjectionMatrix ();
			// renderer.setSize (vidWidth, vidHeight);
		})
	}

	render() {
		// let clipPoints = this.state.clipPoints
		//style={{'clipPath': `polygon(${this.state.clipPoints.join(', ')})`}}
		let smileys = [];
		for (let i = 0; i < 15 * 9; i++){
			smileys.push(<img className='smiley' style={{width: '33px', height: '33px'}}src={smiley}/>);
		}
		return (
			<div className="App">
				{/* <img src={slots}/> */}
				<div style={{position: 'relative', width: '720px', height: '1280px', margin: 'auto'}}>
					<h3 style={{fontFamily: 'Quarto'}}> frog </h3>
					<video autoPlay={true} id="videoElement" style={{position: 'relative', top: '200px'}}></video>
					{/*<video src={warp} autoPlay={true} loop={true} id="videoElementMask" style={{display: 'none'}}></video>*/}
				</div>
				<div style={{position: 'relative'}}>
					<div  id="ready" style={{position: 'absolute', left: '500px', top: '180px'}}/>
					<div id="mainVideoContainer" style={{position: 'relative'}}>
						{/* <div className='frogCrossout'/> */}
						{/*<h3 style={{position: 'absolute', width: '100%'}}> Form <br/> Follows </h3>*/}
						<Typewriter
							delay={2000}
							onInit={(typewriter) => {
								this.typewriter = typewriter
								// typewriter.typeString(defaultEmotion)
								//   .callFunction(() => {
								//     console.log('String typed out!');
								//   })
								//   .pauseFor(2500)
								//   .deleteAll()
								//   .callFunction(() => {
								//     console.log('All strings were deleted');
								//   })
								//   .start();
							}}
						/>
						{/* <img src={frogLogo} className='frogLogo'/> */}
						{/* <div className='frogCrossoutL'/> */}
						{/* <div className='frogCrossoutR'/>  */}
						{/* <div style={{display: 'grid', gridTemplate: 'repeat(15, 75px) / repeat(9, 75px)', position: 'absolute', width: '680px', height: '1133px', left: '50%', transform: 'translateX(-50%)'}}> */}
						{/* { smileys } */}
						{/* </div> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Mirror;
