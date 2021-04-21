import React, { useState } from "react";
import "../App.css";
import BoxDemo from "./BoxDemo";
import MultipleChoice from "./multipleChoice";

function BoxList() {

    const [box, setBox] = useState([]);
    const [boxnum, setBoxnum] =useState(0);

    const boxChange = (boxnum, e) => {
        box[boxnum].content = e.target.value;
        console.log(box);
    }

    const addBox = (e) => {
        const newBox = {
            content: '',
            option: '',
            id: boxnum
        };
        setBox([...box, newBox]);
        setBoxnum(boxnum+1);
    }

    const handleDelete = (id) => {
        setBox(box.filter(b => b.id !== id));
        let temp = id;
        while (boxnum > 1 && temp < boxnum-1) {
            box[temp+1].id = temp;
            temp++;
        }
        setBoxnum(boxnum-1);
    }

    const selectChange = (boxnum, e) => {
        box[boxnum].option = e.target.value;
        console.log(box);
    }

    return (
        <div className="main">
            <div className="boxtop">
                <h2>Edit Questions:</h2>
                <button id="plus-btn" className="material-icons plus" onClick={addBox}>add_circle_outline</button>
            </div>
            <form className="boxes">
                {box.map(b => {
                    return (
                        <BoxDemo
                            content={b[0]}
                            option={b[1]}
                            boxChange={(e) => boxChange(b.id, e)}
                            selectChange={(e) => selectChange(b.id, e)}
                            handleDelete={handleDelete}
                            id={b.id}
                            key={b.id} />
                    );
                })}
                <MultipleChoice />
                <button className="save-btn" type="submit">Save</button>
            </form>
        </div>
    );
}


export default BoxList;