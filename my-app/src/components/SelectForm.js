import React, { useState } from "react";
import "../App.css";

function Box() {

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                name="question"
                onChange={handleChange}
                value={text} />
            <br />
            <select className="option" id="option" value="">
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select>
            <SelectForm />
            <button type="button" className="material-icons del">delete_outline</button>
        </div>
    );
}