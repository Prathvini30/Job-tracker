const express = require('express')
const router = express.Router()
const {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs')
const { getStats } = require('../controllers/stats');
const authenticate = require('../middlewares/authenticate');

router.get('/stats', authenticate, getStats);

router.get('/', getAllJobs)
router.get('/:id', getJob)
router.post('/', createJob)
router.patch('/:id', updateJob)
router.delete('/:id', deleteJob)

module.exports = router