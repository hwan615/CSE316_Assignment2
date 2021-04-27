import React, { useEffect, useState } from "react";
import "../App2.css";
import Calendar from "./Calendar";
import { getQuestionsAPIMethod } from "../api/client";


function LogDay() {

    const [questions, setQuestions] = useState([]);
    const [responses, setResponses] = useState([]);
    const [responsenum, setResponsenum] = useState(0);

    useEffect(() => {
        getQuestionsAPIMethod((questions) => {
            setQuestions(questions);
            console.dir(questions);
        });
    }, []);


    const addresponse = (question) => {
        const newresponse = {
            response: question.text,
            question: question._id,
            date: Date.now()
        };
        setResponses([...responses, newresponse]);
        setResponsenum(responsenum + 1);
        console.log(responses);
    };

    // const handleSubmit

    return (
        <div className="main">
            <Calendar />
            <form id="boxes">
                {questions.map(question => {
                    addresponse(question);
                    console.log(responses);
                    console.log(question._id);
                    if (question.answerType == 'boolean') {
                        return (
                            <div className="box" key={question._id}>
                                <h4 className="title">{responses.response}</h4>
                                <br />
                                <div>
                                    <input type="radio" name="f" className="true" />
                                    <label htmlFor="ra">True</label>
                                    <input type="radio" name="f" className="false" />
                                    <label htmlFor="ra">False</label>
                                </div>
                            </div>
                        );
                    }
                    else if (question.answerType == 'multiple choice') {
                        return (
                            <div className="box" key={question._id}>
                                <h4 className="title">{question.text}</h4>
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
                        )
                    }
                    else {
                        return (
                            <div className="box" key={question._id}>
                                <h4 className='title'>{question.text}</h4>
                                <br />
                                <input type={question.answerType} className="under" />
                            </div>
                        );
                    }
                })}
                <button className="save-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LogDay;