import React from 'react';

export default React.createClass({
	getSrc: function () {
		return 'https://vine.co/v/'+this.props.vidID+'/embed/simple';
		// return 'http://www.youtube.com/embed/'+this.props.vidID+"?autoplay=1";
	},
	render: function() {
		return (
			<div class='container row'>
			<div class='fluid col-xs-12'>
				<iframe type='text/html' width='480' height='480' src={this.getSrc()} />
 			</div>
 			</div>
			)
	}
})

