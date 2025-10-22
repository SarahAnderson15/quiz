//components/questions.js
import React from 'react';

const Questions = ({ questionData, onAnswerSelected, selectedAnswer, showFeedback}) =>{
    const { question, options, correctAnswer } = questionData;

    return(
        <div className = "question-container">
            <h2>{question}</h2>
            <ul className='options-list'>
                {options.map((option, index) => {
                    let className = 'option-btn';

                    if (showFeedback){
                        if (option === correctAnswer) className += ' correct';
                        else if (option === selectedAnswer) className += ' incorrect';
                    }

                    return(
                        <li key ={index}>
                            <button
                            className ={className}
                            onClick={() => onAnswerSelected(option)}
                            disabled={showFeedback}
                            >
                                {option}
                            </button>
                        </li>
                    );

                })}
            </ul>
        </div>
    );
};
                 
export default Questions;   