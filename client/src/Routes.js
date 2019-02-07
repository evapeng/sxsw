import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Mac from './Mac';
import Mirror from './Mirror';


export default class Routes extends Component {
	render(){ 
		return (
			<BrowserRouter>
				<React.Fragment>
					<Route exact path='/' render={() => <Mirror/>}/>
					<Route exact path='/mac' render={() => <Mac/>}/>
				</React.Fragment>
			</BrowserRouter>
		)
	}
}