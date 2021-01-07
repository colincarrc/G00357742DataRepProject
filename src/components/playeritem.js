import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';


class playeritem extends React.Component {

  constructor() {
    super();
    this.DeletePlayer = this.DeletePlayer.bind(this);
  }

  DeletePlayer(e) {
    console.log("Delete Clicked");
    axios.delete("http://localhost:4000/api/players/" + this.props.player._id)
      .then()
      .catch();
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
        {}


        <Card border="primary" style={{ width: '84rem' }}>
          <Card.Header>{this.props.player.name}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.player.position}></img>
              <footer>
                {this.props.player.nation}
              </footer>
            </blockquote>
          </Card.Body>
          <Button variant="info" onClick={this.DeletePlayer}>Delete Player</Button>
        </Card>
      </div>
    )
  }
}
export default playeritem;