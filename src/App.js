import React from 'react';
import './bootstrap.min.css';
import './App.css';
import defaultBackground from './images/default-background.jpg';
import {Header} from './components/Header';
import {HikeList} from './components/HikeList';
import {HikeDetails} from './components/HikeDetails';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {

      background: 'url('+defaultBackground+')',
      title: 'Hikes',

      hikes: [
        {
          id: '1',
          title: 'Ouzel Falls',
          distance: '8.2 miles',
          location: 'Allenspark, CO',
          notes: 'A beautiful hike up to a waterfall'
        },
        {
          id: '2',
          title: 'Mount Sanitas',
          distance: '4.3 miles',
          location: 'Boulder, CO',
          notes: 'A peak with 360 degree views'
        }
      ],

      editHike: '',
      editing: false,

    }

  }

  render(){
    return (
      <div>

        <Header background={this.state.background} title={this.state.title} />

        <section id="page-content">

          <HikeList 
          hikes={this.state.hikes} 
          viewDetails={this.viewDetails} />

          { this.state.editHike ? (
            <HikeDetails 
            closeDetails={this.closeDetails} 
            editHike={this.editHike}
            deleteHike={this.deleteHike} 
            editing={this.state.editing} 
            id={this.state.editHike} 
            hikes={this.state.hikes}
            saveChanges={this.saveChanges}
            editDetails={this.editDetails} />
            ) : '' }

        </section>
      </div>
    );
  }

  viewDetails = (id) => {
    this.setState({editHike:id});
  }

  closeDetails = (e) => {
    //remove the EditHike component
    this.setState({editHike:'',editing:false});
  }

  editHike = (e) => {
    //render the EditHike component
    this.setState({editing:true});
  }

  editDetails = (e, id) => {
    //get index of hike being edited in state.hikes aray
    let index = this.state.hikes.findIndex( hike => hike.id === e.target.dataset.id );
    //make a copy of array
    let hikes = [...this.state.hikes];
    //edit the copy
    console.log(hikes[index]);
    hikes[index][e.target.name] = e.target.value;
    console.log(hikes[index]);
    //set state with edited hikes array
    this.setState({
      hikes: hikes
    })


  }

  saveChanges = () => {
    //remove the EditHike component
    this.setState({editHike:'',editing:false});
  }


  deleteHike = (id) => {
    this.setState({
      hikes: [...this.state.hikes.filter((hike) => hike.id !== id)],
      editHike:''
    })
  }



}

export default App;
