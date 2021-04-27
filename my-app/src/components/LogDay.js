import React from "react";
import "../App2.css";
import Calendar from "./Calendar";

function LogDay() {

    return (
        <div className="main">
            <Calendar />
            <form id="boxes" action="">
                <div id="box1" className="box box1">
                    <h4 className="title">Number of pushups</h4>
                    <br />
                    <input type="tex" className="under" />
                </div>
                
                <div id="box2" className="box box2">
                    <h4 className="title">Had a long walk today</h4>
                    <br />
                    <div>
                        <input type="radio" name="f" className="true" />
                        <label htmlFor="ra">True</label>
                        <input type="radio" name="f" className="false" />
                        <label htmlFor="ra">False</label>
                    </div>
                </div>

                <div id="box3" className="box box3">
                    <h4 className="title">One great thing that happended today</h4>
                    <br />
                    <input type="tex" className="under2" />
                </div>

                <div id="box4" className="box box4">
                    <h4 className="title">Today was a:</h4>
                    <br />
                    <div>
                        <input type="radio" name="ok" className="true" />
                        <label htmlFor="ra">Ok day</label>
                        <br />
                        <input type="radio" name="bad" className="truee" />
                        <label htmlFor="ra">Bad day</label>
                        <br />
                        <input type="radio" name="gt" className="truee" />
                        <label htmlFor="ra">Greate day</label>
                    </div>
                </div>
                <button className="save-btn" type="submit">Submit</button>

            </form>
        </div>
    );
}

export default LogDay;