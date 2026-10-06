import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-icon">
          SP
        </div>

        <div>
          <h2>
            Placement
          </h2>

          <span>
            Dashboard
          </span>
        </div>

      </div>

      <div className="sidebar-menu">

        <p className="menu-title">
          MAIN MENU
        </p>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span>⌂</span>
          Dashboard
        </NavLink>

        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span>▣</span>
          Job Openings
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span>▤</span>
          My Applications
        </NavLink>

        <NavLink
          to="/interviews"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span>◷</span>
          Interviews
        </NavLink>

        <NavLink
          to="/selection"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span>✓</span>
          Selection Status
        </NavLink>

        <p className="menu-title">
          ACCOUNT
        </p>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span>◉</span>
          Profile
        </NavLink>

        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive
              ? "nav-link active"
              : "nav-link"
          }
        >
          <span>🔔</span>
          Notifications
        </NavLink>

        <button
          className="nav-link logout-button"
          onClick={handleLogout}
        >
          <span>↪</span>
          Logout
        </button>

      </div>

      <div className="sidebar-bottom">

        <div className="student-mini">

          <div className="avatar">
            ST
          </div>

          <div>
            <strong>
              Sai Thrisha
            </strong>

            <small>
              Student
            </small>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Navbar;