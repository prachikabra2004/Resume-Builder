import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ isLogin, onAuthSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const { name, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const res = await axios.post(url, formData);
      localStorage.setItem('token', res.data.token);
      onAuthSuccess();
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {!isLogin && (
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
      )}
      <div>
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={onChange} required />
      </div>
      <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
    </form>
  );
};

export default AuthForm;
