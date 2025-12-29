import React from 'react';
import "./Quote.css";

const Quote = (props) => {
    return (
        <div className='quote'>
            <blockquote>{props.text}</blockquote>
            <p>{props.author}</p>
        </div>
    );
}

export default Quote;
