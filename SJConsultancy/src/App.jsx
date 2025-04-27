<<<<<<< HEAD
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from './components/Blogs';  // Your Blogs page component
import BlogDetails from './pages/BlogDetails';  // Your Blog details page component
import Home from './components/Home';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
=======
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
>>>>>>> 8b6dd5f6c4bbcdd23ff879c53a7a374479bcb934
