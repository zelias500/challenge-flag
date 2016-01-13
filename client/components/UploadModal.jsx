import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'simple-react-modal';

export default React.createClass({
	getInitialState: function() {
		return {showModal: false};
	},
	open: function() {
		this.setState({showModal: true});
	},
	close: function() {
		this.setState({showModal: false});
	},
	render: function() {
		return (
			<div>
			<button onClick={this.open}>UPLOAD</button>

        <Modal show={this.state.showModal} onHide={this.close}>
        	<Modal.Header closeButton>
        		<Modal.Title>UPLOAD A CATCH TO CHALLENGE</Modal.Title>
        	</Modal.Header>
        	<Modal.Body>
	        	<div>
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
        	</Modal.Body>
        	<Modal.Footer>
            	<button onClick={this.close}>Close</button>
          	</Modal.Footer>
        </Modal>
        </div>
		)
	}

})

