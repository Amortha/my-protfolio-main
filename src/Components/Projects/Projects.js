import React from 'react';
import { Nav } from 'react-bootstrap';
import './Projects.css'
import { Link } from 'react-router-dom';
import img from '../../images/scren1.PNG';
import img2 from '../../images/scren2.PNG';
import img3 from '../../images/scrin3.PNG';

const Projects = () => {
    return (
        <>
            <div className="container mb-5" id="projects">
                <h1 className="my-5">My Recent Projects</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 p-3">
                    <div className="col">
                        <div className="card h-100 bg-dark">
                            <img src={img3} className="card-img-top image" alt="..." />
                            <div className="card-body  text-success">
                                <h4 className="card-title">manufacture Website (MERN stack)</h4>
                                <p className="card-text">
                                    <strong>Technology Used:</strong> React js, Bootstrap, tailwind css,daisyui, Firebase Authentication, Nodes
                                    JS(Express), MongoDB, Heroku(server deploy)
                                </p>
                            </div>
                            <div className="d-flex align-items-sm-center justify-content-around">
                                <Link>Details</Link>
                                <Nav.Link target="_blank" href="https://elegant-sopapillas-49c97d.netlify.app">View Site</Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-dark">
                            <img src={img}  className="card-img-top image" alt="..." />
                            <div className="card-body text-success">
                                <h4 className="card-title">car-warehouse Management Website (MERN stack)</h4>
                                <p className="card-text">
                                    <strong>Technology Used:</strong> React js, React bootstrap, Bootstrap, Firebase Authentication, Nodes
                                    JS(Express), MongoDB, Heroku(server deploy), firebase hosting(client site deploy)
                                </p>
                            </div>
                            <div className="d-flex align-items-sm-center justify-content-around">
                                <Link>Details</Link>
                                <Nav.Link target="_blank" href="https://splendorous-selkie-0826f4.netlify.app">View Site</Nav.Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-dark">
                            <img src={img2}  className="card-img-top image" alt="..." />
                            <div className="card-body text-success">
                                <h4 className="card-title">independent service provider Website</h4>
                                <p className="card-text">
                                    <strong>Technology Used:</strong>CSS3,React Bootstrap5,React js,firebase,
                                </p>
                            </div>
                            <div className="d-flex align-items-sm-center justify-content-around text-xl">
                                <Link >Details</Link>
                                <Nav.Link target="_blank" href="https://dazzling-naiad-e5340b.netlify.app">View Site</Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;