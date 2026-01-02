import { useEffect, useState, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  const { logout } = useContext(AuthContext);

  const fetchFeedbacks = async () => {
    const res = await api.get('/feedback');
    setFeedbacks(res.data);
  };

  const fetchInsights = async () => {
    const res = await api.get('/insights');
    setInsights(res.data);
    setLoading(false);
  };

  const submitFeedback = async () => {
    if (!feedback.trim()) return;
    await api.post('/feedback', { content: feedback });
    setFeedback('');
    fetchFeedbacks();
    fetchInsights();
  };

  useEffect(() => {
    fetchFeedbacks();
    fetchInsights();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-300 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clueso Dashboard</h1>
        <button
          onClick={logout}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Submit Feedback */}
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold mb-4">Submit Feedback</h2>
        <textarea
          className="border p-3 w-72 h-20"
          placeholder="Share your thoughts about the product..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <br />
        <button
          onClick={submitFeedback}
          className="mt-3 border px-4 py-1"
        >
          Submit
        </button>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-16 mt-12">
        {/* AI Insights */}
        <div className="w-96 bg-gray-300">
          <div className="bg-gray-200 px-4 py-2 font-semibold">
            AI Insights
          </div>
          <div className="p-4 text-gray-800">
            <ul className="list-disc ml-5 space-y-2">
              <li>{insights.summary}</li>
              {insights.themes.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feedback List */}
        <div className="w-96 bg-gray-300">
          <div className="bg-gray-200 px-4 py-2 font-semibold">
            Your Feedback
          </div>
          <div className="p-4 text-gray-800">
            <ul className="list-disc ml-5 space-y-2">
              {feedbacks.map((f) => (
                <li key={f._id}>{f.content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
