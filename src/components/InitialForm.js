import React from "react";
import "./InitialForm.css";

var today = new Date();
// function isValidUSZip(sZip) {
//     return /^\d{5}(-\d{4})?$/.test(sZip);
//  }

export default function InitialForm() {
    return(
        <div className="form-container">
            <div className="initialForm">
                <h1> Tell us about you.</h1>
                <form>
                    <div className="gender-div">
                        <label>Gender:</label>
                        <div className="gender-inputs">
                            <input className="gender-input"
                                type="button"
                                required
                            />
                            <input className="gender-input"
                                type="button"
                                required
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
                </form>
            </div>

        </div>
    );
}