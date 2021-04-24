import React from "react";

function QuestionDemo(props) {

    const handleChange = (e) => {
        const value = e.target.value;
        console.log(questions);
    }

    return (
        <div className="box">
            <input
                type="text"
                id="question"
                className="question"
                name="text"
                value={props.text} 
                onChange={handleChange} />
            <br />
            <select className="option" id="option" onChange={props.selectChange} name="answerType" value={props.answerType}>
                <option value="number">Number</option>
                <option value="text">Text</option>
                <option value="boolean">Boolean</option>
            </select>
            <button type="button" className="material-icons del" onClick={() => props.handleDelete(props._id)}>delete_outline</button>
        </div>
    );
}

export default QuestionDemo;