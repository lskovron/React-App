import React from 'react';

export class ViewHike extends React.Component {
	render (){
		return (
			<div>
				<h1>Details</h1>
				{this.props.hikes.map((hike)=>(
					this.props.id===hike.id ?
					<ul key={hike.id}>
						{hike.title ? <li><strong>Title: </strong>{hike.title}</li> : ''}
						{hike.distance ? <li><strong>Distance: </strong>{hike.distance}</li> : ''}
						{hike.location ? <li><strong>Location: </strong>{hike.location}</li> : ''}
						{hike.notes ? <li><strong>Notes: </strong>{hike.notes}</li> : ''}
						<button onClick={this.props.editHike}>Edit Details</button>
						<button onClick={this.props.deleteHike.bind(this, hike.id)}>Delete Hike</button>
					</ul>
					: ''
				))}
			</div>
		)
	}
}