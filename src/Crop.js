import React from "react";

function Crop(props) {
    return (
        <div className="cropWidget">
            <img src={props.image} alt={props.name} className="cropImage" />
            <h3 className="cropName">{props.name}</h3>
            <p className="cropStatus">{props.isdead ? "Status: Dead" : "Status: Alive"}</p>
            <p className="cropPoints">Points: {props.point}</p>
        </div>
    );
}

export default Crop;