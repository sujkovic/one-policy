import React, { useState, useEffect } from "react";
import "./InitialForm.css";
import { Link } from "react-router-dom";

var today = new Date();
// function isValidUSZip(sZip) {
//     return /^\d{5}(-\d{4})?$/.test(sZip);
//  }

export default function InitialForm() {
    const [male, setMale] = useState(true);
    const [female, setFemale] = useState(false);


    useEffect(() => {

    }, [])

    return (
        <div className="form-container">
            <div className="initialForm">
                <h1> Tell us about you.</h1>
                <form>
                    <div className="gender-div">
                        <span>Gender:</span>
                        <div className="male-div">
                            <input 
                                name="male"
                                onClick={() => {
                                    setMale(true)
                                }}
                                type="button"
                            />
                        </div>
                        <div className="female-div">
                            <input 
                                name="female"
                                onClick={() => {
                                    setFemale(true)
                                }}
                                type="button"
                            />
                        </div>
                    </div>
                    
                    <div className="dob-div">
                        <label className="block font-latoBold text-sm pb-2">
                            Date of birth:
                        </label>
                        <div className="date-inputs">
                            <input className="date-input"
                                placeholder="dd"
                                type="number"
                                required
                                min={1}
                                max={12}
                            />
                            <input className="date-input"
                                placeholder="mm"
                                type="number"
                                required
                                min={1}
                                max={31}
                            />
                            <input className="date-input"
                                placeholder="yyyy"
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
                        <button className="btn">
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