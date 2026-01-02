import { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await api.post('/auth/register', { name, email, password });
      navigate('/login');
    } catch {
      setError('Registration failed');
    }
  };

  const googleSignup = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-300 px-8 py-4">
        <h1 className="text-2xl font-bold">Clueso</h1>
      </div>

      {/* Register Card */}
      <div className="flex justify-center mt-16">
        <div className="w-96 bg-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Create Account
          </h2>

          {error && (
            <p className="text-red-600 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full border py-2 mb-3"
            >
              Register
            </button>
          </form>

          {/* Google Signup */}
          <button
            onClick={googleSignup}
            className="w-full border py-2 mb-4"
          >
            Sign up with Google
          </button>

          <p className="text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
