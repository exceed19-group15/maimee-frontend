import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Play from "./pages/Play.jsx";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <title>Maimee</title>
      </Helmet>
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
