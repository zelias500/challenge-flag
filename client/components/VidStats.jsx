import React from 'react';

export default React.createClass({
	getOfficialCall: function() {
		if (this.props.vid.officialCall) return 'GOOD';
		return 'NO GOOD';
	},
	getTotalVotes: function() {
		return this.props.vid.yesVotes + this.props.vid.noVotes;
	},
	calcPercentage: function(bool) {
		return Math.floor(Number((this.props.vid.yesVotes/this.getTotalVotes())*100)) || 0;
	},
	render: function() {
		return (
			<div className='vidStats'>
				<h3 className='yesVotes'>{this.calcPercentage()}% said GOOD</h3>
				<h2>Official call: {this.getOfficialCall()}</h2>
				<h3 className='noVotes'>{100-this.calcPercentage()}% said NO GOOD </h3>
			</div>
		);
	}
})