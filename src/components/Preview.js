import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Preview = () => {
  const profile = useSelector(state => state.profile);
  const [template, setTemplate] = useState('default');

  useEffect(() => {
    // Fetch the template selection from the server or user state
    const fetchTemplate = async () => {
      try {
        const res = await axios.get('/api/template', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setTemplate(res.data.template);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchTemplate();
  }, []);

  return (
    <div className={`resume-preview ${template}`}>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <h2>Education</h2>
      <p>{profile.education}</p>
      <h2>Experience</h2>
      <p>{profile.experience}</p>
      <h2>Skills</h2>
      <ul>
        {profile.skills.map((skill, index) => <li key={index}>{skill}</li>)}
      </ul>
      {profile.sections.map((section, index) => (
        <div key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Preview;
