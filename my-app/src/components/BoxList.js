import React, { useContext, useState } from "react";
import "../App.css";
import BoxDemo from "./BoxDemo";

function BoxList() {

    const [boxes, setBoxes] = useState([]);

    const handleSubmit = () => {
        const newBox = {
            content: "new box",
            id: Date.now()
        };
        setBoxes(boxes.concat(newBox));
    }

    const handleDelete = (id) => {
        setBoxes(boxes.filter(b => b.id !== id));
    }

    return (
        <div className="main">
            <div className="boxtop">
                <h2>Edit Questions:</h2>
                <button id="plus-btn" className="material-icons plus" onClick={handleSubmit}>add_circle_outline</button>
            </div>
            <form className="boxes">
                {boxes.map(box => {
                    return (
                    <div className="box" key={box.id}>
                        <BoxDemo />
                        <button type="button" className="material-icons del" onClick={handleDelete}>delete_outline</button>
                    </div>)
                })}
                <button className="save-btn" type="submit">Save</button>
            </form>
        </div>
    );
}

// function BoxList(props) {
//     return (
//         <div>
//             {props.boxes.map(box => (
//                 <div key={box.id}>
//                     <BoxDemo />
//                 </div>

//             ))}
//         </div>
//     );
// }

export default BoxList;