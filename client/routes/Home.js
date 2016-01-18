import React from 'react';
import Challenge from '../components/Challenge.jsx';
import ManagementButtons from '../components/ManagementButtons.jsx';
import Dispatcher from '../dispatcher';

var Home = React.createClass({
	getInitialState: function() {
		return {vid: ''};
	},
	componentDidMount: function() {
		fetch('/api/vid/random')
		.then(res => {
			return res.json();
		})
		.then(vid => {
			this.setState({vid: vid})
		});

		Dispatcher.on('NEW_VID', (vid) => {
			this.setState({vid:vid});
		})
	},
	getRandomVid: function(){
		fetch('/api/vid/random')
		.then(res => {
			return res.json()
		})
		.then(vid => {
			// make sure you get a different video
			if (this.state.vid.vidID === vid.vidID) {
				return this.getRandomVid();
			}
			else {
				this.setState({
					vid: vid
				})
				Dispatcher.emit('RANDOM_VID');
			}
		})
	},
	render: function() {
		return (
			<div>
				<Challenge vid={this.state.vid}/>
				<ManagementButtons getRand={this.getRandomVid} />
			</div>
		);
	}
});

module.exports = Home;
