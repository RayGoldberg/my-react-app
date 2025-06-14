import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import FormPage from './FormPage';
import SuccessPage from './SuccessPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/submitted" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
