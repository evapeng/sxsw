import React, { Component } from 'react';
import warp from './res/warp.mp4';
import pixel from './res/pixel_frog.jpg';
import mulFrogs from './res/pixel_frogs.jpg';
import celeb from './res/pixel_50.jpg';
import logo from './logo.svg';
import './App.css';
import {Curve, Create, Num, Geom, CanvasSpace, Pt, Group} from "pts"
import * as THREE from 'three';
import * as Dither from 'canvas-dither';
import clm from 'clmtrackr';

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

var fov = 70;

var vidWidth = 950; //1280
var vidHeight = 720; //720


var canvasWidth = vidWidth / 2;
var canvasHeight = vidHeight / 2;
var startTime = Date.now();

var renderer;
var mainGroup;
var geometry;
var vidCanvas;
var vidCanvasCtx;
var params;
var title, prompt;
var canvasText;
var uniforms; 
var backgroundImage;

class Mac extends Component {
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

		// this.setState({...newState, clipPoints, ...{ centerX: bufferObj['x_33'], centerY: bufferObj['y_33']}});
	}


	onCamReady(stream) {
		// Init webcam texture
		this.video.onloadedmetadata = this.onCamMetaDataLoaded;
		this.video.srcObject = stream;
	}

	animate() {
		requestAnimationFrame(this.animate);
		this.renderCanvas();
	}

	renderCanvas() {
		uniforms.centerX.value = this.state.centerX;
		uniforms.centerY.value = this.state.centerY;
		renderer.render(this.scene, this.camera);
	}

	onCamMetaDataLoaded() {
		// stop the user getting a text cursor
		document.onselectstart = function() {
			return false;
		};


		// Init 3D
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(fov, vidWidth / vidHeight, 1, 5000); //CHANGE ASPECT RATIO
		this.camera.target = new THREE.Vector3(0, 0, 0);
		this.scene.add(this.camera);
		this.camera.position.z = 500;

		// Toggle UI
		var videoInTexture = new THREE.VideoTexture(this.video);
		var videoInTextureMask = new THREE.VideoTexture(this.videoFrog);
		var ctracker = new clm.tracker();

		ctracker.init();
		ctracker.start(this.video);

		var that = this;
		function positionLoop() {
			requestAnimationFrame(positionLoop);
			var positions = ctracker.getCurrentPosition();
			// console.log(positions.length)
			// positions = [[x_0, y_0], [x_1,y_1], ... ]
			if (positions) {
				that.setState({ centerX: positions[62][0], centerY: positions[62][1]});
			}
		  }
		positionLoop();

		uniforms = {
				texture1: { // Main webcam
					type: 't',
					value: videoInTexture,
					time: { type: "f", value: Date.now() - startTime}
				},
				texture2: { // Background Image
					type: 't',
					value: backgroundImage
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
				resolution: { type: "v2", value: new THREE.Vector2() }
		};

		uniforms.resolution.value.x = vidWidth;
		uniforms.resolution.value.y = vidHeight;

		/////////////////////////
		// BLUR FACE SHADER /////
		/////////////////////////
		var shaderMaterial = new THREE.ShaderMaterial({
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
					vec3 rgb = texture2D(map, getLocation(vUv.x, 1. - vUv.y, vUv * 40.)/40.).rgb;
					vec3 lum = vec3(0.299, 0.587, 0.114);
					gl_FragColor = vec4(rgb, 1.0);
				}
				`,
		});

		///////////////////////////////////
		// BLUR FACE SHADER GRAYSCALE /////
		//////////////////////////////////
		var shaderMaterialGrayscale = new THREE.ShaderMaterial({
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
					// vec3 rgb = texture2D(map, getLocation(vUv.x, 1. - vUv.y, vUv * 40.)/40.).rgb; //With face blur
					vec3 rgb = texture2D(map, vUv).rgb;
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

		//////////////////////////////////
		// BLUR FACE SHADER TWO-TONE /////
		//////////////////////////////////
		var shaderMaterialTwoTone = new THREE.ShaderMaterial({
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
					vec3 rgb = texture2D(map, getLocation(vUv.x, 1. - vUv.y, vUv * 40.)/40.).rgb;
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

		///////////////////////////
		// RANDOM GRID SHADER /////
		///////////////////////////
		var shaderMaterialGrid = new THREE.ShaderMaterial({
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

				float random(float x, float y, vec2 vUv) {
					float rand = fract(sin(dot(floor(vUv * 20.0), vec2(12.9898,78.233))) * 43758.5453123);
					return step(0.5, rand);
				}

				void main() {
					float scale = random(vUv.x, vUv.y, vUv);
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

		/////////////////////////
		// FROG GRID SHADER /////
		/////////////////////////
		var shaderMaterialGridFrog = new THREE.ShaderMaterial({
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


		////////////////////////////
		// DITHER SHADER (REF) /////
		////////////////////////////
		var shaderMaterialBlur = new THREE.ShaderMaterial({
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

				varying vec2 vUv;
				float scale = 1.0;

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

				void main() {
					
					vec3 lum = vec3(0.299, 0.587, 0.114);
					float grayscale = dot(texture2D(map, vUv).rgb, lum);
					vec3 rgb = texture2D(map, vUv).rgb;

					vec2 xy = gl_FragCoord.xy * scale;
					int x = int(mod(xy.x, 4.0));
					int y = int(mod(xy.y, 4.0));

					vec3 finalRGB;

					finalRGB.r = find_closest(x, y, rgb.r);
					finalRGB.g = find_closest(x, y, rgb.g);
					finalRGB.b = find_closest(x, y, rgb.b);

					gl_FragColor = vec4(finalRGB, 1.0);
				}
				`,
		});

		mainGroup = new THREE.Object3D();
		this.scene.add(mainGroup);


		geometry = new THREE.PlaneGeometry(vidWidth, vidHeight, vidWidth, vidHeight);
		geometry.dynamic = true;

		var meshMaterial = new THREE.MeshBasicMaterial({
			opacity: 1,
			map: videoInTexture,
		});

		var mirror = new THREE.Mesh(geometry, meshMaterial);
		mainGroup.add(mirror);

		////////////////////////////////////////////////////
		//////////// CHANGE SHADER EFFECT HERE /////////////
		////////////////////////////////////////////////////

		var wiremirror = new THREE.Mesh(geometry, shaderMaterial);
		var wiremirrorGray = new THREE.Mesh(geometry, shaderMaterialGrayscale);
		var wiremirrorTwoTone = new THREE.Mesh(geometry, shaderMaterialTwoTone);
		// wiremirror = new THREE.Mesh(geometry, shaderMaterialGrid);
		// wiremirror = new THREE.Mesh(geometry, shaderMaterialGridFrog);

		////////////////////////////////////////////////////

		mainGroup.add(wiremirror);
		wiremirror.position.z = 5;

		//init renderer
		renderer = new THREE.WebGLRenderer({
			antialias: true,
		});
		renderer.sortObjects = false;
		renderer.setSize(vidWidth, vidHeight); //CHANGE ASPECT RATIO
		this.canvas = renderer.domElement;
		this.container.appendChild(renderer.domElement);

		//vidCanvas to draw screenshot from video
		vidCanvas = document.createElement('canvas');
		vidCanvas.width = vidWidth;
		vidCanvas.height = vidHeight;
		vidCanvasCtx = vidCanvas.getContext('2d');
		// document.body.appendChild(vidCanvas);
		// vidCanvas.style.position = 'absolute';
		// vidCanvas.style.display = 'none';
		
		//handle WebGL context lost
		renderer.domElement.addEventListener(
			'webglcontextlost',
			function(event) {
				prompt.style.display = 'inline';
				prompt.innerHTML = 'WebGL Context Lost. Please try reloading the page.';
			},
			false
		);
		//switch shader
		let shaderIndex = 0;
		let shaders = [wiremirror, wiremirrorGray, wiremirrorTwoTone];
		document.addEventListener('keydown', function(event){
			if(event.keyCode === 32) {
				console.log(shaders[shaderIndex])
				mainGroup.remove(shaders[shaderIndex % shaders.length]);
				mainGroup.add(shaders[++shaderIndex % shaders.length])
			}
		} );

		//onResize();

		this.animate();
	}


	componentDidMount(){
		const websocket = new WebSocket('ws://localhost:8002');
		websocket.onopen = evt => { this.onOpen(evt) };
		websocket.onmessage = evt => { this.onMessage(evt) };

		this.video = document.getElementById('videoel');
		// this.video = document.createElement('video');
		this.video.autoplay = true;
		// this.video.loop = true;
		// this.video.playsinline = true;
		// this.video.style.width = vidWidth;
		// this.video.style.height = vidHeight;
		// document.body.appendChild(this.video);
		this.container = document.querySelector('#testContainer');

		this.THREE = THREE;
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
		// 	console.log('SCRIPT LOADED')
		// 	canvasText = new window.Blotter.Text("frog50", {
		// 		family : "sans-serif",
		// 		size : 50,
		// 		fill : "#000",
		// 		uSpeed: .1,
		// 		uVolatility: .15,
		// 		uSeed: .1
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

		// document.body.appendChild(script);
		// document.body.appendChild(script2);

		
	}

	render() {
		return (
			<div className="App">
				<div id="testContainer" />
				<video id="videoel" width={vidWidth} height={vidHeight} preload="auto" loop playsinline autoplay style={{position: 'absolute', zIndex: '-5', top: 0, left: 0}}>
				</video>
				<button onClick={() => {
						vidCanvasCtx.drawImage(this.video, 0, 0, vidCanvas.width, vidCanvas.height);
						var dataURI = vidCanvas.toDataURL('image/jpeg');
						backgroundImage = new THREE.TextureLoader().load( dataURI );
						uniforms.texture2.value = backgroundImage;
					}} style={{top: '300px', position: 'relative'}}> <div style={{}}> take pic </div> </button>
			</div>
		);
	}
}

export default Mac;
