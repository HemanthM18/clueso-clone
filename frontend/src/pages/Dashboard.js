import { useEffect, useState } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Dashboard = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const { logout } = useContext(AuthContext);

  const fetchFeedbacks = async () => {
    const res = await api.get('/feedback');
    setFeedbacks(res.data);
  };

  const submitFeedback = async () => {
    if (!feedback) return;
    await api.post('/feedback', { content: feedback });
    setFeedback('');
    fetchFeedbacks();
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter feedback"
      />
      <br />
      <button onClick={submitFeedback}>Submit Feedback</button>

      <h3>Your Feedback</h3>
      <ul>
        {feedbacks.map((f) => (
          <li key={f._id}>{f.content}</li>
        ))}
      </ul>

      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
