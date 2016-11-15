import React from 'react';

import Modal from '../components/Modal';

export default class About extends React.Component {
    handleClose() {
        this.props.router.push('/');
    }

	render() {
        return (
			<Modal
                opened={true}
                onClose={this.handleClose.bind(this)}>
                <div>
    				<h1 className='title'>About the author</h1>
    			</div>
            </Modal>
		);
	}
}
