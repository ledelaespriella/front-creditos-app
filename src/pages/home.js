import React from 'react';
import Nav from '../components/navBar'
import Foot from './../components/footer'

const Home = () =>{
    return<>
        <Nav/>
        <section className='container-fluid p-0'>
            <div className='w-100 container-content d-flex justify-content-start'>
                {/* <img src="http://localhost:3001/leasing.jpg" style={{width: '1366px'}}/> */}
                <div id='card' className="card text-light mb-3 my-auto" >
                    <div className="card-header">
                        <h1 className="card-title">Credito leasing</h1>
                    </div>
                    <div className="card-body fs-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur, optio facere cumque voluptates aperiam saepe corrupti. Ut, maiores minus, deleniti eligendi facilis rem placeat sunt corporis provident accusamus molestias.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam non veritatis facere excepturi nihil, dignissimos quas voluptatem iure aut quis alias libero earum? Tempora consectetur harum atque facere non dignissimos.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Foot/>
    </>
};

export default Home;