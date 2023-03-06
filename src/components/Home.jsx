import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../assets/Pair_programming.png';

const Home = ({ user, setUser }) => {
  const startBtn = user ? '/projects' : '/login'

  return (
    <div className='home-container'>
     <section className="home-text">

      <h1>Software. Faster.</h1>
      <p>
        From planning to production, PMA brings teams together to shorten cycle
        times, reduce costs, strengthen security, and increase developer
        productivity.
      </p>
      <NavLink to={startBtn}>
        <button>Start a project</button>
      </NavLink>
     </section>
     <section className="home-img">
      <img src={img} alt="Programming" />
     </section>
    </div>
  );
};

export default Home;
