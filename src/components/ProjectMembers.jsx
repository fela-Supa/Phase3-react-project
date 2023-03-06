import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { MEMBERS } from '../assets/data'

const ProjectMembers = () => {
  const { id } = useParams();

useEffect(() => {
  fetch(`http://localhost:9292/project-members`)
  .then(r => r.json())
  .then(d => console.log(d))
},[])

  return (
    <div className='project-members-container'>
      <h1>Project Members</h1>
      <h2>Project Members</h2>
    </div>
  );
};

export default ProjectMembers;
