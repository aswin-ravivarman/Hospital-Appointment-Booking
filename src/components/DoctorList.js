import React, { useState, useEffect } from "react";
import Doctors from "./Doctors";
import doct from "../data/DoctorsData.json"; //my json data

function DoctorList(props) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

    const mergedDoctors = [...doct, ...storedDoctors];

    setDoctors(mergedDoctors);
  }, []);

  return (
    <div className="container mt-4">
      {doctors.length === 0 ? (
        <p>No doctors available.</p>
      ) : (
        doctors.map((doc) => (
          <Doctors
            key={doc.id}
            {...doc}
            onBook={props.onBook}
          />
        ))
      )}
    </div>
  );
}

export default DoctorList;