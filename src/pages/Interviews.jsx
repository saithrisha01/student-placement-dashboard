import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function Interviews() {

  const { applications } = useApplications();

  const interviews = applications.filter(
    (application) =>
      application.status === "Interview Scheduled"
  );

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        <div className="page-heading">

          <div>

            <h1>
              Interview Schedule
            </h1>

            <p>
              Keep track of your upcoming interviews.
            </p>

          </div>

        </div>

        <div className="interview-grid">

          {interviews.length > 0 ? (

            interviews.map((interview, index) => (

              <div
                className="interview-card"
                key={index}
              >

                <div className="interview-date">

                  <span>
                    OCT
                  </span>

                  <strong>
                    {index === 0 ? "15" : "18"}
                  </strong>

                </div>

                <div className="interview-info">

                  <h2>
                    {interview.title}
                  </h2>

                  <h3>
                    {interview.company}
                  </h3>

                  <p>
                    📅 {index === 0
                      ? "15 October 2026"
                      : "18 October 2026"}
                  </p>

                  <p>
                    ⏰ {index === 0
                      ? "10:00 AM"
                      : "2:00 PM"}
                  </p>

                  <p>
                    💻 Online
                  </p>

                  <span className="status scheduled">
                    Scheduled
                  </span>

                </div>

              </div>

            ))

          ) : (

            <div className="no-results">

              <h2>
                No Interviews Scheduled
              </h2>

              <p>
                Your upcoming interviews will appear here.
              </p>

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default Interviews;