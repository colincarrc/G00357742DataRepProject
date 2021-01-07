import React from 'react'
import Players from './players';
import axios from 'axios';


class Readteam extends React.Component {

    state = {
        players: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/players')
            .then((response) => {
                this.setState({ players: response.data.players })
            })
            .catch((error) => {
                console.log(error);
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
                <h1 style={mystyle}>Your Team!</h1>
                <Players myPlayers={this.state.players}></Players>
            </div>
        );
    }
}
export default Readteam;