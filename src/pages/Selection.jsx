import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function Selection() {

  const { applications } = useApplications();

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        <div className="page-heading">

          <div>

            <h1>
              Selection Status
            </h1>

            <p>
              View the latest status of your applications.
            </p>

          </div>

        </div>

        <div className="selection-grid">

          {applications.map((application, index) => (

            <div
              className="selection-card"
              key={index}
            >

              <div className="selection-icon">

                {application.status === "Selected"
                  ? "✓"
                  : application.status === "Not Selected"
                  ? "×"
                  : "●"}

              </div>

              <h2>
                {application.title}
              </h2>

              <h3>
                {application.company}
              </h3>

              <span
                className={`status ${application.className}`}
              >
                {application.status}
              </span>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Selection;