import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./compornent/Main";
import Main2 from "./compornent/Main2";

function App() {
  return (
    <>
    
<div className="overflow-x-hidden" >
      <Router>
        <Routes>
          <Route path="/" element={ <Main />} />
          <Route path="/2" element={ <Main2 />} />

        </Routes>
      </Router>
</div>      
    </>
  );
}

export default App;

