import React from "react";
import "../App.css";

function BoxDemo() {

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                name="question" />
            <br />
            <select name="option" id="option" value="">
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select>
            <button type="button" className="material-icons del">delete_outline</button>
        </div>
    );
}

export default BoxDemo;