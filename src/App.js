import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home'
import Play from  './pages/Play'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/plays" element={<Play />}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App