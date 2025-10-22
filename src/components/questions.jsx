//components/questions.js
import React from 'react';

const Questions = ({ questiondata, onAnswerSeclected}) =>{
    const { question, options } = questiondata;

    return(
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => onAnswerSeclected(option)}>{option}</button> 
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Questions;   