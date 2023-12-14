import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HlavnaStranka from './HlavnaStranka';
import Vyhladavanie from './Vyhladavanie';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HlavnaStranka />} />
        <Route path="/vyhladavanie" element={<Vyhladavanie />} />
      </Routes>
    </Router>
  );
};

export default App;