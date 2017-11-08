import React, { Component } from 'react';
import './header.css';

export class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="headerText">Welcome to Brian J Miller Jr's Excellent Website</div>
				<span className="headerSubText">A cool place where I will probably put links to stuff that relates to my life</span>
			</div>
		);
	}
}