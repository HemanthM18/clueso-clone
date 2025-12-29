const Feedback = require('../models/Feedback');

exports.createFeedback = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: 'Feedback required' });
    }

    const feedback = await Feedback.create({
      user: req.user._id,
      content,
    });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create feedback' });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch feedback' });
  }
};
