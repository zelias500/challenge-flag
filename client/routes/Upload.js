var React = require('react');

const Upload =  React.createClass({
	getInitialState: function() {
		return {
			title: '',
			player: '',
			vidURL: '',
			officialCall: true,
		}
	},
	handleTitleChange: function (evt) {
		this.setState({title: evt.target.value});
	},
	handlePlayerChange: function (evt) {
		this.setState({player: evt.target.value});
	},
	handleURLChange: function (evt) {
		this.setState({vidURL: evt.target.value});
	},
	handleOfficialCallChange: function (evt) {
		this.setState({officialCall: evt.target.value});
	},
	submit: function(evt) {
		evt.preventDefault();
		let data = {
			title: this.state.title,
			player: this.state.player,
			vidURL: this.state.vidURL,
			officialCall: this.state.officialCall
		}
		console.log("DATA", data);
		fetch('/api/vid', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(res => {
			return res.json()
		})
		.then(vid => {
			this.setState({
				title: '',
				player: '',
				vidURL: '',
				officialCall: '',
				success: true
			})
		})

	},
	render: function() {
		return (
			<div className='uploader'>
			<form name='uploadForm' onSubmit={this.submit}>
				{this.state.success ? <h1>UPLOAD SUCCESSFUL</h1> : null}
				<h3>Title:</h3><input type='text' value={this.state.title} onChange={this.handleTitleChange} />
				<h3>Player:</h3><input type='text' value={this.state.player} onChange={this.handlePlayerChange} />
				<h3>Vine URL</h3><input type='text' value={this.state.vidURL} onChange={this.handleURLChange} />
				<h3>What did the refs say?</h3> 
				<select value={this.state.officialCall} onChange={this.handleOfficialCallChange}>
					<option>CATCH</option>
					<option>NO CATCH</option>
				</select>
			<p><input type='submit' value='post' className='btn btn-info' /></p>
			</form>
			</div>
			)
	}
})

module.exports = Upload;
