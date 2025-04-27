import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import UserProfile from './components/User';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;