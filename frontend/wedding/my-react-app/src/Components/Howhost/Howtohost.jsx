import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/Style/Howtohost.css";

const Howtohost = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const [partnerFirstname, setPartnerFirstname] = useState("");
  const [partnerLastname, setPartnerLastname] = useState("");
  const [partnerEmail, setPartnerEmail] = useState("");
  const [partnerPhone, setPartnerPhone] = useState("");

  const getPartnerLabel = () => {
    if (role === "Groom") return "Bride";
    if (role === "Bride") return "Groom";
    return "Partner";
  };

  const handleNext = (e) => {
    e.preventDefault();


    if (
      !role ||
      !firstname ||
      !lastname ||
      !email ||
      !phonenumber ||
      !partnerFirstname ||
      !partnerLastname ||
      !partnerEmail ||
      !partnerPhone
    ) {
      alert("⚠️ Please complete all required fields before proceeding.");
      return;
    }


    const formData = {
      role,
      firstname,
      lastname,
      email,
      phonenumber,
      partnerFirstname,
      partnerLastname,
      partnerEmail,
      partnerPhone,
    };

    localStorage.setItem("hostFormData", JSON.stringify(formData));

    alert("✅ Details saved successfully!");
    navigate("/");
  };

  return (
    <div className="container host mt-5">
      <form>
        <h2 className="howhead">Hi, let’s get you ready to become a host</h2>

        <h3>Step 1: About you</h3>

        <div className="mb-3">
          <label className="form-label">You are</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select</option>
            <option value="Groom">Groom</option>
            <option value="Bride">Bride</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <h3>Your contact details</h3>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="tel"
              placeholder="Your phone number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        {role && (
          <>
            <h3>{getPartnerLabel()} details</h3>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder={`${getPartnerLabel()}'s first name`}
                  value={partnerFirstname}
                  onChange={(e) => setPartnerFirstname(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  placeholder={`${getPartnerLabel()}'s last name`}
                  value={partnerLastname}
                  onChange={(e) => setPartnerLastname(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  placeholder={`${getPartnerLabel()}'s email`}
                  value={partnerEmail}
                  onChange={(e) => setPartnerEmail(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="col-md-6 mb-3">
                <input
                  type="tel"
                  placeholder={`${getPartnerLabel()}'s phone number`}
                  value={partnerPhone}
                  onChange={(e) => setPartnerPhone(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </>
        )}

        <p className="mt-3 text-center">
          We promise not to spam you. We will only contact you regarding hosting
          JoinMyWedding guests.
        </p>

        <div className="text-center py-3 mb-5">
          <button onClick={handleNext} className="faq-button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Howtohost;
