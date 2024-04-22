import React from 'react'

const Footer = () => {
  return (
  <footer className="footer">
  <section className="container">
    <div className="d-flex gap-5 footer-container">
      <img src="./images/images.png" className="footer-logo" />
      <div className>
        <ul className="list-unstyled d-flex flex-column gap-3">
          <li><a className="link-heading">COMPANY</a></li>
          <li><a className="footer-link">About</a></li>
          <li><a className="footer-link">Jobs</a></li>
          <li><a className="footer-link">For the Record</a></li>
        </ul>
      </div>
      <div>
        <ul className="list-unstyled d-flex flex-column gap-3">
          <li><a className="link-heading">COMMUNITIES</a></li>
          <li><a className="footer-link">For Artists</a></li>
          <li><a className="footer-link">Developers</a></li>
          <li><a className="footer-link">Advertising</a></li>
          <li><a className="footer-link">Investors</a></li>
          <li><a className="footer-link">Vendors</a></li>
        </ul>
      </div>
      <div>
        <ul className="list-unstyled d-flex flex-column gap-3">
          <li><a className="link-heading">USEFUL LINKS</a></li>
          <li><a className="footer-link">Support</a></li>
          <li><a className="footer-link">Web Player</a></li>
          <li><a className="footer-link">Free Mobile App</a></li>
        </ul>
      </div>
      <div>
        <ul className="list-unstyled d-flex flex-column gap-3">
          <li><a className="link-heading">SPOTIFY PLANS</a></li>
          <li><a className="footer-link">Premium Individual</a></li>
          <li><a className="footer-link">Premium Duo</a></li>
          <li><a className="footer-link">Premium Family</a></li>
          <li><a className="footer-link">Premium Student</a></li>
          <li><a className="footer-link">Spotify Free</a></li>
        </ul>
      </div>
      <div className="d-flex align-items-start gap-3 px-5">
        <a><img className="social-logo" src="./images/facebook-snip.png" alt="instagram-logo" /></a>
        <a>
          <img className="social-logo" src="./images/insta-snip.png" alt="instagram-logo" />
        </a>
        <a>
          <img className="social-logo" src="./images/twitter-snip.png" alt="instagram-logo" />
        </a>
      </div>
    </div>
    <div className="d-flex justify-content-between mt-3">
      <div className="d-flex gap-4">
        <span className="footer-bottom-links">Legal</span>
        <span className="footer-bottom-links">Safety &amp; Privacy Center</span>
        <span className="footer-bottom-links">Privacy Policy</span>
        <span className="footer-bottom-links">Cookies</span>
        <span className="footer-bottom-links">About Ads</span>
        <span className="footer-bottom-links">Accessibility</span>
      </div>
      <div className="d-flex flex-column">
        <span className="footer-bottom-links"> <img /> India (English) </span>
        <span className="footer-bottom-links-copy mt-3">© 2024 Spotify AB</span>
      </div>
    </div>
  </section>
</footer>

  )
}

export default Footer