import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HlavnaStranka from './HlavnaStranka';
import Vyhladavanie from './Vyhladavanie';
import Detail from './Detail';
import Platba from './Platba';
import Dokoncenie from './Dokoncenie';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HlavnaStranka />} />
        <Route path="/vyhladavanie" element={<Vyhladavanie />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/platba" element={<Platba />} />
        <Route path="/dokoncenie" element={<Dokoncenie />} />
      </Routes>
    </Router>
  );
};
export default App;