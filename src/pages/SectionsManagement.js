import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SectionsManagement = () => {
  const [sections, setSections] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await axios.get('/api/sections', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setSections(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchSections();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put('/api/sections', { title, content }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setSections(res.data);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const onDelete = async (sectionTitle) => {
    try {
      const res = await axios.delete(`/api/sections/${sectionTitle}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      setSections(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Manage Resume Sections</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add/Update Section</button>
      </form>
      <ul>
        {sections.map((section) => (
          <li key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            <button onClick={() => onDelete(section.title)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsManagement;
