import React from "react";
import BoxTop from "./BoxTop";
import Box from "./Box";

function LogData() {

    return (
        <div className="main">
            <BoxTop />
            <form className="boxes">
                <Box />
                <Box />
                <Box />
                <Box />
                
                <button class="save-btn" type="submit">Save</button>
            </form>
        </div>
    );
}

export default LogData;