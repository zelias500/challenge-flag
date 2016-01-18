import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className='mgmtBtn'>
				<button className='btn btn-info' onClick={this.props.getRand}>Get Random Video</button>
			</div>
			)
	}
})