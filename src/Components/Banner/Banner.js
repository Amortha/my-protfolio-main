import React from 'react';
import './Banner.css';
import profile from '../../images/Profile1.png'
import { Typewriter } from 'react-simple-typewriter'
import { Nav } from 'react-bootstrap';

const Banner = () => {

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className="">
            <div className="">
                <div className="row gx-1">
                    <div className="col-md-6 col-sm-12 text p-5">
                        <div>
                            <h1>Hello!</h1>
                            <h3>I'M Amortha Kumar Shill</h3>
                            <h3>
                                I'm good at: {' '}
                                <span style={{ color: 'red', fontWeight: 'bold', marginLeft: "10px" }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT", "REACT JS", "NODE JS"]}
                                        loop
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                        onLoopDone={handleDone}
                                    />
                                </span>
                            </h3>
                            <div className="description">
                                <p>
                                    I like to introduce me as FrontEnd developer, as I am very well known about HTML5, CSS3 and some framework like BootsTrap and Tailwind CSS.
                                    I am also good at JavaScript, React Js, Noe Js, Mongo DB.
                                </p>
                            </div>
                            <button><Nav.Link className="link-text" href="#contact">Hire Me</Nav.Link></button>
                            <button><Nav.Link className="link-text" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1oHfJ-kEdhpBtXtOF57_kQRWOl7q4rdf7/view?usp=sharing">See MY Resume</Nav.Link></button>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3">
                        {/* <img  width="600px" height="700px" src={profile}  alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;