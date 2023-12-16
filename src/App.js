import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HlavnaStranka from './HlavnaStranka';
import Vyhladavanie from './Vyhladavanie';
import Detail from './Detail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HlavnaStranka />} />
        <Route path="/vyhladavanie" element={<Vyhladavanie />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
};
export default App;