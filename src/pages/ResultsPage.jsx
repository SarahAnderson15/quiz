import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ResultsPage = () => {
    const location= useLocation();
    const {score, totalQuestions, userAnswers, questions} = location.state || {};
    
    returm(
        <div className="results-page"> 
         <h1>Quiz Complete!</h1>
         <p>Your Score: {score} / {totalQuestions}</p>

         <h2>Breakdown:</h2>
         <ul>
            {questions?.map((q, index) => {
                const userAnswer = userAnswer?.[index];
                const isCorrect = userAnswer === q.correctAnswer;

                return(
                    <li key={q.id} className={isCorrect ? "correct" : "incorrect"}>
                        <strong>Q{index +1}:</strong> {q.question} <br/>
                        <em>Your Answer:</em> {userAnswer || "No answer"} <br/> 
                    </li>
                );
            })}
         </ul>
         <div className="button-group">
             <link to="/quiz" className="btn">Try Again</link>
             <link to="/home-page" className="btn">Go Home</link>
         </div>
        </div>
    );
};
export default ResultsPage;
