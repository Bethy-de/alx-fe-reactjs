// src/App.jsx
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // ✅ Must import UserContext

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // ✅ Wrap your component tree inside UserContext.Provider
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
