import React from 'react';

export default React.createClass({
	getOfficialCall: function() {
		if (this.props.vid.officialCall) return 'CATCH';
		return 'NO CATCH';
	},
	getTotalVotes: function() {
		return this.props.vid.yesVotes + this.props.vid.noVotes;
	},
	calcPercentage: function(bool) {
		return Math.floor(Number((this.props.vid.yesVotes/this.getTotalVotes())*100));
	},
	render: function() {
		return (
			<div className='vidStats'>
				<h3 className='yesVotes'>{this.calcPercentage()}% said CATCH</h3>
				<h2>Official call: {this.getOfficialCall()}</h2>
				<h3 className='noVotes'>{100-this.calcPercentage()}% said NO CATCH </h3>
			</div>
		);
	}
})