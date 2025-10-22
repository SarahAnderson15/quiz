import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ResultsPage = () => {
    const location = useLocation();
    const { userAnswers = [], questions = [] } = location.state || {};

    const score = userAnswers.reduce((acc, answer, idx) => {
        if (answer === questions[idx].correctAnswer) return acc + 1;
        return acc;
    }, 0);

    return (
        <div className="results-page">
            <h1>Quiz Complete!</h1>
            <p>Your Score: {score} / {questions.length}</p>

            <h2>Breakdown:</h2>
            <ul>
                {questions.map((q, index) => {
                    const userAnswer = userAnswers[index];
                    const isCorrect = userAnswer === q.correctAnswer;

                    return (
                        <li key={q.id} className={isCorrect ? "correct" : "incorrect"}>
                            <strong>Q{index + 1}:</strong> {q.question} <br />
                            <em>Your Answer:</em> {userAnswer || "No answer"} <br />
                            <em>Correct Answer:</em> {q.correctAnswer}
                        </li>
                    );
                })}
            </ul>

            <div className="button-group">
                <Link to="/quiz" className="btn">Try Again</Link>
                <Link to="/" className="btn">Go Home</Link>
            </div>
        </div>
    );
};

export default ResultsPage;
