import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/letter-j.png'

const NavBar = () => {
  const token = localStorage.getItem('token')
  const isLoggedIn = !!token
  const location = useLocation()

  const isLandingPage = location.pathname === '/'

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} width="40px" alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-end gap-md-2"
          id="navbarNav"
        >
          {/* Show Signup/Login ONLY on Landing Page AND if not logged in */}
          {!isLoggedIn && isLandingPage && (
            <>
              <Link to="/signup" className="btn btn-lg btn-primary">
                Sign up
              </Link>
              <Link to="/login" className="btn btn-lg btn-outline-light">
                Log in
              </Link>
            </>
          )}

          {/* Show Analytics/Logout ONLY after login */}
          {isLoggedIn && (
            <>
              <Link to="/analytics" className="btn btn-secondary ms-3">
                Analytics
              </Link>
              <Link
                to="/"
                onClick={() => localStorage.removeItem('token')}
                className="btn btn-danger ms-2"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
