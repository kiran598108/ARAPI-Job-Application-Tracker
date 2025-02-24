import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);
  
  const deleteJob = async (id) => {
    try {
      await axios.delete(`/api/jobs/${id}`);
      setJobs(jobs.filter(job => job._id !== id));
      toast.success('Job deleted successfully!');
    } catch (err) {
      toast.error('Failed to delete job.');
    }
  };




  return (
    <div>
      <h2>Job Applications</h2>
      <ul>
      {jobs.map((job, index) => (
          <motion.li
            key={job._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="job-item"
          >
            {job.company} - {job.position} - {job.status}
          </motion.li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default JobList;