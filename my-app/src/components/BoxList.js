import React, { useEffect, useState } from "react";
import "../App.css";
import BoxDemo from "./BoxDemo";

function BoxList() {

    const [text, setText] = useState([]);
    const [textlist, setTextlist] = useState([]);
    const [select, setSelect] = useState('');
    const [selectlist, setSelectlist] = useState([]);
    const [boxnum, setBoxnum] =useState(0);
    const [boxes, setBoxes] = useState([]);

    const textChange = (boxnum, e) => {
        const newText = {
            text:''
        };
        newText.text = e.target.value;
        console.log(newText.text);
        textlist[boxnum] = newText
        setTextlist([...textlist, ])
        setText([...text, newText]);
    }

    const selectChange = (e) => {
        setSelect(e.target.value);
        selectlist[boxnum] = {select};
        setSelect('');
    }

    const addBox = (e) => {
        const newBox = {
            content: (text),
            option: selectlist[boxnum],
            id: boxnum
        };

        setBoxes([...boxes, newBox]);
        setBoxnum(boxnum+1);
    }

    const handleDelete = (id) => {

        setBoxes(boxes.filter(b => b.id !== id));
    }


    // useEffect(() => {
    //     localStorage.setItem('boxes', JSON.stringify(boxes))
    // }, [boxes])

    return (
        <div className="main">
            <div className="boxtop">
                <h2>Edit Questions:</h2>
                <button id="plus-btn" className="material-icons plus" onClick={addBox}>add_circle_outline</button>
                <button onClick={() => console.log({text})}></button>
            </div>
            <form className="boxes">
                {boxes.map(b => {
                    return (
                        <BoxDemo
                            content={textlist[boxnum]}
                            option={selectlist[boxnum]}
                            textChange={(e) => textChange(b.boxnum, e)}
                            selectChange={selectChange}
                            handleDelete={handleDelete}
                            box={b}
                            key={b.id} />
                    );
                })}
                <button className="save-btn" type="submit">Save</button>
            </form>
        </div>
    );
}


export default BoxList;