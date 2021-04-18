import React from "react";

function MultipleChoice({ content, textChange, selectChange, handleDelete, box }) {

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
            <select className="option" id="option" onChange={selectChange} name="option" value='multiple choice'>
                <option value="number">Ok day</option>
                <option value="text">Bad day</option>
                <option value="boolean">Greate day</option>
            </select>
            <button type="button" className="material-icons del del2" onClick={() => handleDelete(box.id)}>delete_outline</button>

            <div>
                <input type="radio" name="ok" className="true " />
                <label className="a"for="ra">Ok day</label>
                <br />
                <input type="radio" name="bad" className="truee " />
                <label className="a"for="ra">Bad day</label>
                <br />
                <input type="radio" name="gt" className="truee " />
                <label className="a"for="ra">Greate day</label>
            </div>

        </div>
    );
}

export default MultipleChoice;