import React, { useState, useEffect } from "react";
import "../App.css";
import QuestionDemo from "./QuestionDemo";
import MultipleChoice from "./multipleChoice";
import { getQuestionsAPIMethod } from "../api/client";

function QuestionList() {

    const [questions, setQuestions] = useState([]);
    const [questionnum, setquestionnum] = useState(0);

    useEffect(() => {
        getQuestionsAPIMethod((questions) => {
            setQuestions(questions);
            console.dir(questions);
        });
    }, []);

    const addquestion = () => {
        const newquestion = {
            text: '',
            answerType: 'number',
            _id: questionnum
        };
        setQuestions([...questions, newquestion]);
        setquestionnum(questionnum + 1);
        console.log(questions);
    };

    // const newquestion = {
    //     text: '',
    //     answerType: 'number',
    //     multipleChoiceResponses: '',
    //     creationDate: Date.now()
    // };

    const handleDelete = (_id) => {
        setQuestions(questions.filter(q => q._id !== _id));
    }

    const selectChange = (e, question) => {
        question.answerType = e.target.value;
        console.log(questions);
        setQuestions([...questions]);
    }

    const questionChange = (e, question) => {
        question.text = e.target.value;
        console.log(questions);
        setQuestions([...questions]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("tset before")
    }

    return (
        <div className="main">
            <div className="boxtop">
                <h2>Edit Questions:</h2>
                <button id="plus-btn" className="material-icons plus" onClick={addquestion}>add_circle_outline</button>
            </div>
            <form className="questiones">
                {questions.map(question => {
                    return (
                        <QuestionDemo
                            text={question.text}
                            question={question}
                            questionChange={(e) => questionChange(e, question)}
                            selectChange={(e) => selectChange(e, question)}
                            text={question.text}
                            question={question}
                            handleDelete={handleDelete}
                            _id={question._id}
                            key={question._id} />
                    );
                })}
                <MultipleChoice />
                <button className="save-btn" type="submit" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    );
}


export default QuestionList;