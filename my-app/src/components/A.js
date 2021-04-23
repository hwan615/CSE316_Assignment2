import React, { useState, useEffect } from "react";
import {getQuestionsAPIMethod} from "../api/client";

function A() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        console.log('asdf');
        getQuestionsAPIMethod((questions) => {
            console.log('aa');
            setQuestions(questions);
            console.dir(questions);
            console.log('aaaa');
        });
    }, []);

    return (
        <div>
            Authors:
            {questions.map((question) =>
                <div key={question._id}>
                    {question.text}
                </div>
            )}
        </div>
    );
}

export default A;