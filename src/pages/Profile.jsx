import { useState } from "react";
import Navbar from "../components/Navbar";

function Profile() {

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Sai Thrisha");
  const [email, setEmail] = useState("student@example.com");
  const [course, setCourse] = useState("B.Tech");

  const handleSave = (e) => {
    e.preventDefault();

    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        <div className="page-heading">

          <div>

            <h1>
              Student Profile
            </h1>

            <p>
              Manage your student information.
            </p>

          </div>

        </div>

        <div className="profile-card">

          <div className="large-avatar">
            ST
          </div>

          {!isEditing ? (

            <>
              <h2>
                {name}
              </h2>

              <p className="profile-role">
                B.Tech Student
              </p>

              <div className="profile-details">

                <div>
                  <span>
                    Full Name
                  </span>

                  <strong>
                    {name}
                  </strong>
                </div>

                <div>
                  <span>
                    Email
                  </span>

                  <strong>
                    {email}
                  </strong>
                </div>

                <div>
                  <span>
                    Course
                  </span>

                  <strong>
                    {course}
                  </strong>
                </div>

                <div>
                  <span>
                    Placement Status
                  </span>

                  <strong>
                    Active
                  </strong>
                </div>

              </div>

              <button
                className="primary-button"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>

            </>

          ) : (

            <form
              onSubmit={handleSave}
              className="profile-form"
            >

              <label>
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                required
              />

              <label>
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

              <label>
                Course
              </label>

              <input
                type="text"
                value={course}
                onChange={(e) =>
                  setCourse(e.target.value)
                }
                required
              />

              <div className="profile-actions">

                <button
                  type="submit"
                  className="primary-button"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>

              </div>

            </form>

          )}

        </div>

      </main>

    </div>
  );
}

export default Profile;