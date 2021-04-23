import React, { useState, useEffect } from "react";
import "../App.css";
import QuestionDemo from "./QuestionDemo";
import MultipleChoice from "./multipleChoice";
import {getQuestionsAPIMethod} from "../api/client";

function QuestionList() {

    const [questions, setQuestions] = useState([]);
    const [questionnum, setquestionnum] =useState(0);

    useEffect(() => {
        console.log('asdf');
        getQuestionsAPIMethod((questions) => {
            console.log('aa');
            setQuestions(questions);
            console.dir(questions);
            console.log('aaaa');
        });
    }, []);

    const questionChange = (questionnum, e) => {
        questions[questionnum].text = e.target.value;
        console.log(questions);
    }

    const addquestion = (e) => {
        const newquestion = {
            text: '',
            answerType: '',
            dd: questionnum
        };
        setQuestions([...questions, newquestion]);
        setquestionnum(questionnum+1);
        console.log(questions);
    }

    const handleDelete = (dd) => {
        setQuestions(questions.filter(b => b.dd !== dd));
        let temp = dd;
        while (questionnum > 1 && temp < questionnum-1) {
            questions[temp+1].dd = temp;
            temp++;
        }
        setquestionnum(questionnum-1);
    }

    const selectChange = (questionnum, e) => {
        questions[questionnum].answerType = e.target.value;
        console.log(questions);
    }

    return (
        <div className="main">
            <div className="boxtop">
                <h2>Edit Questions:</h2>
                <button id="plus-btn" className="material-icons plus" onClick={addquestion}>add_circle_outline</button>
            </div>
            {/* <form className="questiones">
                {questions.map(question => {
                    return (
                        <QuestionDemo
                            text={question.text}
                            answerType={question.answerType}
                           
                            questionChange={(e) => questionChange(question.dd, e)}
                            selectChange={(e) => selectChange(question.dd, e)}
                            handleDelete={handleDelete}
                            dd={question.dd}
                            key={question.dd} />
                    );
                })}
                <MultipleChoice />
                <button className="save-btn" type="submit">Save</button>
            </form> */}
        </div>
    );
}


export default QuestionList;