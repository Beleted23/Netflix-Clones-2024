import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='header_container'>
          <div className='footer_Icons'> 
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className='footer_data'>
            <ul>
              <li>Audio Discription</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className='footer_data'>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className='footer_data'>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate information</li>
            </ul>
          </div>
          <div className='footer_data'>
            <ul>
              <li>Media Content</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          </div>
          <div className='Service_code'>
            <p>

             Service code
            </p>
          </div>
          <div className='Copy_write' >
            &Copy; 1997-2024 Netflix, Inc
        </div>
      </div>
    </div>
  );
}

export default Footer;