const express = require('express');
const router = express.Router();
const { getJobs, addJob, deleteJob,getJobById } = require('../controllers/jobController');

router.get('/', getJobs);
router.post('/', addJob);
router.delete('/:id', deleteJob);
router.get('/:id', getJobById);

module.exports = router;