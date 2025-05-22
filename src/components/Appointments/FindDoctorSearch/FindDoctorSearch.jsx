import React, { useState, useRef } from "react";
import "./FindDoctorSearch.css";
import { useNavigate } from "react-router-dom";

const initSpeciality = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homeopath",
  "Ayurveda",
];

const FindDoctorSearch = () => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [specialities] = useState(initSpeciality);
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/appointment?speciality=${speciality}`);
  };

  const handleFocus = () => setDoctorResultHidden(false);
  const handleBlur = () => setTimeout(() => setDoctorResultHidden(true), 100);
  const handleIconClick = () => {
    setDoctorResultHidden(false);
    inputRef.current && inputRef.current.focus();
  };

  const filteredSpecialities = specialities.filter((spec) =>
    spec.toLowerCase().includes(searchDoctor.toLowerCase())
  );

  return (
    <div className="finddoctor">
      <center>
        <h1>Find a doctor and Book an Appointment</h1>
        <div>
          <i
            style={{ color: "#000000", fontSize: "20rem" }}
            className="fa fa-user-md"
          ></i>
        </div>
        <div className="home-search-container">
          <div className="doctor-search-box">
            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctors, clinics, hospitals, etc."
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={searchDoctor}
              onChange={(e) => setSearchDoctor(e.target.value)}
              ref={inputRef}
            />
            <div
              className="findiconimg"
              onClick={handleIconClick}
              style={{ cursor: "pointer" }}
            >
              <img className="findIcon" src={"/images/search.svg"} alt="" />
            </div>
            <div
              className="search-doctor-input-results"
              hidden={doctorResultHidden}
            >
              {filteredSpecialities.map((speciality) => (
                <div
                  className="search-doctor-result-item"
                  key={speciality}
                  onMouseDown={() => handleDoctorSelect(speciality)}
                >
                  <span>
                    <img
                      src={"/images/search.svg"}
                      alt=""
                      style={{ height: "10px", width: "10px" }}
                    />
                  </span>
                  <span>{speciality}</span>
                  <span>SPECIALITY</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearch;
