import React, { useContext, useState } from "react";
import "../App.css";

function BoxDemo() {

    const [contents, setContents] = useState('');
    const [option, setOption] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Text.length === 0) {
            return;
        }
    }

    const contentsChange = (e) => {
        setContents(e.target.value);
    }

    const optionChange = (e) => {
        setOption(e.target.value);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    id="question"
                    className="question"
                    onChange={contentsChange} />
                <br />
                <select className="option" id="option" onChange={optionChange}>
                    <option value="number">Number</option>
                    <option value="text">Text</option>
                    <option value="boolean">Boolean</option>
                </select>
            </div>
        </div>
    );
}

export default BoxDemo;