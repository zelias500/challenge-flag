import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className='btnContainer'>
				<button className='btn btn-success voter' onClick={() => this.props.vote(true)}>CATCH</button>

				<button className='btn btn-danger voter' onClick={() => this.props.vote(false)}>NO CATCH</button>
			</div>
			)
	}
})