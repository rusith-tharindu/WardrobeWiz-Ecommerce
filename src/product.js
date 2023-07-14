import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { useAuth0 } from "@auth0/auth0-react";
import Productdetail from './productdetail'
import './product.css'

const Product = ({product, setProduct, detail, view, close, setClose, addtocart}) => {
    
    const {loginWithRedirect, isAuthenticated} = useAuth0();
    const filtterproduct = (product) =>
    {
        const update = Productdetail.filter((x) => 
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () => 
    {
        setProduct(Productdetail)
    }
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
   
    <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>Categories</h3>
                    <ul>
                    <li onClick={() => AllProducts ()}>All Products</li>
                        <li onClick={() => filtterproduct ("Prom-Dress")}>Prom-Dress</li>
                        <li onClick={() => filtterproduct ("Wedding-Dress")}>Wedding-Dress</li>
                        <li onClick={() => filtterproduct ("Frocks")}>Frocks</li>
                        <li onClick={() => filtterproduct ("Tops")}>Tops</li>
                    </ul>
                </div>
            </div>
            <div className='productbox'>
                <div className='content'>
                    {
                        product.map((curElm) =>
                        {
                            return(
                                <>
                                <div className='box' key={curElm.id}>
                                     <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title}></img>
                                            <div className='icon'>
                                                {
                                                    isAuthenticated ?
                                                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                                    :
                                                    <li onClick={() => loginWithRedirect ()}><AiOutlineShoppingCart /></li>
                                                }
                                                
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
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product
