// src/App.jsx
import Header from './Header';
import UserProfile from './UserProfile';
import MainContent from './MainContent';
import Footer from './Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Jane Doe" age={28} bio="Loves exploring cities and sharing travel stories." />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
