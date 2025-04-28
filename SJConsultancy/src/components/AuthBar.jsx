import React from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const AuthBar = () => {
  return (
    <div className="top-bar">
      <Link to="/auth" className="text-navyBlue font-semibold hover:underline flex items-center justify-end gap-2">
        <LogIn />
        Signup/Login
      </Link>
    </div>
  );
};

export default AuthBar;