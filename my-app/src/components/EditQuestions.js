import React from "react";
import Box from "./Box";

function EditQuestions() {

    return (
        <div className="main">
            <form className="boxes">
                <Box />
                
                <button className="save-btn" type="submit">Save</button>
            </form>
        </div>
    );
}

export default EditQuestions;