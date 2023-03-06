import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PROJECTS } from '../assets/data';
let reversedProjects =[]
const Projects = ({ projects, setProjects }) => {
  useEffect(() => {
    fetch(`http://localhost:9292/projects`)
    .then(r => r.json())
    .then(d => setProjects(d))
     reversedProjects = projects.reverse
  }, []);
console.log(reversedProjects)
  const handleDelete = (id,e) => {
    e.preventDefault()
    console.log(id)
    fetch(`http://localhost:9292/projects/${id}`,{
      method: "DELETE",
      headers: {"accept": "application-json"}
    })
    const filteredProjects = projects.filter((project) => project.id != id)
    return setProjects(filteredProjects);
  }

  return (
    <div className='projects-container'>
      <h1>Your projects</h1>
      <div className='all-projects-container'>
        {projects.map((project) => {
          return (
            <div
              className='project'
              key={project.id}
              // to={`/project/${project.id}`}
            >
              <section>
                <h2>{project.title}</h2>
                <details>
                  <summary>Description</summary>
                  <p>{project.description}</p>
                </details>
              </section>
              <div className='project-icons'>
                <i class='fa-solid fa-pen-to-square'></i>
                <i
                  class='fa-solid fa-trash'
                  onClick={(e) => handleDelete(project.id,e)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
