import React from 'react'
import { useState } from 'react'
function Best4u() {
    const [climateAns, setClimateAns] = useState()
    const [soilTypeAns, setSoilTypeAns] = useState()
    const [water, setWater] = useState()
    const [cold, setCold] = useState()
    const [time, setTime] = useState()
    const [localExport, setLocalExport] = useState()
    const [resAgainstPest, setResAgainstPest] = useState()
    const [specialAtt, setSpecialAtt] = useState()
    const [moist, setMoist] = useState()
    const [equipment, setEquipment] = useState()

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
    const results = [];
    const onClickHandler = (event) => {

        console.log({ climateAns })
        const form = document.getElementById('testForm');
        if (form.checkValidity()) {
            alert('Form is valid and ready to submit!');
            getSelectedValues()
            console.log(results)
        } else {
            alert("Form invalid")
            event.preventDefault();
        }
    }
    function getSelectedValues() {
        const form = document.getElementById('testForm');
        const formData = new FormData(form);
        for (const [name, value] of formData.entries()) {
            results.push(`${name}: ${value}`);
        }
    }
    const cropInstances = crops.map(crop => new CropsClass());
    return (
        <>
            <form id="testForm">
                <label htmlFor="q1">1. Does your region have the appropriate climate for growing this crop?</label><br />
                <input type="radio" id="q1a" name="q1" value="A" required />
                <label htmlFor="q1a">A. Yes, the climate is ideal year-round.</label><br />
                <input type="radio" id="q1b" name="q1" value="B" />
                <label htmlFor="q1b">B. The climate is suitable for part of the year.</label><br />
                <input type="radio" id="q1c" name="q1" value="C" />
                <label htmlFor="q1c">C. The climate is unpredictable, but manageable with adjustments.</label><br />
                <input type="radio" id="q1d" name="q1" value="D" />
                <label htmlFor="q1d">D. No, the climate is not suitable for this crop.</label><br /><br />

                <label htmlFor="q2">2. Is your soil type compatible with this crop's growing requirements?</label><br />
                <input type="radio" id="q2a" name="q2" value="A" required />
                <label htmlFor="q2a">A. Yes, the soil is perfectly suited.</label><br />
                <input type="radio" id="q2b" name="q2" value="B" />
                <label htmlFor="q2b">B. It can be made suitable with amendments.</label><br />
                <input type="radio" id="q2c" name="q2" value="C" />
                <label htmlFor="q2c">C. The soil is marginal but can support the crop.</label><br />
                <input type="radio" id="q2d" name="q2" value="D" />
                <label htmlFor="q2d">D. No, the soil is unsuitable for this crop.</label><br /><br />

                <label htmlFor="q3">3. Do you have enough water to meet the crop’s irrigation needs?</label><br />
                <input type="radio" id="q3a" name="q3" value="A" required />
                <label htmlFor="q3a">A. Yes, I have access to plenty of water.</label><br />
                <input type="radio" id="q3b" name="q3" value="B" />
                <label htmlFor="q3b">B. Water is available but may be limited during dry seasons.</label><br />
                <input type="radio" id="q3c" name="q3" value="C" />
                <label htmlFor="q3c">C. Water is scarce, but irrigation can be managed with proper techniques.</label><br />
                <input type="radio" id="q3d" name="q3" value="D" />
                <label htmlFor="q3d">D. No, I do not have sufficient water resources.</label><br /><br />

                <label htmlFor="q4">4. Can this crop tolerate frost or extreme cold temperatures?</label><br />
                <input type="radio" id="q4a" name="q4" value="A" required />
                <label htmlFor="q4a">A. Yes, it is frost-tolerant.</label><br />
                <input type="radio" id="q4b" name="q4" value="B" />
                <label htmlFor="q4b">B. It can handle mild frost with protection.</label><br />
                <input type="radio" id="q4c" name="q4" value="C" />
                <label htmlFor="q4c">C. No, frost will damage the crop.</label><br />
                <input type="radio" id="q4d" name="q4" value="D" />
                <label htmlFor="q4d">D. Frost is not an issue in my region.</label><br /><br />

                <label htmlFor="q5">5. Does the length of your local growing season align with the time needed for this crop to mature?</label><br />
                <input type="radio" id="q5a" name="q5" value="A" required />
                <label htmlFor="q5a">A. Yes, the growing season is long enough.</label><br />
                <input type="radio" id="q5b" name="q5" value="B" />
                <label htmlFor="q5b">B. The season is short, but manageable.</label><br />
                <input type="radio" id="q5c" name="q5" value="C" />
                <label htmlFor="q5c">C. The growing season is not long enough.</label><br /><br />

                <label htmlFor="q6">6. Is there a local or export market for this crop?</label><br />
                <input type="radio" id="q6a" name="q6" value="A" required />
                <label htmlFor="q6a">A. Yes, there is a strong demand for this crop.</label><br />
                <input type="radio" id="q6b" name="q6" value="B" />
                <label htmlFor="q6b">B. There is some demand locally, but limited export options.</label><br />
                <input type="radio" id="q6c" name="q6" value="C" />
                <label htmlFor="q6c">C. No, market demand is low for this crop.</label><br /><br />


                <label htmlFor="q7">7. Does this crop have resistance to common pests and diseases in your region?</label><br />
                <input type="radio" id="q7a" name="q7" value="A" required />
                <label htmlFor="q7a">A. Yes, it is naturally resistant.</label><br />
                <input type="radio" id="q7b" name="q7" value="B" />
                <label htmlFor="q7b">B. It is moderately resistant with some pesticide use.</label><br />
                <input type="radio" id="q7c" name="q7" value="C" />
                <label htmlFor="q7c">C. No, it is prone to pests and diseases.</label><br /><br />


                <label htmlFor="q8">8. Does this crop require special planting, maintenance, or harvesting techniques?</label><br />
                <input type="radio" id="q8a" name="q8" value="A" required />
                <label htmlFor="q8a">A. No, it can be planted and harvested with standard methods.</label><br />
                <input type="radio" id="q8b" name="q8" value="B" />
                <label htmlFor="q8b">B. It requires some specialized techniques.</label><br />
                <input type="radio" id="q8c" name="q8" value="C" />
                <label htmlFor="q8c">C. Yes, it needs significant labor and specialized equipment.</label><br /><br />

                <label htmlFor="q9">9. Is the crop tolerant of varying soil moisture conditions?</label><br />
                <input type="radio" id="q9a" name="q9" value="A" required />
                <label htmlFor="q9a">A. Yes, it adapts well to different moisture levels.</label><br />
                <input type="radio" id="q9b" name="q9" value="B" />
                <label htmlFor="q9b">B. It can tolerate some variation but needs consistent moisture.</label><br />
                <input type="radio" id="q9c" name="q9" value="C" />
                <label htmlFor="q9c">C. No, it requires strict moisture control.</label><br /><br />

                <label htmlFor="q10">10. Do you have the necessary equipment and resources to grow this crop successfully?</label><br />
                <input type="radio" id="q10a" name="q10" value="A" required />
                <label htmlFor="q10a">A. Yes, I have everything needed.</label><br />
                <input type="radio" id="q10b" name="q10" value="B" />
                <label htmlFor="q10b">B. I have most resources, but may need to invest in some equipment.</label><br />
                <input type="radio" id="q10c" name="q10" value="C" />
                <label htmlFor="q10c">C. No, I will need significant investments in equipment and resources.</label><br /><br />

                <button type="submit" onClick={onClickHandler}>Submit</button>
            </form>
        </>
    );
}
export default Best4u