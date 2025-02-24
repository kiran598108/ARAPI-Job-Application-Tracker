import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './DeleteJobPage.css'; 
const DeleteJobPage = () => {
  const { id } = useParams(); 
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

 
  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err));
  }, [id]);

 
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      navigate('/'); 
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
