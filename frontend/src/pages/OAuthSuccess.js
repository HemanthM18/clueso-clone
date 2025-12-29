import { useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const OAuthSuccess = () => {
  const [params] = useSearchParams();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('token');
    if (token) {
      login(token);
      navigate('/dashboard');
    }
  }, []);

  return <p>Logging in...</p>;
};

export default OAuthSuccess;
