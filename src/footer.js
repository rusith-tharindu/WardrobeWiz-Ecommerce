import React from 'react'
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai'; 
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='about'>
            <div className='logo'>
              <img src='./img/logo.png' alt='logo'></img>
            </div>
            <div className='detail'>
              <p>Explore our fashion website for the latest trends, curated styles, and ethical fashion choices. Shop now and express your unique style with us!</p>
              <div className='icon'>
                <li><RiFacebookFill/></li>
                <li><AiOutlineInstagram/></li>
                <li><AiOutlineTwitter/></li>
                <li><BiLogoYoutube/></li>
              </div>
            </div>
          </div>
          <div className='account'>
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Orders</li>
              <li>Shopping Cart</li>
              <li>Shipping</li>
              <li>Refunds</li>
            </ul>
          </div>
          <div className='page'>
            <h3>Pages</h3>
            <ul>
              <li>Home </li>
              <li>Product </li>
              <li>About </li>
              <li>Contact </li>
              <li>Terms & Conditions </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
