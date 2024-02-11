import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleSignUp = () => {
    
    console.log('Signing up with name:', name, 'email:', email, 'and password:', password);
    
    history.push('/');
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      <button onClick={handleSignUp}>Sign Up</button>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

export default SignUpPage;
