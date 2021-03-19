import React from 'react';
import './card.styles.css';


export const Card = (props) => {
    const mapPosition = {
        "GK": "Goalkeeper",
        "D": "Defense",
        "M": "Midfielder",
        "A": "Striker"
    }

    const countryMap = {
        "France": "fr",
        "Argentina": "ar",
        "Belgium": "be",
        "Spain": "es",
        "England": "gb",
        "Italy": "it",
        "Morocco": "ma",
        "Portugal": "pt",
        "United States": "um",
        "Brazil": "br",
        "Germany": "de",
        "Croatia": "hr",
        "Senegal": "sn",
        "Scotland": "gb",
        "Denmark": "dk"
    }
    return(
        <div className="card">
            <img alt={props.player.CommonName} src={props.player.PhotoUrl} />
            <h2>{props.player.CommonName}</h2>
            <span>{`${mapPosition[props.player.Position]} - ${props.player.Jersey}`}</span> 
            <img alt={props.player.Nationality} src={`https://www.countryflags.io/${countryMap[props.player.Nationality]}/shiny/64.png`} />
        </div>
    );
}