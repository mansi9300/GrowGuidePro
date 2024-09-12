import React from "react";

function Crop(props) {
    return (
        <div className="cropWidget">
            <img src={props.img} alt={`${props.name}`} className="cropImage" />
            {props.name.toUpperCase()}
        </div>
    )
}
export default Crop