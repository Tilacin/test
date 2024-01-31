import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import TwentyQuestionsPage from "./components/TwentyQuestionsPage";
import HundredQuestionsPage from "./components/HundredQuestionsPage";
import ResultsPage from "./components/ResultsPage";
import { SoundProvider } from "./soundContext";
import { playSound } from "./soundUtils";

const App = () => {
  return (
    <SoundProvider playSound={playSound}>
      <Router>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="/20-questions" element={<TwentyQuestionsPage />} />
          <Route path="/100-questions" element={<HundredQuestionsPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </Router>
    </SoundProvider>
  );
};

export default App;
