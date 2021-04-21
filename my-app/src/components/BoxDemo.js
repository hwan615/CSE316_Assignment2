import React from "react";

function BoxDemo(props) {

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                className="question"
                name="content"
                value={props.content} 
                onChange={props.boxChange} />
            <br />
            <select className="option" id="option" onChange={props.selectChange} name="option" value={props.option}>
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select>
            <button type="button" className="material-icons del" onClick={() => props.handleDelete(props.id)}>delete_outline</button>
        </div>
    );
}

export default BoxDemo;