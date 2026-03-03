import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import DoctorList from "./components/DoctorList";
import AppointmentList from "./components/AppointmentList";
import Home from "./components/Home";
import PatientProfile from "./components/PatientProfile";
import AdminDashboard from "./components/AdminDashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  function handleBook(newAppointment) {

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push({
      id: Date.now(),
      ...newAppointment
    });

    localStorage.setItem("appointments", JSON.stringify(appointments));
  }

  function handleCancel(id) {

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    appointments = appointments.filter((a) => a.id !== id);

    localStorage.setItem("appointments", JSON.stringify(appointments));
  }

  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={
          currentUser
            ? <DoctorList onBook={handleBook} />
            : <Navigate to="/login" />
        }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={
          currentUser
            ? <PatientProfile />
            : <Navigate to="/login" />
        }
        />

        <Route path="/myappointments" element={
          currentUser ? <AppointmentList onCancel={handleCancel} />
            : <Navigate to="/login" />
        }
        />

        <Route path="/admin" element={currentUser && currentUser.email === "admin@gmail.com"
          ? <AdminDashboard /> : <Navigate to="/" />
        }
        />

      </Routes>
    </Router>
  );
}

export default App;