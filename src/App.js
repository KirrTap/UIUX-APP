import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HlavnaStranka from './HlavnaStranka';
import Vyhladavanie from './Vyhladavanie';
import Detail from './Detail';
import Platba from './Platba';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HlavnaStranka />} />
        <Route path="/vyhladavanie" element={<Vyhladavanie />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/platba" element={<Platba />} />
      </Routes>
    </Router>
  );
};
export default App;