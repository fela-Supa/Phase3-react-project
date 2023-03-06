import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import img from '../assets/develop_app.png'

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  const handleAddProject = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
    
    setTitle('');
    setDescription('');
    history.push('/projects');
  };

  return (
    <div className='add-project-container'>
      <form onSubmit={handleAddProject} className='project-form'>
      <h1>Add a project</h1>
        <label>Project title</label>
        <input
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Project description</label>
        <textarea
          type='text'
          placeholder='Enter description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type='submit'>Create Project</button>
      </form>
      <section className="add-project-img">
        <img src={img} alt="Develop app" />
      </section>
    </div>
  );
};

export default AddProject;
