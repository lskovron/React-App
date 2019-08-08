import React from 'react';

export class EditHike extends React.Component {
	render (){
		let currentHike = {};
		this.props.hikes.map((hike)=>(
			this.props.id === hike.id ? currentHike = {title:hike.title, location:hike.location, distance:hike.distance, notes:hike.notes} : ''
		))
		return (
			<form>
				<label>Title</label>
				<input type='text' name="title" value={currentHike.title} />
				<label>Location</label>
				<input type='text' name="location" value={currentHike.location} />
				<label>Distance</label>
				<input type='text' name="distance" value={currentHike.distance} />
				<label>Notes</label>
				<input type='textarea' name="notes" value={currentHike.notes} rows="5" />
				<input type='submit' onClick={this.props.saveChanges} value='Save' />
			</form>
		)
		
	}
}