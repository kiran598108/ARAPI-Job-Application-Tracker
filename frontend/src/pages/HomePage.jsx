import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  const countApplied = jobs.filter(job => job.status === 'applied').length;
  const countInterview = jobs.filter(job => job.status === 'interview').length;
  const countOffer = jobs.filter(job => job.status === 'offer').length;
  const countRejected = jobs.filter(job => job.status === 'rejected').length

  const totalJobs = jobs.length;

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Track Your Job Applications</h1>
          <p>Stay organized and never miss an opportunity.</p>
          <Link to="/add-job" className="hero-button">Add a New Job</Link>
        </div>
      </div>
      

      <div className="job-count">
        <h2>Total Job Applications: {totalJobs}</h2>
      </div>

      <div className="dashboard">
        <div className="dashboard-item">
          <h3>Applied</h3>
          <p>{countApplied}</p>
        </div>
        <div className="dashboard-item">
          <h3>Interview</h3>
          <p>{countInterview}</p>
        </div>
        <div className="dashboard-item">
          <h3>Offer</h3>
          <p>{countOffer}</p>
        </div>
        <div className="dashboard-item">
          <h3>Rejected</h3>
          <p>{countRejected}</p>
        </div>
      </div>
      

      <div className="container">
        <h2>Your Job Applications</h2>
        <ul className="job-list">
          {jobs.map(job => (
            <li key={job._id} className="job-item">
              <Link to={`/job/${job._id}`}>
                <span className="job-company">{job.company}</span>
                <span className="job-position">{job.position}</span>
                <span className={`job-status ${job.status}`}>{job.status}</span>
              </Link>
              <Link to={`/job/${job._id}/delete`} className="delete-link">
                    Delete
                  </Link>
            </li>
          ))}
        </ul>
</div>
</div>
  );
};



export default HomePage;
