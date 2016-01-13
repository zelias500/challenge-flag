import React from 'react';
import Vine from './Vine.jsx';
import VotingButtons from './VotingButtons.jsx';
import VidStats from './VidStats.jsx';
import Dispatcher from '../dispatcher';

const Challenge = React.createClass({
	getInitialState: function(){
		return {hasVoted: false};
	},
	componentDidMount: function() {
		Dispatcher.on('RANDOM_VID', () => {
			this.setState({
				hasVoted: false
			})
		})
	},
	vote: function(bool) {
		fetch('/api/vid/'+this.props.vid._id, {
			method: 'post',
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json'
      		},
			body: JSON.stringify({
				addedVote: bool
			})
		})
		.then(res => {
			return res.json()
		})
		.then(vid => {
			this.setState({
				hasVoted: true
			})
		})
	},

	render: function() {
		return (
			<div className='container'>
			<div className='challenge'>
				<Vine vidID={this.props.vid.vidID} />
				{this.state.hasVoted ? <VidStats vid={this.props.vid} /> :
				<VotingButtons className='btnContainer' vote={this.vote} hasVoted={this.state.hasVoted} />  }
			</div>
			</div>
			)
	}
})

module.exports = Challenge;