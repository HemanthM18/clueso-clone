const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const { content } = req.body;

    // Validate input
    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Feedback cannot be empty' });
    }

    const feedback = await Feedback.create({
      user: req.user._id,
      content: content.trim(),
    });

    res.status(201).json(feedback);
  } catch (error) {
    console.error('Create Feedback Error:', error);
    res.status(500).json({ message: 'Failed to create feedback' });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json(feedbacks);
  } catch (error) {
    console.error('Get Feedback Error:', error);
    res.status(500).json({ message: 'Failed to fetch feedback' });
  }
};
