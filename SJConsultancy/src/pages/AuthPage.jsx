import React from 'react';
import AuthForm from '../components/AuthForm';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <header className="auth-page-header bg-deepGreen text-white py-12">
        <h1 className="auth-page-title text-4xl font-bold text-center">Welcome to S.J Consultancy</h1>
        <p className="auth-page-subtitle text-center mt-2">Login or Register to get started</p>
      </header>

      {/* AuthForm Component */}
      <AuthForm />
    </div>
  );
};

export default AuthPage;