import React from 'react';
import './Lastportion.css'

const Lastportion = () => {
    return (
        <section className=' d-flex justify-content-between container mt-4'>
            <div >
                <p>← Back</p>
            </div>
            <div >
                <button className='text-uppercase cont-shop'>Contitnue Shopping</button>
                <button className='text-uppercase prop-pay'>Proceed to payment</button>
            </div>
        </section>
    );
};

export default Lastportion;