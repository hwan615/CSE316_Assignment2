import React from "react";
import "../App.css";

function Box() {

    return (
        <div id="box1" className="box box1">
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
                    <button type="button" class="material-icons del">delete_outline</button>
        </div>
    );
}

export default Box;