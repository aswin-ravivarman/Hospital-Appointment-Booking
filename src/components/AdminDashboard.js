import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import initialDoctors from "../data/DoctorsData.json";

function AdminDashboard() {

  const navigate = useNavigate();
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    speciality: "",
    experience: "",
    qualification: "",
    hospital: "",
    availability: "",
    consultationFee: "",
    rating: "",
    contactEmail: ""
  });

  useEffect(() => {

    if (!currentUser || currentUser.email !== "admin@gmail.com") {
      navigate("/");
      return;
    }

    const storedDoctors = localStorage.getItem("doctors");

    if (storedDoctors) {
      setDoctors(JSON.parse(storedDoctors));
    } else {
      localStorage.setItem("doctors", JSON.stringify(initialDoctors));
      setDoctors(initialDoctors);
    }

  }, [currentUser, navigate]);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleAddDoctor() {

    if (!formData.name || !formData.speciality) {
      alert("Please fill required fields");
      return;
    }

    const newDoctor = {
      id: Date.now(),
      name: formData.name,
      speciality: formData.speciality,
      experience: Number(formData.experience),
      qualification: formData.qualification,
      hospital: formData.hospital,
      availability: formData.availability
        ? formData.availability.split(",").map(a => a.trim())
        : [],
      consultationFee: Number(formData.consultationFee),
      rating: Number(formData.rating),
      contactEmail: formData.contactEmail
    };

    const updatedDoctors = [...doctors, newDoctor];

    localStorage.setItem("doctors", JSON.stringify(updatedDoctors));
    setDoctors(updatedDoctors);

    alert("Doctor Added Successfully");

    setFormData({
      name: "",
      speciality: "",
      experience: "",
      qualification: "",
      hospital: "",
      availability: "",
      consultationFee: "",
      rating: "",
      contactEmail: ""
    });
  }

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-4">Admin Dashboard</h2>

      <div className="card p-4 shadow mb-4">
        <h4>Add Doctor</h4>

        <input className="form-control mb-2"
          name="name"
          placeholder="Doctor Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          name="speciality"
          placeholder="Speciality"
          value={formData.speciality}
          onChange={handleChange}
        />

        <input type="number"
          className="form-control mb-2"
          name="experience"
          placeholder="Experience (years)"
          value={formData.experience}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          name="hospital"
          placeholder="Hospital Name"
          value={formData.hospital}
          onChange={handleChange}
        />

        <input className="form-control mb-2"
          name="availability"
          placeholder="Availability (comma separated)"
          value={formData.availability}
          onChange={handleChange}
        />

        <input type="number"
          className="form-control mb-2"
          name="consultationFee"
          placeholder="Consultation Fee"
          value={formData.consultationFee}
          onChange={handleChange}
        />

        <input type="number"
          step="0.1"
          className="form-control mb-2"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <input type="email"
          className="form-control mb-3"
          name="contactEmail"
          placeholder="Contact Email"
          value={formData.contactEmail}
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
          onClick={handleAddDoctor}
        >
          Add Doctor
        </button>
      </div>

      <div className="card p-4 shadow">
        <h4>All Doctors</h4>

        {doctors.length === 0 ? (
          <p>No doctors available.</p>
        ) : (
          doctors.map((doc) => (
            <div key={doc.id} className="border p-2 mb-2">
              <strong>{doc.name}</strong> - {doc.speciality}
              <br />
              {doc.hospital} | {doc.experience} yrs
              <br />
              Fee: ₹{doc.consultationFee} | Rating: {doc.rating}
            </div>
          ))
        )}
      </div>
      



    </div>

    
  );
}

export default AdminDashboard;