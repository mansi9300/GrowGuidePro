import React from "react";
import { Link } from 'react-router-dom';

function TipLink(props) {
    if (props.home === true) {
        return (
            <Link to={`Tips/${props.name.toLowerCase().replace("'", " ")}`} className="homelinklink">
                <img src={props.src} alt={`a ${props.name}`} id={`${props.name}_Tip`} className="moving-Tip" />
            </Link>)
    }
    return (
        <Link to={props.name.toLowerCase().replace("'", "")} className="Tip-link-link">
            <p>{props.name.replace(/-/g, " ")}</p>
            <img src={props.src} alt={`a ${props.name}`} id={`${props.name}_Tip`} className="TipImg" />
            <br />
            <p>Amount left: {props.amount}</p><br />
        </Link>
    )
}
export default TipLink