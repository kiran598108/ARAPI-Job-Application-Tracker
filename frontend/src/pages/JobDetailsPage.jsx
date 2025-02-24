import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './JobDetailsPage.css';
const JobDetailsPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Job Details</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Position:</strong> {job.position}</p>
      <p><strong>Status:</strong> {job.status}</p>
      <p><strong>Date Applied:</strong> {new Date(job.dateApplied).toLocaleDateString()}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default JobDetailsPage;