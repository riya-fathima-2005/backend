import React from "react";
import "../../assets/Style/Howhost.css";

const Howhost = () => {
  const steps = [
    {
      number: "01",
      title: "Register your wedding",
      description:
        "Start your wedding journey by creating your listing. Add all the essential details and exciting highlights to attract your future guests.",
    },
    {
      number: "02",
      title: "Guests discover & reserve",
      description:
        "Guests can explore your celebration, reserve their spot, and connect with you before the event begins.",
    },
    {
      number: "03",
      title: "Celebrate together",
      description:
        "Welcome your guests and share unforgettable traditions, emotions, and beautiful wedding memories together.",
    },
    {
      number: "04",
      title: "Receive wedding gifts",
      description:
        "Guests can contribute meaningful gifts and experiences to make your special day even more memorable.",
    },
  ];

  return (
    <section className="howhost-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="host-subtitle">Simple & Elegant Process</p>

          <h2 className="howhost-heading">
            How Hosting Works
          </h2>
        </div>

        <div className="host-grid">

          {steps.map((step) => (
            <div className="host-card" key={step.number}>

              <div className="host-number">
                {step.number}
              </div>

              <h3 className="step-title">
                {step.title}
              </h3>

              <p className="step-description">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Howhost;