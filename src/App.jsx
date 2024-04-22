import Main from './Components/Main';
import Controls from './Components/Controls';
import LanguageLevel from './Components/LanguageLevel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/controls" element={<Controls />} />
        <Route path="/language-level" element={<LanguageLevel />} />
      </Routes>
    </Router>
  );
}

export default App;
