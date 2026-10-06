import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function Jobs() {
  const navigate = useNavigate();
  const { addApplication } = useApplications();

  const [search, setSearch] = useState("");

  const jobs = [
    {
      title: "Software Developer",
      company: "TCS",
      location: "Chennai",
      skills: "Java, React, SQL"
    },
    {
      title: "Frontend Developer",
      company: "Infosys",
      location: "Bangalore",
      skills: "HTML, CSS, React"
    },
    {
      title: "Web Developer",
      company: "Wipro",
      location: "Hyderabad",
      skills: "JavaScript, React, Node.js"
    }
  ];

  const filteredJobs = jobs.filter((job) =>
    `${job.title} ${job.company} ${job.location} ${job.skills}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleApply = (job) => {
    addApplication(job);

    alert(
      `Application submitted successfully for ${job.title} at ${job.company}!`
    );

    navigate("/applications");
  };

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        <div className="page-heading">
          <div>
            <h1>Job Openings</h1>
            <p>
              Find the right placement opportunity for you.
            </p>
          </div>
        </div>

        <div className="search-container">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search jobs, companies, locations or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="job-grid">

          {filteredJobs.length > 0 ? (

            filteredJobs.map((job, index) => (

              <div className="job-card-new" key={index}>

                <div className="company-logo">
                  {job.company.charAt(0)}
                </div>

                <h2>{job.title}</h2>

                <h3>{job.company}</h3>

                <p className="job-location">
                  📍 {job.location}
                </p>

                <div className="skills">

                  {job.skills.split(", ").map((skill) => (
                    <span key={skill}>
                      {skill}
                    </span>
                  ))}

                </div>

                <button
                  className="primary-button"
                  onClick={() => handleApply(job)}
                >
                  Apply Now
                </button>

              </div>

            ))

          ) : (

            <div className="no-results">

              <h2>No jobs found</h2>

              <p>
                Try searching for another job, company,
                location or skill.
              </p>

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default Jobs;