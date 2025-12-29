const express = require('express');
const protect = require('../middleware/authMiddleware');
const {
  createFeedback,
  getFeedbacks,
} = require('../controllers/feedbackController');

const router = express.Router();

router.post('/', protect, createFeedback);
router.get('/', protect, getFeedbacks);

module.exports = router;
