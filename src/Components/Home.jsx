import React from 'react'
import homeimg from './img/H3.png'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark">
                <img src={homeimg} height={710} className="card-img" alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0 d-block ">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2 d-block" >CHECK OUT ALL THE TRENDS 
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home