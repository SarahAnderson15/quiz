//pages/QuizPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Questions from '../components/questions.jsx';
import questionsData from '../data/questions.js';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const navigate = useNavigate();

    //Shuffle questions once when component mounts
    useEffect(() => {
        const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
        setQuestions(shuffled);
    }, []);
    
    const handleAnswerSelected = (answer) => {
        setSelectedAnswer(answer);
        setShowFeedback(true);
    };

    const handleNext = () =>{
        //save selected answer
        const updatedAnswers = [...userAnswers, selectedAnswer];
        setUserAnswers(updatedAnswers);
        setSelectedAnswer(null);
        setShowFeedback(false);
    
    
        //Move to next question or finish quiz
        if (currentIndex + 1 < questions.length){
            setCurrentIndex(currentIndex + 1);
        } else {
            // Show results or navigate to results page
            navigate('/results', { state: { userAnswers: updatedAnswers, questions } });
        }
    };

    if (questions.length === 0) return <p>Loading quiz... </p>;
    const currentQuestion = questions[currentIndex];
    

    return (
        <div className='quiz-page'>
            <h2>Question {currentIndex + 1} of {questions.length}</h2>
            <Questions
            questionData={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelected={handleAnswerSelected}
            showFeedback={showFeedback}
            />
            {showFeedback && (
                <button className='next-button' onClick={handleNext}>
                    {currentIndex + 1 < questions.length ? 'Next' : 'Finish'}
                </button>
            )}
        </div>
    );
};
export default QuizPage;