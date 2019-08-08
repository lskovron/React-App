import React from 'react';
import {ViewHike} from './ViewHike';
import {EditHike} from './EditHike';

export class HikeDetails extends React.Component {
	render (){
		return (
			<div id="hike-details">
				<div className="container">
				{this.props.editing ? (
					<EditHike 
					hikes={this.props.hikes} 
					id={this.props.id}
					saveChanges={this.props.saveChanges} />
				) : (
					<ViewHike 
					hikes={this.props.hikes} 
					id={this.props.id} 
					editHike={this.props.editHike} 
					deleteHike={this.props.deleteHike} />
				)}
					<div id="close"><button onClick={this.props.closeDetails.bind(this)}>close</button></div>
				</div>
			</div>
		)
	}
}