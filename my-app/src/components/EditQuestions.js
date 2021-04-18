import React, { useState } from "react";
import BoxList from "./BoxList";

function EditQuestions() {

    const [questions, setQuestions] = useState([
        {
            text: "number of people",
            typeOfQ: "newday"
        },
        {
            text: "number of children",
            typeOfQ: "nextday"
        }
    ]);

    return (
        questions.map((question) =>
            <div>
                <input name="" value={question.text} />
            </div>
        )
    );
}

export default EditQuestions;