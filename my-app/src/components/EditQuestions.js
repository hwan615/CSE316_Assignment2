import React, { useState } from "react";
import BoxDemo from "./BoxDemo";
import BoxList from "./BoxList";
import Question from "./Question";

function EditQuestions() {

    const [questions, setQuestions] = useState([{
        text: "number of people",
        typeOfQ: "newday"
    },
    
    {
        text: "number of children",
        typeOfQ: "nextday"
    }
    ]);

    const addQ = (e) => {

        const newQ = {
            text:"",
            typeOfQ:"",
        }
        setQuestions([...questions, newQ]);
        console.log(questions)
    }

    const onChange = (e) => {

    }


    // const setText = (e) => {
    //     text : e.target.text;
    // }




    return (
        <div>
             <BoxList />
            <button onClick={addQ}>add</button>
            { questions.map((question) => (
                <div>
                    {/* <input name="" value={question.text} /> */}
                    <Question text={question.text} type={question.typeOfQ} />
                </div>

            ))}
        </div>
    );
}

export default EditQuestions;