import { Link } from 'react-router-dom'
import board from '../assets/Whiteboard.png'

const LandingPage = () => {
  return (
    <div className="container d-flex min-vh-100 align-items-center justify-content-center">
      <div className="row">
        <div className="col-12 col-md-6 me-md-5">
          <img className="w-100" src={board} />
        </div>
        <div className="col-md-5">
          <h1 className="display-1 text-center mt-4">JOB TRACKER</h1>
          <p className="mt-4">
            Take charge of your career with <strong>Job Tracker</strong> — your all-in-one solution for managing job applications, freelance tasks, or team assignments. Effortlessly organize, monitor, and update every opportunity from a sleek, centralized dashboard built for focus and productivity.
          </p>
          <p>
            Built for go-getters and professionals alike, <strong>Job Tracker</strong> keeps your workflow organized and your goals within reach. Track progress, update statuses, and stay ahead with a clear view of every job you manage. Start using Job Tracker today and simplify the way you work.
          </p>
          <Link to="/signup" className="btn btn-lg btn-primary d-block">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage