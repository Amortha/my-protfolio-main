import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Skills.css'

// Amirtha
const Skills = () => {
    const html = 90;
    const css = 80;
    const javaScript = 60;
    const react = 80;
    const bootsTrap = 90;
    const nodeJs = 60;

    return (
        <div id="skills">
            <div className="container ">
                <h1 className="mt-5">Skills</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p>HTML5</p>
                        <ProgressBar now={html} label={`${html}%`} />
                        <br />
                        <p>CSS3</p>
                        <ProgressBar now={css} label={`${css}%`} />
                        <br />
                        <p>JAVA SCRIPT</p>
                        <ProgressBar now={javaScript} label={`${javaScript}%`} />
                    </div>
                    <div className="col-md-6">
                        <p>BOOTSTRAP</p>
                        <ProgressBar now={react} label={`${react}%`} />
                        <br />
                        <p>REACT JS</p>
                        <ProgressBar now={bootsTrap} label={`${bootsTrap}%`} />
                        <br />
                        <p>NODE JS</p>
                        <ProgressBar now={nodeJs} label={`${nodeJs}%`} />
                        <br />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;