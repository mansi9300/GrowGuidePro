import TestForm from './TestForm';
import React, { useState, useRef } from 'react';
import Crop from './Crop';
function Best4u({ scrollRef }) {
    const [isFinished, setIsFinished] = useState(false);
    const [result, setResult] = useState([]);

    class CropsClass {
        constructor(point, isdead, name) {
            this.point = point;
            this.isdead = isdead;
            this.name = name
        }
    }

    const crops = [
        "Rice",
        "Wheat",
        "Corn",
        "Soybeans",
        "Barley",
        "Sugarcane",
        "Potatoes",
        "Cassava",
        "Tomatoes",
        "Bananas",
        "Cotton",
        "Coffee",
        "Cocoa",
        "Oranges",
        "Grapes",
        "Onions",
        "Peanuts",
        "Oats",
        "Lettuce",
        "Sorghum",
    ];

    const cropInstances = crops.map(crop => new CropsClass(0, false, crop));
    const [bestCrops, setBestCrops] = useState([cropInstances[1], cropInstances[2], cropInstances[0]]);
    const onClickHandler = (event) => {
        event.preventDefault();
        console.log(isFinished);
        const form = document.getElementById('testForm');

        if (form.checkValidity()) {
            getSelectedValues();
            console.log(result);
            form.reset();
            setIsFinished(true);
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else {
            alert("Form invalid");
            setIsFinished(false);
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    function getSelectedValues() {
        const form = document.getElementById('testForm');
        const formData = new FormData(form);
        const results = [];

        for (const [name, value] of formData.entries()) {
            results.push(`${name}: ${value}`);
        }

        setResult(results);
    }
    const TestResults = () => {
        return (
            <div className='test-container'>
                {bestCrops.map((crop) => (
                    <Crop key={crop.name} img={crop.name} name={crop.name}></Crop>
                ))}
            </div>
        )
    }
    return (
        <>
            {isFinished ? (
                <>
                    <TestResults />
                </>
            ) : (
                null
            )}
            <TestForm onClick={onClickHandler} />
        </>
    );
}

export default Best4u;