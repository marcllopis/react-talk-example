import React from 'react';


const Button = props => (
    <button onClick={props.action} id={props.id} className={props.className}>
        {props.buttonText}
    </button>
)

export default Button;