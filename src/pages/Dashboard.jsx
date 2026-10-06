import Navbar from "../components/Navbar";
import { useApplications } from "../context/ApplicationContext";

function Dashboard() {

  const { applications } = useApplications();

  const totalApplications = applications.length;

  const underReview = applications.filter(
    (application) =>
      application.status === "Under Review"
  ).length;

  const interviews = applications.filter(
    (application) =>
      application.status === "Interview Scheduled"
  ).length;

  const selected = applications.filter(
    (application) =>
      application.status === "Selected"
  ).length;

  const rejected = applications.filter(
    (application) =>
      application.status === "Not Selected"
  ).length;

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        {/* HEADER */}

        <div className="top-header">

          <div>

            <p className="welcome-text">
              Welcome back,
            </p>

            <h1>
              Student Placement Dashboard
            </h1>

          </div>

          <div className="profile-circle">
            ST
          </div>

        </div>

        <div className="page-intro">

          <p>
            Track your placement journey,
            applications and interviews.
          </p>

        </div>

        {/* STATISTICS */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon blue">
              ▣
            </div>

            <div>

              <p>
                Total Jobs Applied
              </p>

              <h2>
                {totalApplications}
              </h2>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon orange">
              ◷
            </div>

            <div>

              <p>
                Under Review
              </p>

              <h2>
                {underReview}
              </h2>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon purple">
              ▤
            </div>

            <div>

              <p>
                Interviews
              </p>

              <h2>
                {interviews}
              </h2>

            </div>

          </div>

          <div className="stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <div>

              <p>
                Selected
              </p>

              <h2>
                {selected}
              </h2>

            </div>

          </div>

        </section>

        {/* APPLICATION OVERVIEW */}

        <section className="dashboard-grid">

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Application Overview
                </h2>

                <p>
                  Your current application status
                </p>

              </div>

            </div>

            <div className="progress-item">

              <div className="progress-label">

                <span>
                  Under Review
                </span>

                <strong>
                  {underReview}
                </strong>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill orange-fill"
                  style={{
                    width:
                      totalApplications > 0
                        ? `${(underReview / totalApplications) * 100}%`
                        : "0%"
                  }}
                ></div>

              </div>

            </div>

            <div className="progress-item">

              <div className="progress-label">

                <span>
                  Interview Scheduled
                </span>

                <strong>
                  {interviews}
                </strong>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill purple-fill"
                  style={{
                    width:
                      totalApplications > 0
                        ? `${(interviews / totalApplications) * 100}%`
                        : "0%"
                  }}
                ></div>

              </div>

            </div>

            <div className="progress-item">

              <div className="progress-label">

                <span>
                  Selected
                </span>

                <strong>
                  {selected}
                </strong>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill green-fill"
                  style={{
                    width:
                      totalApplications > 0
                        ? `${(selected / totalApplications) * 100}%`
                        : "0%"
                  }}
                ></div>

              </div>

            </div>

          </div>

          {/* DEADLINES */}

          <div className="dashboard-panel">

            <div className="panel-header">

              <div>

                <h2>
                  Upcoming Deadlines
                </h2>

                <p>
                  Important placement dates
                </p>

              </div>

            </div>

            <div className="deadline-item">

              <div className="date-box">

                <strong>
                  10
                </strong>

                <span>
                  OCT
                </span>

              </div>

              <div>

                <strong>
                  TCS
                </strong>

                <p>
                  Software Developer
                </p>

              </div>

            </div>

            <div className="deadline-item">

              <div className="date-box">

                <strong>
                  12
                </strong>

                <span>
                  OCT
                </span>

              </div>

              <div>

                <strong>
                  Infosys
                </strong>

                <p>
                  Frontend Developer
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* PLACEMENT ANALYTICS */}

        <section className="dashboard-panel">

          <div className="panel-header">

            <div>

              <h2>
                Placement Analytics
              </h2>

              <p>
                Overview of your placement progress
              </p>

            </div>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
              marginTop: "20px"
            }}
          >

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#f5f8ff",
                textAlign: "center"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  margin: "0 0 8px"
                }}
              >
                {totalApplications}
              </h3>

              <p>
                Applications
              </p>

            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#fff7ed",
                textAlign: "center"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  margin: "0 0 8px"
                }}
              >
                {underReview}
              </h3>

              <p>
                Under Review
              </p>

            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#f5f0ff",
                textAlign: "center"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  margin: "0 0 8px"
                }}
              >
                {interviews}
              </h3>

              <p>
                Interviews
              </p>

            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#ecfdf3",
                textAlign: "center"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  margin: "0 0 8px"
                }}
              >
                {selected}
              </h3>

              <p>
                Selected
              </p>

            </div>

            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: "#fff1f2",
                textAlign: "center"
              }}
            >

              <h3
                style={{
                  fontSize: "28px",
                  margin: "0 0 8px"
                }}
              >
                {rejected}
              </h3>

              <p>
                Not Selected
              </p>

            </div>

          </div>

          {/* COMPANY-WISE STATISTICS */}

          <div style={{ marginTop: "30px" }}>

            <h3>
              Company-wise Applications
            </h3>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >

              {["TCS", "Infosys", "Wipro"].map(
                (company) => {

                  const count =
                    applications.filter(
                      (application) =>
                        application.company === company
                    ).length;

                  const percentage =
                    totalApplications > 0
                      ? (count / totalApplications) * 100
                      : 0;

                  return (
                    <div key={company}>

                      <div
                        style={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          marginBottom: "7px"
                        }}
                      >

                        <span>
                          {company}
                        </span>

                        <strong>
                          {count}
                        </strong>

                      </div>

                      <div
                        style={{
                          height: "9px",
                          background: "#e5e7eb",
                          borderRadius: "10px",
                          overflow: "hidden"
                        }}
                      >

                        <div
                          style={{
                            width:
                              `${percentage}%`,
                            height: "100%",
                            background:
                              "#2563eb",
                            borderRadius: "10px"
                          }}
                        ></div>

                      </div>

                    </div>
                  );

                }
              )}

            </div>

          </div>

        </section>

        {/* RECENT APPLICATIONS */}

        <section className="dashboard-panel recent-panel">

          <div className="panel-header">

            <div>

              <h2>
                Recent Applications
              </h2>

              <p>
                Latest job applications
              </p>

            </div>

          </div>

          <div className="table-container">

            <table>

              <thead>

                <tr>

                  <th>
                    Position
                  </th>

                  <th>
                    Company
                  </th>

                  <th>
                    Applied Date
                  </th>

                  <th>
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {applications
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map(
                    (application, index) => (

                      <tr key={index}>

                        <td>
                          {application.title}
                        </td>

                        <td>
                          {application.company}
                        </td>

                        <td>
                          {application.date}
                        </td>

                        <td>

                          <span
                            className={`status ${application.className}`}
                          >
                            {application.status}
                          </span>

                        </td>

                      </tr>

                    )
                  )}

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;