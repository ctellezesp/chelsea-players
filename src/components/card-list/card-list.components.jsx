import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
   return(
       <div className="grid-cards">
           {props.players.map((player, index) => {
               return(
                    <Card key={index} player={player} />   
               );
           })}
       </div>
   );
}