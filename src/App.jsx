import Main from './Components/Main';
import Goals from './Components/Goals'
import LanguageLevel from './Components/LanguageLevel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginFlow from './Components/LoginFlow';
import Speaking from './Components/Speaking';
import Lesson from './Components/Lesson';
import Finish from './Components/Finish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFlow/>} />
        <Route path="/main" element={<Main />} />
        <Route path="/level"  element={<LanguageLevel />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;
