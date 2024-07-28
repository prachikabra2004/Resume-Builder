import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ history }) => {
  const [profile, setProfile] = useState({
    education: '',
    experience: '',
    skills: '',
    bio: '',
  });

  const { education, experience, skills, bio } = profile;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/profile', {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchProfile();
  }, []);

  const onChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/profile', profile, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      history.push('/');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Education</label>
        <input type="text" name="education" value={education} onChange={onChange} />
      </div>
      <div>
        <label>Experience</label>
        <input type="text" name="experience" value={experience} onChange={onChange} />
      </div>
      <div>
        <label>Skills</label>
        <input type="text" name="skills" value={skills} onChange={onChange} />
      </div>
      <div>
        <label>Bio</label>
        <textarea name="bio" value={bio} onChange={onChange} />
      </div>
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default Profile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Preview from '../components/Preview';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    education: '',
    experience: '',
    skills: [],
    sections: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/profile', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setProfile(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchProfile();
  }, []);

  const onChange = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/profile', profile, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="profile">
      <form onSubmit={onSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Education</label>
          <textarea
            name="education"
            value={profile.education}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Experience</label>
          <textarea
            name="experience"
            value={profile.experience}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={profile.skills.join(', ')}
            onChange={(e) => setProfile({ ...profile, skills: e.target.value.split(', ') })}
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
      <Preview profile={profile} />
    </div>
  );
};

export default Profile;
