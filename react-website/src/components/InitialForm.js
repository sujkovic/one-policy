import React, { useState, useEffect } from "react";
import "./InitialForm.css";
import { Link } from "react-router-dom";

var today = new Date();
// function isValidUSZip(sZip) {
//     return /^\d{5}(-\d{4})?$/.test(sZip);
//  }

export default function InitialForm() {
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);



    useEffect(() => {

    }, [])

    return(
        <div className="form-container">
            <div className="initialForm">
                <h1> Tell us about you.</h1>
                <form>
                    <div className="gender-div">
                        <label>Gender:</label>
                        <div className="gender-inputs">
                            <button className="gender-input"
                                onClick={() => {
                                    setMale(true)
                                }}
                                type="button"
                            />
                            <button className="gender-input"
                                onClick={() => {
                                    setFemale(true)
                                }}
                                type="button"
                                />
                        </div>
                    </div>
                    
                    <div className="dob-div">
                        <label>Date of birth:</label>
                        <div className="date-inputs">
                            <input className="date-input"
                                type="number"
                                required
                                min={1}
                                max={12}
                            />
                            <input className="date-input"
                                type="number"
                                required
                                min={1}
                                max={31}
                            />
                            <input className="date-input"
                                type="number"
                                required
                                min={1900}
                                max={today.getFullYear() - 17}
                            />
                        </div>
                    </div>
                    
                    <div className="zipcode-div">
                        <label>ZIP code:</label>
                        <input id="zipcode-input"
                            type="number"
                            required
                        />
                    </div>
                    
                    <div className="submit-div">
                        <button id="button">
                            <span>Submit!</span>
                            <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}