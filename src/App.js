import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

const App = () => {
  const user = {
    name: 'Neel patel',
    age: 21,
    location: 'Surat,Gujarat',
    bio: 'A passionate software developer who loves coding and problem-solving.'
  };

  return (
    <div className="App">
      <h1>User Profile</h1>
      <UserProfile
        name={user.name}
        age={user.age}
        location={user.location}
        bio={user.bio}
      />
    </div>
  );
}

export default App;
