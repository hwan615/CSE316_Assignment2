import React, { useState, useEffect } from "react";
import "../App.css";
import QuestionDemo from "./QuestionDemo";
import MultipleChoice from "./multipleChoice";
import { createQuestionAPIMethod, getQuestionsAPIMethod } from "../api/client";

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
            answerType: '',
            _id: questionnum
        };
        setQuestions([...questions, newquestion]);
        setquestionnum(questionnum + 1);
    };

    const handleDelete = (_id) => {
        setQuestions(questions.filter(q => q._id !== _id));
    }

    const selectChange = (question, e) => {
        question.answerType = e.target.value;
        console.log(questions);
    }

    const questionChange = (question, e) => {
        question.text = e.target.value;
        console.log(questions);
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
                            answerType={question.answerType}
                            questionChange={(e) => questionChange(question, e)}
                            selectChange={(e) => selectChange(question, e)}
                            handleDelete={handleDelete}
                            _id={question._id}
                            key={question._id} />
                    );
                })}
                <MultipleChoice />
                <button className="save-btn" type="submit">Save</button>
            </form>
        </div>
    );
}


export default QuestionList;