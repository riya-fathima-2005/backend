import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/Style/Venuedata.css";
import wed7 from "../../assets/Images/ban4.png";

function Venuedata({ showBanner = true }) {

  // STATE

  const [venues, setVenues] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH API

  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/venues/")
      .then((res) => res.json())
      .then((data) => {
        setVenues(data);
      })
      .catch((error) => console.log(error));

  }, []);

  // FILTER

  const filteredVenues = venues.filter(
    (venue) =>
      venue.location?.toLowerCase().includes(search.toLowerCase()) ||
      venue.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <section className="venues-section">

      {/* BANNER */}

      {showBanner && (
        <div
          className="imagesec"
          style={{ marginTop: "-100px", marginBottom: "70px" }}
        >
          <img src={wed7} alt="decor" className="decore-img" />

          <h2 className="overlay-text text-white">
            Venue
          </h2>
        </div>
      )}

      <div className="container">

        {/* HEADING */}

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          Find Your Wedding Venue
        </h2>

        {/* SEARCH */}

        <input
          type="text"
          placeholder="Search by location or venue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        {/* GRID */}

        <div className="venue-grid">

          {filteredVenues.map((venue) => (

            <div className="venue-card" key={venue.id}>

              {/* IMAGE */}

              <img
                src={`http://127.0.0.1:8000${venue.image}`}
                alt={venue.name}
              />

              {/* CONTENT */}

              <div className="venue-content">

                <h3>{venue.name}</h3>

                <h5>{venue.location}</h5>

                <p className="recent-para">{venue.description}</p>

                {/* BUTTON */}

                <Link to={`/morevenue${venue.id}`}>

                  <button className="faq-button text-decoration-none btn-lg">
                    View Venue
                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Venuedata;