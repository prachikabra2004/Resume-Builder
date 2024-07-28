import React, { useState } from 'react';
import axios from 'axios';

const TemplateSelection = ({ history }) => {
  const [template, setTemplate] = useState('default');

  const onTemplateChange = (e) => setTemplate(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/template', { template }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      history.push('/profile');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Choose Template</label>
        <select value={template} onChange={onTemplateChange}>
          <option value="default">Default</option>
          <option value="modern">Modern</option>
          <option value="professional">Professional</option>
        </select>
      </div>
      <button type="submit">Save Template</button>
    </form>
  );
};

export default TemplateSelection;
