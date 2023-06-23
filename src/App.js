import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Success from './components/Success';
import TryAgain from './components/TryAgain';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/try-again" element={<TryAgain/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
