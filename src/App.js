import './App.css';
import Home from './pages/Home.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from './pages/Play.jsx'

function App() {
  return (
    <div>
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/play/:id" element={<Play />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
