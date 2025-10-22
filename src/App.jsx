//src/App.jsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import HomePage from './pages/HomePage';
import HowToPage from './pages/HowToPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path= "/" element={<HomePage />} />
                    <Route path= "/how-to" element={<HowToPage />} />
                    <Route path= "/quiz" element={<QuizPage />} />
                    <Route path= "/results" element={<ResultPage />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App ;