import React from "react";

function BoxDemo({ content, option, textChange, selectChange, handleDelete, box }) {

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                className="question"
                name="content"
                value={content}
                onChange={textChange} />
            <br />
            <select className="option" id="option" onChange={selectChange} name="option" value={option}>
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select>
            <button type="button" className="material-icons del" onClick={() => handleDelete(box.id)}>delete_outline</button>
        </div>
    );
}

export default BoxDemo;