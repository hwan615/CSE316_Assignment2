import React from "react";

function QuestionDemo(props) {

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                className="question"
                name="text"
                value={props.text} 
                onChange={(e) => props.questionChange(e, props.question)} />
            <br />
            <select className="option" id="option" value={props.question.answerType} onChange={(e) => props.selectChange(e, props.question)}>
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select>
            <button type="button" className="material-icons del" onClick={() => props.handleDelete(props._id)}>delete_outline</button>
        </div>
    );
}

export default QuestionDemo;