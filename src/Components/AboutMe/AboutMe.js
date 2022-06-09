import React from 'react';
import './AbountMe.css';
import image from '../../images/Profile2.png'


const AboutMe = () => {
    return (
        <div className="">
        
            <div className="">
                <div className="">
                    <div className="row gx-1">
                        <div className="col-md-6 col-sm-6 mt-5 p-5">
                            <h1>Hello!</h1>
                            <div className="description">
                                <h1>I'M <span className="name">Amortha Kumar Shill</span></h1>
                                <h5>I am an enthusiastic JavaScript developer with knowing some framework
                                    for the frontend and the backend. I know Basic PHP and MySQL but
                                    basically a MERN developer.
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img width="600px" height="800px" className='pb-5'src={image} alt=""  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;