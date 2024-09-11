import TestForm from './TestForm'
import React from 'react';
function Best4u({scrollRef}) {

    class CropsClass {
        constructor(point, isdead) {
            this.point = point
            this.isdead = isdead
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
        "Sorghum"
    ];
    const cropInstances = crops.map(crop => new CropsClass());
    const results = [];
    const onClickHandler = (event) => {
        const form = document.getElementById('testForm');
        if (form.checkValidity()) {
            event.preventDefault()
            getSelectedValues()
            console.log(results)
        } else {
            alert("Form invalid")
            event.preventDefault();
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    function getSelectedValues() {
        results.length = 0
        const form = document.getElementById('testForm');
        const formData = new FormData(form);
        for (const [name, value] of formData.entries()) {
            results.push(`${name}: ${value}`);
        }
    }
    return (
        <>
            <TestForm onClick={onClickHandler} />
        </>
    );
}
export default Best4u