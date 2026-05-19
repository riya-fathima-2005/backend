import React from "react";
import "../../assets/Style/Reserve.css";

function Reserve() {

  return (

    <section className="reserve-page">

      <div className="container">

        <div className="reserve-wrapper">

          {/* LEFT SIDE */}

          <div className="reserve-left">

            <h1 className="reserve-title">
              Reserve Your Dream Venue
            </h1>

            <p className="reserve-subtitle">
              Begin your unforgettable wedding journey with elegance,
              luxury, and timeless celebration experiences crafted
              specially for you and your loved ones.
            </p>

            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
              alt="Wedding"
              className="reserve-image"
            />

          </div>

          {/* RIGHT SIDE */}

          <div className="reserve-form-box">

            <h2 className="form-title">
              Reservation Form
            </h2>

            <form className="reserve-form">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="tel"
                placeholder="Phone Number"
              />

              <input
                type="date"
              />

              <input
                type="number"
                placeholder="Number of Guests"
              />

              <input
                type="text"
                placeholder="Preferred Venue"
              />

              <textarea
                rows="5"
                placeholder="Special Requirements"
              ></textarea>

              <button type="submit">
                Confirm Reservation
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Reserve;