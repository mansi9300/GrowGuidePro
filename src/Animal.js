import React from 'react'

function Animal(props) {
    return (
        <div className='animalconta'>
            Name: <span style={{ color: "red", fontWeight: "700"}}>{props.name}</span> Habitat: {props.habitat} Diet: {props.diet} Threats: {props.threats} Remaining Members: {props.amount}
            <br />
            <article className='articleanimal'>
                <img src={props.src} alt={`a ${props.name}`} id={`${props.name}_img`} className='animal_Img' />
                <p>{props.desc}</p><br></br>
            </article>
            Current Actions: {props.curractions}<br></br>
            What Can You Do: {props.whatcanyoudo}
        </div>
    )
}
export default Animal