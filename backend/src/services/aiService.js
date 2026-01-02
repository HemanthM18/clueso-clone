const generateInsights = (feedbacks) => {
  if (!feedbacks.length) {
    return {
      summary: 'No feedback available yet.',
      themes: [],
    };
  }

  const text = feedbacks.map((f) => f.content.toLowerCase()).join(' ');

  const themes = [];
  if (text.includes('ui')) themes.push('User Interface');
  if (text.includes('slow') || text.includes('fast')) themes.push('Performance');
  if (text.includes('feature')) themes.push('Feature Requests');
  if (text.includes('bug') || text.includes('error')) themes.push('Bugs');

  return {
    summary:
      'Users are generally satisfied but have raised concerns about performance and feature improvements.',
    themes: themes.length ? themes : ['General Feedback'],
  };
};

module.exports = generateInsights;
