import React from 'react';

const ProfileDisplay = ({ profile, template }) => {
  switch (template) {
    case 'modern':
      return (
        <div className="modern-template">
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
        </div>
      );
    case 'professional':
      return (
        <div className="professional-template">
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
        </div>
      );
    default:
      return (
        <div className="default-template">
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
        </div>
      );
  }
};

export default ProfileDisplay;
