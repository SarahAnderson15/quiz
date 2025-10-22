//src/App.jsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import HomePage from './pages/HomePage';
import HowToPage from './pages/HowToPage';
import Navigation from './components/navigation';

function App() {
    return (
        <Router>
            <Navigation /> 
            <div className="App">
                <Routes>
                    <Route path= "/" element={<HomePage />} />
                    <Route path= "/how-to" element={<HowToPage />} />
                    <Route path= "/quiz" element={<QuizPage />} />
                    <Route path= "/results" element={<ResultsPage />} />
                </Routes>
            </div>
        </Router>
    );
};
export default App ;