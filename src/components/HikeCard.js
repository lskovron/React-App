import React from 'react';

//use a stateless function component to render JSX
export const HikeCard = (props) => {

	const {title, id} = props.hike;
	return (
		<div className='col-sm-3'>
			<h2>{title}</h2>
			<button id={id} className="btn btn-primary" onClick={props.viewDetails.bind(this, id)}>View Details</button>
		</div>
	)
	
}