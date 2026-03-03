import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AppointmentBooking() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const storedUser = sessionStorage.getItem("currentUser");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  const handleBooking = () => {

    if (!doctor || !date || !time) {
      alert("Fill all fields");
      return;
    }

    let appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    const conflict = appointments.find(
      (a) =>
        a.doctor === doctor &&
        a.date === date &&
        a.time === time
    );

    if (conflict) {
      alert("This slot is already booked for this doctor");
      return;
    }

    const alreadyBooked = appointments.find(
      (a) =>
        a.userEmail === user.email &&
        a.doctor === doctor
    );

    if (alreadyBooked) {
      alert("You already booked this doctor");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      userEmail: user.email,
      doctor,
      date,
      time,
    };

    appointments.push(newAppointment);

    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );

    alert("Appointment Booked Successfully");
    navigate("/myappointments");
  };

  return (
    <div className="container mt-4">
      <h2>Book Appointment</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Doctor Name"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
      />

      <input
        type="date"
        className="form-control mb-3"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        className="form-control mb-3"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleBooking}>
        Book Appointment
      </button>
    </div>
  );
}

export default AppointmentBooking;