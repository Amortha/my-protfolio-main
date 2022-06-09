import React from 'react';
import './AbountMe.css';
import image from '../../images/Profile2.png'


const AboutMe = () => {
    return (
        <div className="banner container-fluid">
            <div className="container">
                <div className="top-section pt-5 mt-5">
                    <div className="row gx-1">
                        <div className="col-md-6  mt-5 p-5">
                            <h1>Hello!</h1>
                            <div className="description">
                                <h1>I'M <span className="name">Amortha Kumar Shill</span></h1>
                                <h5>I am an enthusiastic JavaScript developer with knowing some framework
                                    for the frontend and the backend. I know Basic PHP and MySQL but
                                    basically a MERN developer.
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img width="600px" height="800px" className='mb-5  pb-5'src={image} alt=""  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;