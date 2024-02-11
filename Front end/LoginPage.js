import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = () => {
  
    console.log('Logging in with email:', email, 'and password:', password);
    
    history.push('/profile');
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default LoginPage;
