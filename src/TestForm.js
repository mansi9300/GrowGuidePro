import React from 'react'; // Assuming you will place the CSS in a separate file

function TestForm(props) {
    return (
        <>
            <form id="testForm" className="form-container">
                <label id="firstq" htmlFor="q1">1. Does your region have the appropriate climate for growing this crop?</label><br />
                <div className="answers">
                    <input type="radio" id="q1a" name="climate" value="A" required />
                    <label htmlFor="q1a">A. Yes, the climate is ideal year-round.</label><br />
                    <input type="radio" id="q1b" name="climate" value="B" />
                    <label htmlFor="q1b">B. The climate is suitable for part of the year.</label><br />
                    <input type="radio" id="q1c" name="climate" value="C" />
                    <label htmlFor="q1c">C. The climate is unpredictable, but manageable with adjustments.</label><br />
                    <input type="radio" id="q1d" name="climate" value="D" />
                    <label htmlFor="q1d">D. No, the climate is not suitable for this crop.</label><br /><br />
                </div>

                {/* Question 2 */}
                <label htmlFor="q2">2. Is your soil type compatible with this crop's growing requirements?</label><br />
                <div className="answers">
                    <input type="radio" id="q2a" name="soilType" value="A" required />
                    <label htmlFor="q2a">A. Yes, the soil is perfectly suited.</label><br />
                    <input type="radio" id="q2b" name="soilType" value="B" />
                    <label htmlFor="q2b">B. It can be made suitable with amendments.</label><br />
                    <input type="radio" id="q2c" name="soilType" value="C" />
                    <label htmlFor="q2c">C. The soil is marginal but can support the crop.</label><br />
                    <input type="radio" id="q2d" name="soilType" value="D" />
                    <label htmlFor="q2d">D. No, the soil is unsuitable for this crop.</label><br /><br />
                </div>

                {/* Question 3 */}
                <label htmlFor="q3">3. Do you have enough water to meet the crop’s irrigation needs?</label><br />
                <div className="answers">
                    <input type="radio" id="q3a" name="water" value="A" required />
                    <label htmlFor="q3a">A. Yes, I have access to plenty of water.</label><br />
                    <input type="radio" id="q3b" name="water" value="B" />
                    <label htmlFor="q3b">B. Water is available but may be limited during dry seasons.</label><br />
                    <input type="radio" id="q3c" name="water" value="C" />
                    <label htmlFor="q3c">C. Water is scarce, but irrigation can be managed with proper techniques.</label><br />
                    <input type="radio" id="q3d" name="water" value="D" />
                    <label htmlFor="q3d">D. No, I do not have sufficient water resources.</label><br /><br />
                </div>

                <button type="submit" className="submit-btn" onClick={props.onClick}>Submit</button>
            </form>
        </>
    );
}

export default TestForm;
