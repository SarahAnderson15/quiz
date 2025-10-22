// src/pages/homePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page"> 
          <h1>Welcome To Ulitmate Women's Rugby Quiz</h1>
          <p>How much do you know about women's rugby? Lets find out!</p>
          <div className="button-group">
             <Link to="/how-to" className="btn how-to-btn">
             How to Play
             </Link>
             <Link to="/quiz" className="btn start-quiz-btn">
             Start Quiz
             </Link>
          </div>
        </div>
    );
};
export default HomePage;