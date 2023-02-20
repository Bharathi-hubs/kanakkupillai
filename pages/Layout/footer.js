import React from 'react'
import Image from 'next/image'
import logo from '../../public/Assets/logo.png'
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer class="footer">
  <div class="container">
    <div className='row'>
      <div className='d-flex justify-content-between mb-3'>
      <Image
                    src={logo}
                    alt="Picture of the author"
                    width={150}
                    height={50}
                />
      
      <div className='d-flex'>
        <p className='mx-2 small text-white'>About</p>
        <p className='mx-2 small text-white'>Blog</p>
        <p className='mx-2 small text-white'>Privacy Policy</p>
        <p className='mx-2 small text-white'>Term & Conditions</p>
        <p className='mx-2 small text-white'>Refund Policy</p>
        </div>
        </div>
      </div>
    <div class="row">
      <div class="col-sm-3">
        <ul>
          <li class="title">STARTUP</li>
          <div className='hr-footer'></div>
          <li><a href="#">Private Limited Company</a></li>
          <li><a href="#">Limited Liablity Partnership</a></li>
          <li><a href="#">One person Company</a></li>
          <li><a href="#">Partnership Firm Registration</a></li>
          <li><a href="#">Sole Proprietorship Registration</a></li>
          <li><a href="#">Nidhi Company Registration</a></li>
          <li><a href="#">Company Registration in Bangalore</a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <ul>
          <li class="title">TAXATION</li>
          <div className='hr-footer'></div>

          <li><a href="#">GST Registration</a></li>
          <li><a href="#">GST Return Filing</a></li>
          <li><a href="#">TDS Return Filing</a></li>
          <li><a href="#">Professional Tax Registration</a></li>
          <li><a href="#">Income Tax Return Filing</a></li>
          <li><a href="#">Company Registration in Chennai</a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <ul>
          <li class="title">INTELLECTUAL PROPERTY</li>
          <div className='hr-footer'></div>

          <li><a href="#">NGO Registration</a></li>
          <li><a href="#">Trademark Registration</a></li>
          <li><a href="#">Copyright Registration</a></li>
          <li><a href="#">Patent Registration</a></li>
          <li><a href="#">80G and 12A Registration</a></li>
          <li><a href="#">Section 8 Company Registration</a></li>
        </ul>
      </div>
      <div class="col-sm-3">
        <ul>
          <li class="title">COMPLIANCE</li>
          <div className='hr-footer'></div>

          <li><a href="#">Annual Compliance for Pvt Ltd</a></li>
          <li><a href="#">Annual Filing for LLP</a></li>
          <li><a href="#">Event Based Compliances in a Company</a></li>
          <li><a href="#">Change in Object Clause</a></li>
          <li><a href="#">Appointment of Directors</a></li>
          <li><a href="#">Change in Name Clause</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-3">
        <ul>
          <li class="title">Tools</li>
          <div className='hr-footer'></div>

          <li><a href="#">GST Calculator</a></li>

        </ul>
      </div>
      <div class="col-sm-3">
        <ul>
          <li class="title">&nbsp;</li>
          <div className='hr-footer'></div>

          <li><a href="#">HRA Calculator</a></li>
        </ul>
      </div>
      </div>
      <div className='d-flex justify-content-between mt-4'>
        <div className='d-flex '>
      <div className='d-flex mx-2'>
        <div className='foot-icon'><BsFillTelephoneFill /> &nbsp;</div>
        &nbsp; <p>+91 7305 345 345</p>
      </div>
      <div className='d-flex mx-2'>
        <div className='foot-icon'><GrMail /> &nbsp;</div>
        &nbsp; <p>support@kanakkupillai.com</p>
      </div>
</div>
      <div>
      <select name="select" id="select-option" class="form-control" style={{width:'200px', border: 'none',backgroundColor:'#002940',color: '#fff', borderBottom: "3px solid #83c141"}}>
          <option value="">Select a Option</option>
          <option value="Option_one">Option one</option>
          <option value="Option_two">Option two</option>
        </select>
        </div>
        <div className='d-flex'>
        <div className='foot-icon'><FaFacebookF /></div>
        <div className='foot-icon'><AiOutlineTwitter /></div>
        <div className='foot-icon'><FaLinkedinIn /></div>
        <div className='foot-icon'><TfiYoutube /></div>
        <div className='foot-icon'><BsInstagram /></div>
          </div>
      </div>
      <hr />
      <p className='foot-bot'>By Clicking this page, you agree to our   Terms & Conditions   and Privacy Policy   |   © Copyright 2023 All Rights Reserved © Govche India Private Limited</p>
  </div>
</footer>
  )
}

export default Footer