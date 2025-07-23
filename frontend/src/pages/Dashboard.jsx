import { useEffect, useState } from 'react'
import axiosInstance from '../utils/axios'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../assets/letter-j.png'
import JobCard from '../components/JobCard'

const Dashboard = () => {
  const navigate = useNavigate()
  const [jobs, setJobs] = useState([])

  const addJob = async (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const data = new FormData(form);
  const dataObj = Object.fromEntries(data);
  form.reset();

  console.log("Sending job:", dataObj);

  try {
    const res = await axiosInstance.post('/jobs', dataObj);
    console.log("Response from POST /jobs:", res.data);

    const job = res.data.job;
    if (!job) {
      alert("Job not returned from backend.");
      return;
    }

    setJobs([...jobs, job]);
    console.log("obs after adding:", [...jobs, job]);
  } catch (err) {
    console.error("Error creating job:", err.response?.data || err.message);
    alert("Job not added. Check console.");
  }
};


  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await axiosInstance.get('/jobs')
        console.log("Response from /jobs:", res.data.jobs);
        setJobs(res.data.jobs)
      } catch (err) {
        console.log(err)
      }
    }

    getJobs()
  }, [])

  return (
    <>
      <nav className="navbar bg-dark fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={logo} width="40px" alt="Logo" />
          </a>
           <div className="d-flex gap-3">
              <Link to="/analytics" className="btn btn-secondary">
                Analytics
              </Link>
          <Link to="/" className="btn btn-lg btn-danger" onClick={handleLogout}>
            Log out
          </Link>
        </div>
      </div>
      </nav>
      <div style={{ margin: '7rem' }} className="text-center mb-5">
        <form style={{ maxWidth: '300px', margin: 'auto' }} onSubmit={addJob}>
          <input
            className="form-control"
            type="text"
            name="company"
            placeholder="Company"
            required
          />
          <input
            className="form-control"
            type="text"
            name="position"
            placeholder="Position"
            required
          />
          <div className="mt-4">
            <button type="submit" className="btn btn-primary btn-lg w-100">
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="container d-flex gap-5 flex-wrap justify-content-center">
        {Array.isArray(jobs) && jobs.map((job) => (
    <div key={job._id}>
      <p>Job found: {job.company}</p>
      <JobCard job={job} />
    </div>
  ))}
      </div>
    </>
  )
}
export default Dashboard