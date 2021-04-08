import React, { useState } from "react";
import "../App.css";
import BoxDemo from "./BoxDemo";

function Box() {

    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (e) => {
        const newBox = {
            id: Date.now()
        };
        setBoxes(boxes.concat(newBox));
    }

    return (
        <div>
            <div className="boxtop">
                <h2>Edit Questions:</h2>
                <button id="plus-btn" className="material-icons plus" onClick={handleSubmit}>add_circle_outline</button>
            </div>
            <BoxDemo />
        </div>
    );
}

// function BoxList(props) {
//     return (
//         <div>
//             {props.boxes.map(box => (
//                 <BoxDemo key={box.id}/>

//             ))}
//         </div>
//     );
// }

export default Box;