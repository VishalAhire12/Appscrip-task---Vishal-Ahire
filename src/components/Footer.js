import React from 'react';
import '../styles/Footer.css';  
import { FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcAmex, FaGooglePay, FaApplePay } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-container">
          {/* Subscribe Section */}
          <div className="footer-subscribe">
            <h3>BE THE FIRST TO KNOW</h3><br/>
            <p>Sign up for updates from mettä muse.</p><br/>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your e-mail..." className="subscribe-input" />
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>

          {/* Contact and Currency Section */}
          <div className="footer-contact-currency">
            <div className="contact-info">
              <h3>CONTACT US</h3><br/>
              <p>+44 221 133 5360</p><br/>
              <p>customercare@mettamuse.com</p>
            </div>
            <div className="currency-info">
              <h3>CURRENCY</h3>
              <div className="currency-content">
                <ReactCountryFlag
                  countryCode="US"
                  svg
                 
                  aria-label="United States"
                />
                <p>USD</p>
              </div>
            </div>
          </div>
        </div>

     
        <div className='line'>
          ______________________________________________________________________________________________________________________
        </div>
        <div className='section2'>
          <div className='one'>
            <div className="footer-links">
              <h3>mettā muse</h3>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className='two'>
            <div className="footer-quick-links">
              <h3>QUICK LINKS</h3>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          <div className='three'>
            <div className="footer-social-payments">
              <div>
                <h3>FOLLOW US</h3>
                <div className="social-icons">
                  {/* Instagram Icon */}
                 
                    <FaInstagram size={24} color="#FFFFFF" />
                 

                  {/* LinkedIn Icon */}
               
                    <FaLinkedin size={24} color="#FFFFFF" />
                 
                </div>
                <div className="payment-methods">
                  <h3>mettā muse ACCEPTS</h3>
                  <div className="payment-icons">
                    <FaCcVisa size={24} color="#" />
                    <FaCcMastercard size={24} color="#" />
                    <FaCcAmex size={24} color="#0000FF" />
                    <FaGooglePay size={24} color="#" />
                    <FaApplePay size={24} color="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
