import React from 'react';
import './Contents.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCab } from '@fortawesome/free-solid-svg-icons'
import Lastportion from '../Lastportion/Lastportion';

const Contents = () => {
    return (
        <main className='container'>
            <section className='open my-5' >
                <div>
                    <h6>Shipping and Payments</h6>
                </div>
                <div className='d-flex'>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    <div className=' hr'></div>
                    <FontAwesomeIcon icon={faCab}></FontAwesomeIcon>
                </div>
            </section>
            <section className='main-content'>
                <div>
                    <button className='log-btn active'>LOG IN</button>
                    <button className='sign-btn'>SIGN UP</button>
                    <p className='text-start'>Shipping Information</p>
                    <div className=''>
                        <input className='in-show' type="text" placeholder='Email' />
                        <input className='in-show' type="text" placeholder='Address' />
                    </div>
                    <div>
                        <input className='in-show' type="text" placeholder='First Name' />
                        <input className='in-show' type="text" placeholder='City' />
                    </div>
                    <div>
                        <input className='in-show' type="text" placeholder='Last Name' />
                        <input className='in-show' type="text" placeholder='Postal Code/ZIP' />
                    </div>
                    <div>
                        <input className='in-show' type="text" placeholder='Phone Numbeer' />
                        <input className='in-show' type="text" placeholder='Poland' />

                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <p>Payment method</p>
                        <div className='d-flex justify-content-between'>
                            <img className='icon-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCp5FRcgi24vgOYVoY_yqd_2UgwVUows1JckPNm4SC-8khIDOuqTPmZoVZuedUvirEms&usqp=CAU" alt="" />
                            <img className='icon-img' src="https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2014.png" alt="" />
                            <img className='icon-img ' src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="" />
                        </div>
                        <div className='my-2 d-flex justify-content-between'>
                            <img className='icon-img' src="https://www.brandcolorcode.com/media/maestro-logo.png" alt="" />
                            <img className='icon-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeokj3nXE1dOA5mnCmJA8xk59T8LWI5rheZOezf3nisn2rVbplM3dUeU0bslc_vBJjAM&usqp=CAU" alt="" />
                            <img className='icon-img ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0XGY_rB9MUx2Xg11VmKVCoFwT0iK8TW5Y9GIRHOI-eSUi3gakIB8q09nKZMZ0Yg_k5M&usqp=CAU" alt="" />
                        </div>
                        <div className='mt-3'>
                            <p className='text-start'>Delivery method</p>
                            <div className='d-flex justify-content-between'>
                                <div className='delivery-box d-flex justify-content-around'>
                                    <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/InPost_logo.svg/640px-InPost_logo.svg.png" alt="" />
                                    <p>$20.00</p>
                                </div>
                                <div className='delivery-box d-flex justify-content-around'>
                                    <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDapvmC6u6O5GdGjLnslXAlC6i7TVvA2WKTOD76eu8HSKAz__PzRo6vlUDR-yM6rhfJmI&usqp=CAU" alt="" />
                                    <p>$12.00</p>
                                </div>

                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <div className='delivery-box d-flex justify-content-around'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-Sl5ffKq_Z5vQNnEsahAUbvCy7YmONVNjrVL94JTwIG0Vuj_sDGQkJpT0m67JP5ZoqA&usqp=CAU" alt="" />
                                    <p>$15.00</p>
                                </div>
                                <div className='delivery-box d-flex justify-content-around'>
                                    <img src="https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png" alt="" />
                                    <p>$10.00</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <p>Your cart</p>
                        <div className='profile-box mt-4'>
                            <div className='d-flex profile'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzbSBaBkULV5hgzUKV1tF9Lu7wyZBLfW2rnbtDQxN4s5uenv7NubllWzTE_Hjj9P7G6o&usqp=CAU" alt="" />
                                <div>
                                    <h6>T-Shirt</h6>
                                    <p>Summer Vibes</p>
                                    <small >#261311</small>
                                </div>
                            </div>
                            <h6>$89.99</h6>
                        </div>
                        <div className='profile-box mt-5'>
                            <div className='d-flex profile'>
                                <img src="https://s3-us-west-2.amazonaws.com/oam.pdx.edu/profiles/yang26.png" alt="" />
                                <div>
                                    <h6>Basic Slim </h6>
                                    <p>Fit T-Shirt</p>
                                    <small>#212315</small>
                                </div>
                            </div>
                            <h6>$69.99</h6>
                        </div>
                        <div className='d-flex justify-content-around align-items-center mt-4 total mx-auto'>
                            <h6>Total cost</h6>
                            <h6>$159.98</h6>
                        </div>
                        <div className='free-ship mx-auto mt-3'>
                            <FontAwesomeIcon icon={faCab}></FontAwesomeIcon>
                            <p className='text-break ms-3'>You are $30.02 away from free shipping!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Lastportion></Lastportion>
        </main>
    );
};

export default Contents;