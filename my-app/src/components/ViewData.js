import React, { useState, useEffect } from "react";
import { getQuestionsAPIMethod } from "../api/client";


function ViewData() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        getQuestionsAPIMethod((questions) => {
            setQuestions(questions);
            console.dir(questions);
        });
    }, []);

    return (
        <div>
            {questions.map(question => question._id + " and            ")}

        </div>
    );
}

export default ViewData;