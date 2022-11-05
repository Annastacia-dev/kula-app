import React from 'react'
import '../css/footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-section about">
            <div className='links'>
              <h2>About Us</h2>
              <h2>Partners</h2>
              <h2>Careers</h2>
              <h2>Contact Us</h2>
            </div>
            <div className="contact">
                <span>
                  <i className="fa-solid fa-phone"></i> &nbsp; 0768372439
                </span>
                <span>
                  <i className="fa-solid fa-envelope"></i> &nbsp; @kula.co.ke
                </span>
              </div>
              <div className="socials">
                <a href="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="twitter"><i className="fa-brands fa-twitter"></i></a>
                <a href="instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="pinterest"><i className="fa-brands fa-pinterest"></i></a>
              </div>
              </div>
              </div>
              {/* CopyRight and TradeMark */}
              <div className="footer-bottom">
                &copy;{new Date().getFullYear()} kula.co.ke | Designed by Annastacia Kioko
              </div>

              </footer>
    </div>
  )
}

export default Footer