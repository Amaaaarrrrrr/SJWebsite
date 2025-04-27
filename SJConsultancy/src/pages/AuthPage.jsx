import React from 'react';
import AuthForm from '../components/AuthForm'; 

const AuthPage = () => {
  return (
    <div>
      <header className="bg-deepGreen text-white py-12">
        <h1 className="text-4xl font-bold text-center">Welcome to S.J Consultancy</h1>
        <p className="text-center mt-2">Login or Register to get started</p>
      </header>

      {/* AuthForm Component */}
      <AuthForm />
    </div>
  );
};

export default AuthPage;
