import React from 'react'
import { Link } from 'react-router-dom'


    function Footer() {
      return (
        <div className='p-2 text-white' style={{ backgroundColor: '#232F3E' }}>
          <div className="d-flex p-2 " >
            <div className=" p-2 mx-auto">
              <h4>About</h4>
              <div>
                <div><Link to="/contact-us">Contact us</Link></div>
                <div><Link to="/about-us">About us</Link></div>
                <div><Link to="/careers">Careers</Link></div>
                <div><Link to="/specials">Specials</Link></div>
              </div>
            </div>
    
            <div className=" p-2 mx-auto">
              <h4>Help</h4>
              <div>
                <div><Link to="/payment">Payment</Link></div>
                <div><Link to="/faq">FAQ</Link></div>
                <div><Link to="/returns">Returns</Link></div>
                <div><Link to="/shipping">Shipping</Link></div>
              </div>
            </div>
    
            <div className=" p-2 mx-auto">
              <h4>Information</h4>
              <div>
                <div><Link to="/privacy">Privacy Policy</Link></div>
                <div><Link to="/terms">Terms & Conditions</Link></div>
              </div>
            </div>
    
            <div className=" p-2 mx-auto">
              <h4>Social</h4>
              <div>
                <div><Link to="/facebook">Facebook</Link></div>
                <div><Link to="/youtube">Youtube</Link></div>
                <div><Link to="/twitter">Twitter</Link></div>
              </div>
            </div>
          </div>
          <hr />
          <div className='text-center'>
            <p>&copy; 2024 Your E-commerce Store. All rights reserved.</p>
          </div>
    
        </div>
      )
    }
    

export default Footer