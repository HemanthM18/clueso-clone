import { useState, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post('/auth/login', { email, password });
      login(res.data.token);
      navigate('/dashboard');
    } catch {
      setError('Invalid email or password');
    }
  };

  const googleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-300 px-8 py-4">
        <h1 className="text-2xl font-bold">Clueso</h1>
      </div>

      {/* Login Card */}
      <div className="flex justify-center mt-16">
        <div className="w-96 bg-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

          {error && (
            <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit}>
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
              Login
            </button>
          </form>

          <button
            onClick={googleLogin}
            className="w-full border py-2 mb-3"
          >
            Login with Google
          </button>

          <p className="text-center text-sm">
            Don’t have an account?{' '}
            <Link to="/register" className="underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
