import Main from './Components/Main';
import Goals from './Components/Goals'
import Controls from './Components/Controls';
import LanguageLevel from './Components/LanguageLevel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginFlow from './Components/LoginFlow';
import Interests from './Components/Interests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFlow/>} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/language-level" element={<LanguageLevel />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
