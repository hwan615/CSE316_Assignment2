import React from "react";

function QuestionDemo(props) {

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                className="question"
                name="content"
                value={props.text} 
                onChange={props.questionChange} />
            <br />
            <select className="option" id="option" onChange={props.selectChange} name="option" value={props.answerType}>
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select>
            <button type="button" className="material-icons del" onClick={() => props.handleDelete(props.dd)}>delete_outline</button>
        </div>
    );
}

export default QuestionDemo;