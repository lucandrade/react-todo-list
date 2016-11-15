import React from 'react';

export default class Modal extends React.Component {
    handleClose() {
        this.props.onClose()
    }

    render() {
        const { opened } = this.props;
        const classes = ['modal'];

        if (opened) {
            classes.push('is-active');
        }

		return(
			<div className={classes.join(' ')}>
                <div
                    className="modal-background"
                    onClick={this.handleClose.bind(this)} />
                <div className="modal-content">
                    <div className="box">
                        {this.props.children}
                    </div>
                </div>
                <button
                    className="modal-close"
                    type="button"
                    onClick={this.handleClose.bind(this)} />
			</div>
		);
	}
}
