import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function Applications() {
  const navigate = useNavigate();

  const { applications } = useApplications();

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        <div className="page-heading">
          <div>
            <h1>My Applications</h1>
            <p>
              Track all your job applications.
            </p>
          </div>
        </div>

        <div className="application-grid">

          {applications.map((application, index) => (

            <div
              className="application-card-new"
              key={index}
            >

              <div className="application-top">

                <div className="company-logo">
                  {application.company.charAt(0)}
                </div>

                <span
                  className={`status ${application.className}`}
                >
                  {application.status}
                </span>

              </div>

              <h2>{application.title}</h2>

              <h3>{application.company}</h3>

              <p className="application-date">
                Applied on {application.date}
              </p>

              <button
                className="secondary-button"
                onClick={() => navigate("/interviews")}
              >
                View Details
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Applications;