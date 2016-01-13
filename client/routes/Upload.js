var React = require('react');

const Upload =  React.createClass({
	render: function() {
		return (
			<div className='uploader'>
			<h3>Title:</h3><input type='text' />
			<h3>Player:</h3><input type='text' />
			<h3>Youtube URL</h3><input type='text' />
			<h3>What did the refs say?</h3> 
			<select>
				<option>CATCH</option>
				<option>NO CATCH</option>
			</select>
			<p><input type='submit' className='btn btn-info' /></p>
			</div>
			)
	}
})

module.exports = Upload;
