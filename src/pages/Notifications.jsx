import { useState } from "react";
import Navbar from "../components/Navbar";

function Notifications() {

  const [notifications, setNotifications] = useState([
    {
      title: "Interview Scheduled",
      message:
        "Your TCS Software Developer interview is scheduled for 15 October 2026.",
      time: "Today",
      type: "interview",
      read: false
    },
    {
      title: "Application Update",
      message:
        "Your Infosys Frontend Developer application has moved to the interview stage.",
      time: "Yesterday",
      type: "application",
      read: false
    },
    {
      title: "Placement Announcement",
      message:
        "Wipro has announced new opportunities for B.Tech students.",
      time: "2 days ago",
      type: "announcement",
      read: true
    }
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAsRead = (index) => {

    setNotifications((previous) =>
      previous.map((notification, i) =>
        i === index
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  return (
    <div className="app-layout">

      <Navbar />

      <main className="main-content">

        <div className="page-heading">

          <div>

            <h1>
              Notifications
            </h1>

            <p>
              Stay updated with placement activities.
            </p>

          </div>

          <div className="notification-count">
            {unreadCount} Unread
          </div>

        </div>

        <div className="notification-list">

          {notifications.map((notification, index) => (

            <div
              className={
                notification.read
                  ? "notification-card"
                  : "notification-card unread"
              }
              key={index}
            >

              <div className="notification-icon">

                {notification.type === "interview"
                  ? "📅"
                  : notification.type === "application"
                  ? "📄"
                  : "📢"}

              </div>

              <div className="notification-content">

                <h2>
                  {notification.title}
                </h2>

                <p>
                  {notification.message}
                </p>

                <small>
                  {notification.time}
                </small>

                {!notification.read && (

                  <button
                    className="notification-button"
                    onClick={() => markAsRead(index)}
                  >
                    Mark as Read
                  </button>

                )}

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Notifications;