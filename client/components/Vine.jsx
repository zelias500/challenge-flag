import React from 'react';

export default React.createClass({
	getSrc: function () {
		return 'http://www.youtube.com/embed/'+this.props.vidID+"?autoplay=1";
	},
	render: function() {
		return (
			<div class='container row'>
			<div class='fluid col-xs-12'>
				<iframe type='text/html' width='640' height='390' src={this.getSrc()} />
 			</div>
 			</div>
			)
	}
})