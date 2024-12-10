import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";

function Home() {
  return (
    <div className="App">

      <header className="navbar">
        <div className="navbar-links"></div>
        <div className="navbar-title">E-Municipality</div>
        <div className="navbar-links">

          <Link to="/login" className="navbar-link">
            Connect
          </Link>

        </div>
      </header>

      <section id="who-we-are">
        <h2>Who We Are</h2>
        <p>
          E-Municipality is a blockchain-powered platform designed to bring transparency, efficiency, and accountability to urban governance. We specialize in grievance redressal, tax collection, and fund management systems, ensuring seamless interaction between citizens and municipalities.
        </p>
        <p>
          Our platform empowers citizens to file grievances, track municipal taxes, and monitor urban development projects. For municipalities, we provide tools for efficient fund allocation and project management, fostering trust and collaboration with the community.
        </p>
      </section>

      <section id="services">
        <h2>Services We Provide</h2>
        <div className="services-container">
          <div className="service-item">
            <div className="service-circle">
              <span>File Grievance</span>
            </div>
            <p>Easily file and track the status of your grievances.</p>
          </div>
          <div className="service-item">
            <div className="service-circle">
              <span>Government Funds</span>
            </div>
            <p>View Govt funds sent and received by AmdinGovt and AdminHead.</p>
          </div>
          <div className="service-item">
            <div className="service-circle">
              <span>Fund Management</span>
            </div>
            <p>Track government funds allocated for urban projects.</p>
          </div>
          <div className="service-item">
            <div className="service-circle">
              <span>Ongoing Projects</span>
            </div>
            <p>Monitor progress on ongoing municipal projects.</p>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
