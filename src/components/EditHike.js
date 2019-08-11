import React from 'react';

export class EditHike extends React.Component {

	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.saveChanges();
	}


	render (){
		let currentHike = {};
		this.props.hikes.map((hike)=>(
			this.props.id === hike.id ? currentHike = {title:hike.title, location:hike.location, distance:hike.distance, notes:hike.notes, id:hike.id} : ''
		))
		return (


			<form onSubmit={this.handleSubmit} data-id={currentHike.id}>
				
				<label>Title</label>
				<input 
					type='text' 
					name="title" 
					data-id={currentHike.id}
					value={currentHike.title} 
					onChange={this.props.editDetails} />

				<label>Location</label>
				<input 
					type='text' 
					name="location" 
					data-id={currentHike.id}
					value={currentHike.location} 
					onChange={this.props.editDetails} />

				<label>Distance</label>
				<input 
					type='text' 
					name="distance" 
					data-id={currentHike.id}
					value={currentHike.distance} 
					onChange={this.props.editDetails} />

				<label>Notes</label>
				<input 
					type='text' 
					name="notes" 
					data-id={currentHike.id}
					value={currentHike.notes} 
					onChange={this.props.editDetails} />
				

				<input type='submit' value='Save' />

			</form>

		)
		
	}
}

