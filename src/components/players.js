import React from 'react';
import PlayerItem from './playeritem';

class Players extends React.Component{

    render(){
        return this.props.myPlayers.map((player)=>{
            
            return <PlayerItem key={player._id} player={player}></PlayerItem>
        });
    }
}
export default Players;