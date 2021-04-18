import React from "react";

function Question(props) {

    const onChangeInput = (event) => {

        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value)
        console.dir(event)

    }

    return (
        <div>
            <input name="text" value={props.text} onChange={onChangeInput} />
        </div>
    );
}

export default Question;