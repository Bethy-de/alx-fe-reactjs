// src/App.jsx
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter';
import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';


function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Jane Doe" age={28} bio="Loves exploring cities and sharing travel stories." />
     <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>



      
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
