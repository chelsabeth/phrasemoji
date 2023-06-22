import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Success from './components/Success';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/success" element={<Success/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
