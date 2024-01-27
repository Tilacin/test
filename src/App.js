import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import TwentyQuestionsPage from "./components/TwentyQuestionsPage";
import HundredQuestionsPage from "./components/HundredQuestionsPage";
import ResultsPage from "./components/ResultsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/20-questions" element={<TwentyQuestionsPage />} />
        <Route path="/100-questions" element={<HundredQuestionsPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;