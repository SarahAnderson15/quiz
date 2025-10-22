//pages/QuizPage.js
import React, { useState } from 'react';
import Questions from '../components/questions';
import questions from '../data/questions';

const QuizPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    
    const handleAnswerSelected = (answer) => {
        const updatedAnswers = [...userAnswers, answer];
        setUserAnswers(updatedAnswers);

        //Move to next question or finish quiz
        if (currentIndex + 1 < questions.length){
            setCurrentIndex(currentIndex + 1);
        } else {
            // Show results or navigate to results page
            console.log("Quiz Complete!", updatedAnswers);
        }
    };
    return (
        <div>
            <Questions
            questionData={questions[currentIndex]}
            onAnswerSeclected={handleAnswerSelected}
            />
        </div>
    );
};
export default QuizPage;