import React from 'react';
import axios from 'axios';

class EditPlayer extends React.Component {

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

  componentDidMount() {
    console.log("load " + this.props.match.params.id);

    axios.get('http://localhost:4000/api/players/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          players: response.data.players
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onChangeName(e) {
    this.setState({
      Title: e.target.value
    });
  }

  onChangePosition(e) {
    this.setState({
      Year: e.target.value
    });
  }
  onChangeImage(e) {
    this.setState({
      Poster: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    alert("Player: " + this.state.Name + " "
      + this.state.Position + " " +
      this.state.Image);

    const newPlayer = {
      Title: this.state.Name,
      Year: this.state.Position,
      Poster: this.state.Image
    };

    axios.put('http://localhost:4000/api/players/' + this.state._id, newPlayer)
      .then((xyz) => {
        console.log(xyz);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
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
export default EditPlayer;
