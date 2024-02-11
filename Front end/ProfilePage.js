import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ProfilePage() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [mobile, setMobile] = useState('');
  const history = useHistory();

  const handleUpdateProfile = () => {
  
    console.log('Updating profile with age:', age, 'gender:', gender, 'DOB:', dob, 'and mobile:', mobile);
  }

  const handleLogout = () => {
    history.push('/');
  }

  return (
    <div className="container">
      <h1>Profile</h1>
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
      <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
      <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <p><a href="/" onClick={handleLogout}>Logout</a></p>
    </div>
  );
}

export default ProfilePage;
