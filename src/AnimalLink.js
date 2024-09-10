import React from "react";
import { Link } from 'react-router-dom';

function AnimalLink(props) {
    if (props.home === true) {
        return (
            <Link to={`animals/${props.name.toLowerCase().replace("'", " ")}`} className="homelinklink">
                <img src={props.src} alt={`a ${props.name}`} id={`${props.name}_animal`} className="moving-animal"/>
            </Link>)
    }
    return (
        <Link to={props.name.toLowerCase().replace("'", "")} className="animal-link-link">
            <p>{props.name.replace(/-/g, " ")}</p>
            <img src={props.src} alt={`a ${props.name}`} id={`${props.name}_animal`} className="animalImg" />
            <br />
            <p>Amount left: {props.amount}</p><br />
        </Link>
    )
}
export default AnimalLink