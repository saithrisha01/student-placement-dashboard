import { createContext, useContext, useState } from "react";

const ApplicationContext = createContext();

export function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState([
    {
      title: "Software Developer",
      company: "TCS",
      date: "05 October 2026",
      status: "Under Review",
      className: "under-review"
    },
    {
      title: "Frontend Developer",
      company: "Infosys",
      date: "03 October 2026",
      status: "Interview Scheduled",
      className: "scheduled"
    },
    {
      title: "Web Developer",
      company: "Wipro",
      date: "01 October 2026",
      status: "Not Selected",
      className: "rejected"
    }
  ]);

  const addApplication = (job) => {
    const newApplication = {
      title: job.title,
      company: job.company,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }),
      status: "Under Review",
      className: "under-review"
    };

    setApplications((prev) => [
      ...prev,
      newApplication
    ]);
  };

  return (
    <ApplicationContext.Provider
      value={{ applications, addApplication }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  return useContext(ApplicationContext);
}