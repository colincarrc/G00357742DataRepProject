import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class Createplayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: '',
      Nation: '',
      Position: ''
    };


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePlayerNationChange = this.handlePlayerNationChange.bind(this);
    this.handlePlayerPositionChange = this.handlePlayerPositionChange.bind(this);
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);

  }

  handlePlayerNameChange(e) {
    this.setState({ Name: e.target.value });
  }

  handlePlayerNationChange(e) {
    this.setState({ Nation: e.target.value });
  }

  handlePlayerPositionChange(e) {
    this.setState({ Position: e.target.value });
  }

  handleSubmit(e) {
    alert(this.state.Name + "      " + this.state.Nation
      + "       " + this.state.Position);
    e.preventDefault();


    const newPlayer = {
      name: this.state.Name,
      nation: this.state.Nation,
      position: this.state.Position
    };
    axios.post('http://localhost:4000/api/players', newPlayer)
      .then()
      .catch();


    this.setState({
      Name: '',
      Nation: '',
      Position: ''
    });
  }

  render() {


    const mystyle = {


      color: "white",
      backgroundColor: "black",
      padding: "15px",
      fontFamily: "Sans Serif"
    };

    return (



      <div>


        <h1 style={mystyle}>Create your team by making a player below !</h1>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <h3 style={mystyle}>Player name</h3>
            <input
              type='text'
              className='form-control'
              value={this.state.Name}
              onChange={this.handlePlayerNameChange}
            ></input>
          </div>
          <div className='form-group'>
            <h3 style={mystyle}>Player Position</h3>
            <input
              type='text'
              className='form-control'
              value={this.state.Nation}
              onChange={this.handlePlayerNationChange}
            ></input>
          </div>
          <div className='form-group'>
            <h3 style={mystyle}>Image of selected player</h3>
            <textarea
              row='3'
              className='form-control'
              value={this.state.Position}
              onChange={this.handlePlayerPositionChange}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Add Player">
            </input>
          </div>
        </form>

      </div>

    );
  }
}

export default Createplayer;