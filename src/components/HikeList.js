import React from 'react';
import {HikeCard} from './HikeCard'; 

export class HikeList extends React.Component {
	render(){
		return (
			<div className='container'>
				<div className="row">
					{this.props.hikes.map((hike)=>(
						<HikeCard key={hike.id} hike={hike} viewDetails={this.props.viewDetails} />
					))}
				</div>
			</div>
		);;
	}
}