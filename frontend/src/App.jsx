import React from 'react';
import JobList from './components/JobList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddJobPage from './pages/AddJobPage';
import JobDetailsPage from './pages/JobDetailsPage';
import DeleteJobPage from './pages/DeleteJobPage'; 
import LoginPage from './pages/LoginPage'; 
import SignupPage from './pages/SignupPage';
import Authentication from './components/Authentication';
import './App.css';


function App() {
    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated'); // Remove the flag
      window.location.href = '/login'; // Redirect to login page
    };
  
  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
     

      <Router>
      <Routes>
        <Route path="/" element={<Authentication>{<HomePage />}</Authentication> }/>
        <Route path="/add-job" element={<Authentication> <AddJobPage /> </Authentication>}/>
        <Route path="/job/:id" element={<Authentication><JobDetailsPage /></Authentication>} />
        <Route path="/job/:id/delete" element={<Authentication><DeleteJobPage/></Authentication>} />

        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} /> 
       
        
      </Routes>
      <footer>
        <p>© 2025 Job Application Tracker. Built with Passion by <a href="">Saikiran Tirumalasetty</a></p>
      </footer>
    </Router>
    </div>
  );
}

export default App;