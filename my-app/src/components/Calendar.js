import React, { useState } from "react";
import "../App2.css";

function Calendar() {

    const [date, setDate] = useState(new Date());
    const today = new Date();


    const handlePlus = (e) => {
        if ((date.getTime() + 86400000 - today.getTime()) <= 0) {
            setDate(new Date(date.getTime() + 86400000));
        }
        else {
            alert("can't move forward")
        }
    }

    const handleMinus = (e) => {
        setDate(new Date(date.getTime() - 86400000));
    }

    return (
        <div className="boxtop" id="boxtop">
            <button id="left" className="btn" onClick={handleMinus}>{'<'}</button>
            <div className="cal" id="calendar">
                {/* {toMonth}/{toDate}/{toYear} */}
                {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
            </div>
            <button id="right" className="btn" onClick={handlePlus}>{'>'}</button>
        </div>
    );
}



export default Calendar;