import React from "react";
import aboutImg from "../assets/fence.jpg";
import bannerImg from "../assets/colorpaints.gif";
import aboutImg2 from "../assets/stairs.jpg";
import aboutImg3 from "../assets/patio.jpg";
import Canva from "../assets/canva.gif";
import HomeImg from "../assets/pinkpaint.jpg";
import Counter from "../Counter/Counter";
import TrustQuoteSection from "../TrustQuoteSection/TrustQuoteSection.jsx";
import Logo from "../assets/carrillo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faPhone,
  faEnvelope,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";
function HomePage() {
  return (
    <div className="main-container">
      <nav>
        <p className="company-name">CARRILLO PAINTING</p>

        <a href="tel:404-680-7241" className="company-phone">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: ".25rem" }} />
          404-680-7241
        </a>
      </nav>
      <div className="marquee-container">
        <div className="marquee-track">
          <p>
            Home Painting & Remodeling in Atlanta, GA — Home Painting &
            Remodeling in Atlanta, GA — Home Painting & Remodeling in Atlanta,
            GA —{" "}
          </p>
          <p>
            Home Painting & Remodeling in Atlanta, GA — Home Painting &
            Remodeling in Atlanta, GA — Home Painting & Remodeling in Atlanta,
            GA —{" "}
          </p>
        </div>
      </div>
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <img src={Logo} />
          <button className="hero-button">
            <a href="tel:404-680-7241">Get a Free Quote</a>{" "}
          </button>
        </div>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "40px 0",
        }}
      >
        <Counter end={12} subtitle="Years of Experience" />
        <Counter end={280} subtitle="Completed Projects" />
        <Counter end={190} subtitle="Satisfied Customers" />
      </div>
      <TrustQuoteSection />
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-image">
            <img src={aboutImg} alt="House Fence" />
            <p>FENCE</p>
          </div>
          <div className="gallery-image">
            <img src={HomeImg} alt="Interior house painting" />
            <p>PAINTING</p>
          </div>
          <div className="gallery-image">
            <img src={aboutImg3} alt="House porched renovatade" />
            <p>PORCH</p>
          </div>
        </div>
      </section>

      <div className="banner-image">
        <img src={bannerImg} />
      </div>

      <section className="about-section">
        <div className="about-container">
          <div className="about-text slide-in-left">
            <h2>CARRILLO PAINITNG</h2>
            <p>
              We offer Home painting and remodeling services in Atlanta, GA and
              surrounded areas. Whether it's interior or exterior work — we
              deliver clean results ON TIME that last. Enjoy your home to the
              fullest by adding visual appeal with our renovation and remodeling
              solutions. Our team is dedicated to transforming your space with
              precision, color, and care.
            </p>
            <p>
              See for yourself why we are the most trusted home remodeling
              company in north Atlanta and the greater metro area by turning to
              us for your next project. We are committed to exceeding your
              expectations. Give us a call Today!
            </p>
          </div>
          <div className="about-image slide-in-right">
            <img src={aboutImg2} alt="Our team painting a house" />
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-title">
          <h2>
            Our Services <FontAwesomeIcon icon={faHome} />
          </h2>
          <p>
            We believe in using only the highest quality paints and materials to
            guarantee a durable and long-lasting finish.
          </p>
        </div>
        <div className="services-grid">
          <div className="service">
            <div className="service-img">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#ffb703" }}
              />
            </div>
            <div className="service-name">Interior /Exterior Painting</div>
          </div>

          <div className="service">
            <div className="service-img">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#ffb703" }}
              />
            </div>
            <div className="service-name">Home Remodeling</div>
          </div>

          <div className="service">
            <div className="service-img">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#ffb703" }}
              />
            </div>
            <div className="service-name">Pressure washing</div>
          </div>

          <div className="service">
            <div className="service-img">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#ffb703" }}
              />
            </div>
            <div className="service-name">Cleaning Gutters</div>
          </div>

          <div className="service">
            <div className="service-img">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#ffb703" }}
              />
            </div>
            <div className="service-name">Removing Ceilin Texture</div>
          </div>

          <div className="service">
            <div className="service-img">
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#ffb703" }}
              />
            </div>
            <div className="service-name">Wall Repair</div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <div className="canva">
          <img src={Canva} alt="Our team painting a house" />
        </div>
        <div className="contact-container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Ready to transform your space into something extraordinary?</p>
          </div>
          <div className="contact-info">
            <div className="Phone">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:404-680-7241">404 680-7241</a>{" "}
            </div>
            <div className="Email">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:josecarrillochegue@gmail.com">
                Josecarrillochegue@gmail.com
              </a>
            </div>
            <div className="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
              <a href="https://www.facebook.com/profile.php?id=61569305892397">
                Carrillo painting{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="section-title">
          <h2>Areas We Serve</h2>
          <p>We proudly serve Brookhaven, Atlanta, and surrounding areas.</p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106011.82324945781!2d-84.41077322324303!3d33.86725452553831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5089505f9f565%3A0x851a6587d0c37ec1!2sBrookhaven%2C%20GA!5e0!3m2!1sen!2sus!4v1745158532265!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer>
        {" "}
        <p>Copyright &copy;Carrillo Painting. All Rights Reserved.</p>
        <p>
          WEBSITE BY:
          <a href="https://www.facebook.com/liz.ramirez.96155/">
            {" "}
            Elizabeth TR
          </a>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
