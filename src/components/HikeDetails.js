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
					saveChanges={this.props.saveChanges}
					editDetails={this.props.editDetails} />
				) : (
					<ViewHike 
					hikes={this.props.hikes} 
					id={this.props.id} 
					editHike={this.props.editHike} 
					deleteHike={this.props.deleteHike}
					closeDetails={this.props.closeDetails} />
				)}
				</div>
			</div>
		)
	}
}