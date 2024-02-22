
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './components/HomePage';
import KontaktPage from './components/KontaktPage';
import NavBar from './components/NavBar'; 


function App() {
  return (
    <div className="main-div" >
    <Router>
    <NavBar/> 
      <Routes>
        <Route path="/" element={<HomePage/ >} />
        <Route path="/kontakt" element={<KontaktPage/ >} /> 
      </Routes>
    </Router >
 </div>
  );
}

export default App;
