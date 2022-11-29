import React from 'react';
import {Link} from "react-router-dom";
import logo2 from "../Images/logo2.png";

function Footer() {

  return (
    <div className = " bg-gray-800 text-white h-40px px-4  text-center pt-4">
        <div className = "flex justify-between ">
          <div className = "list-none my-4">
          <ul className='text-left'>
            <li><Link to = "Home" >Home</Link></li>
            <li><Link to = "About" >About Us</Link></li>
            <li><Link to = "Trending" >Trending Products</Link></li>
            <li><Link to = "Contact" >Contact Us</Link></li>
            <li><Link to = "Vendor" >Vendor</Link></li>
          </ul>
          </div>
          <div className = "my-4">
            <img src = {logo2} alt = "logo2" />
            <p>
              Reach Globally, Interract Locally
            </p>
          </div>
          <div className='list-none my-4'>
          <ul className='text-right'>
              <li><Link to = "privacy" >Privacy Policy</Link></li>
              <li><Link to = "safety" >Safety Tips</Link></li>
              <li><Link to = "FAQs" >FAQs</Link></li>
              <li><Link to = "join" >Join Forum</Link></li>
              <li><Link to = "terms" >Terms and Conditions</Link></li>
          </ul>
          </div>
          </div>
          <p className='text-xl'>
            Designed By @ <span className = 'text-orange-500'> Hertechtrail</span>
          </p>
          </div>
  )
}

export default Footer;