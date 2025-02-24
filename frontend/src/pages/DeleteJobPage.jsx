import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteJobPage.css'; // Import the CSS file

const DeleteJobPage = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  // Fetch the job details
  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err));
  }, [id]);

  // Handle job deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      navigate('/'); // Redirect to the home page after deletion
    } catch (err) {
      console.error('Failed to delete job:', err);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="delete-job-page">
      <h1>Delete Job Application</h1>
      <div className="job-details">
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Position:</strong> {job.position}</p>
        <p><strong>Status:</strong> {job.status}</p>
        <p><strong>Date Applied:</strong> {new Date(job.dateApplied).toLocaleDateString()}</p>
      </div>
      <p>Are you sure you want to delete this job application?</p>
      <button className="delete-button" onClick={handleDelete}>
        Confirm Delete
      </button>
      <button className="cancel-button" onClick={() => navigate('/')}>
        Cancel
      </button>
    </div>
  );
};

export default DeleteJobPage;