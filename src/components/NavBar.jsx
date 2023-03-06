import { NavLink, useHistory } from 'react-router-dom';

const NavBar = ({ user, setUser }) => {
 const history = useHistory()

  return (
    <div className='header'>
      <header>
        <section className='logo'>PMA</section>
        <nav>
          <NavLink to='/'>Home</NavLink>
          {user ? (
            <>
              <NavLink to='/projects'>Projects</NavLink>
              <NavLink to='/add-project'>Add Project</NavLink>
              <button onClick={() => {setUser(false)
              history.push('/')}}>
                <NavLink to='#'>Logout</NavLink>
              </button>
            </>
          ) : (
            <button>
              <NavLink to='/login'>Login / Register</NavLink>
            </button>
          )}
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
