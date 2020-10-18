import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join and Subscribe...</p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">For Updated Events</Link>
            <Link to="/about-us">Our Purpose</Link>
            <Link to="/">Our Staff</Link>
            <Link to="/">Resources</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact-us">Contact</Link>
            <Link to="/business-supporters">Support</Link>
            <Link to="/">Deputy Depot</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to='https://www.facebook.com/DeputiesReliefFund/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div className="footer-logo" to="/">
             {/* <Link to='https://www.facebook.com/DeputiesReliefFund/' target="_blank" className="social-logo">
              Harris County Deputies Relief Fund Inc.
              <i class="fab fa-typo3" />
            </Link>  */}
              {/* <img
                src="/assets/logo.png"
                height="130"
                width="130"
                alt="HCDRF logo"
              /> */}
          </div>
          <small class="website-rights">
            Harris County Deputies Relief Fund &copy; 2020
          </small>
          {/* <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to='https://www.facebook.com/DeputiesReliefFund/'
              //target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Footer;
