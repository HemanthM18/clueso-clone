const Feedback = require('../models/Feedback');
const generateInsights = require('../services/aiService');

exports.getInsights = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ user: req.user._id });
    const insights = generateInsights(feedbacks);

    res.json(insights);
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate insights' });
  }
};
