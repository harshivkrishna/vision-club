import React, { useState } from 'react';
import './FormPage.css';
import { Pencil } from 'lucide-react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    section: '',
    year: '',
    blogTitle: '',
    blogDescription: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      department: '',
      section: '',
      year: '',
      blogTitle: '',
      blogDescription: '',
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-page">
      <h2 className="form-title">Create a Blog Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department" className="form-label">Department</label>
          <input
            id="department"
            name="department"
            type="text"
            value={formData.department}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Department"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="section" className="form-label">Section</label>
          <input
            id="section"
            name="section"
            type="text"
            value={formData.section}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Section"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="year" className="form-label">Year</label>
          <input
            id="year"
            name="year"
            type="text"
            value={formData.year}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Year"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="blogTitle" className="form-label">Blog Title</label>
          <input
            id="blogTitle"
            name="blogTitle"
            type="text"
            value={formData.blogTitle}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Blog Title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="blogDescription" className="form-label">Blog Description</label>
          <textarea
            id="blogDescription"
            name="blogDescription"
            rows={5}
            value={formData.blogDescription}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Blog Description"
            required
          />
        </div>
        <button type="submit" className="form-button">
        <Pencil size={18} className="mr-2" />
          Create Blog Post
        </button>
      </form>
    </div>
  );
};

export default FormPage;
