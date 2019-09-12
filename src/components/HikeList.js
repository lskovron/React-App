import React from 'react';
import {HikeCard} from './HikeCard'; 

//use a stateless function component to render JSX
export const HikeList = (props) => {
	return (
		<div className='container'>
			<div className="row">
				{props.hikes.map((hike)=>( //loop through hikes
					<HikeCard key={hike.id} hike={hike} viewDetails={props.viewDetails} />
				))}
			</div>
		</div>
	);
}