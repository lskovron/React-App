import React from 'react';

export class HikeCard extends React.Component {

	render() {
		const {title, id} = this.props.hike;
		return (
			<div className='col-sm-3'>
				<h2>{title}</h2>
				<button id={id} className="btn btn-primary" onClick={this.props.viewDetails.bind(this, id)}>View Details</button>
			</div>
		)
	}



}