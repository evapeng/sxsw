import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Mac from './Mac';

export default class Routes extends Component {
	render(){ 
		return (
			<BrowserRouter>
				<React.Fragment>
					<Route exact path='/' render={() => <Mac/>}/>
				</React.Fragment>
			</BrowserRouter>
		)
	}
}