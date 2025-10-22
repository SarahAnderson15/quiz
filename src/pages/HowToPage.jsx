//src/pages/HowToPage.jsx
import React from 'react';
import {link} from 'react-router-dom';

const HowToPage = () => {
    return(
        <div className="how-to-page">
            <h1>How to Take the Quiz</h1>
            <section>
                <h2>Objective</h2>
                <p>This will tes your knowledge on Women's Rugby Union.</p>
            </section>
            <section>
                <h2>How it Works</h2>
                <ul>
                 <li>You will be presented with mutliple-choice questions.</li>
                 <li>Click the answer you think is correct.</li>
                 <li>You can only choose one answer per question.</li>
                 <li>Click "Next" to move to the next question.</li>
                 <li>At the end, you'll get your score and see the correct answers</li>    
                </ul>
            </section>
            <section>
                <h2>Controls & Navigation</h2>
                <ul>
                    <li><strong>Next</strong> Goes to the next question</li>
                    <li><strong>Submit</strong> Ends the quiz and shows results</li>
                </ul>
            </section>
            <section> 
                <h2>Accessability Notes</h2>
                <p>This quiz can be navigated using a keyboard or screen reader. use Tab/Enter to move through the querstion</p>
            </section>
            <link to="/quiz" className="start-quiz-button">
            Start Quiz
            </link>
        </div>
    );
};
export default HowToPage;