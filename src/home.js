import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent } from 'react-icons/ci';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import HomeProduct from './homeproduct';
import './home.css'

const Home = ({detail, view, close, setClose, addtocart}) => {
  return (
    <>

{
        close ?

        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose /></button>
            {
                detail.map((curElm) =>
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>"Enchanting prom dress with a flowing silhouette and intricate beadwork."</p>
                                <h3>{curElm.Price}</h3>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }

    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Wizard Collection 2023</h2>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src='./img/slider-img.png' alt='slider'></img>
            </div>
        </div>
    </div>
    <div className='product_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/wedding-white.png' alt='wedding-white'></img>
          </div>
          <div className='detail'>
            <p>35 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/robe-sleeve.png' alt='robe-sleeve'></img>
          </div>
          <div className='detail'>
            <p>23 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/evening-gown.png' alt='evening-gown'></img>
          </div>
          <div className='detail'>
            <p>74 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/violet-wedding.png' alt='violet-wedding'></img>
          </div>
          <div className='detail'>
            <p>56 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/gold-prom.png' alt='gold-prom'></img>
          </div>
          <div className='detail'>
            <p>23 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/blue-evening.png' alt='blue-evening'></img>
          </div>
          <div className='detail'>
            <p>23 Products</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='./img/pink-prom.png' alt='pink-prom'></img>
          </div>
          <div className='detail'>
            <p>200 Products</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
            </div>
            <div className='detail'>
              <h3>Free Shipping</h3>
              <p>On Orders Over 5000AED</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
            </div>
            <div className='detail'>
              <h3>Refunds</h3>
              <p>Money Back Guarantee</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
            </div>
            <div className='detail'>
              <h3>Membership Discount</h3>
              <p>On every order over 1000AED</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BiHeadphone />
            </div>
            <div className='detail'>
              <h3>Customer Support</h3>
              <p>Call or Email us 24/7</p>
          </div>
        </div>
      </div>
    </div>
    < div className='product'>
      <h2>Monthly Special Products</h2>
      <div className='container'>
        {
          HomeProduct.map((curElm) => 
          {
              return(
                  <div className='box' key={curElm.id}>
                      <div className='img_box'>
                          <img src={curElm.Img} alt={curElm.Title}></img>
                          <div className='icon'>
                            <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                            <li onClick={() => view (curElm)}><BsEye /></li>
                            <li><AiOutlineHeart /></li>
                          </div>
                      </div>
                      <div className='detail'>
                        <p>
                          {curElm.Cat}
                        </p>
                        <h3>{curElm.Title}</h3>
                        <h4>AED{curElm.Price}</h4>
                      </div>
                  </div>
              )
          })
        }
      </div>
    </div>
    <div className='banner'> 
    <div className='container'>
    <div className='detail'>
          <h4>LATEST FASHION RELEASED</h4>
          <h3>Floral Print Curved Hem Sun Dress</h3>
          <p>AED 100</p>
          <Link to='product' className='link'>Visit  <BsArrowRight/></Link>
        </div>
        <div className='img_box'>
          <img src='./img/latest.png' alt='latest'></img>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home
