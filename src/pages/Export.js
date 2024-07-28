import React from 'react';
import axios from 'axios';

const Export = () => {
  const handleExport = async (type) => {
    try {
      const res = await axios.get(`/api/export/${type}`, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
        responseType: 'blob',
      });

      const blob = new Blob([res.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Export Resume</h2>
      <button onClick={() => handleExport('pdf')}>Export as PDF</button>
    </div>
  );
};

export default Export;
