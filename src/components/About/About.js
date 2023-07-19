import React from 'react';
import aboutPhoto from '../Assets/jmphoto.jpeg';
import './about.css';

function About() {
    return (
        <section id="about" className="container">
            <h2>About Me</h2>
            <div className="row">
                <div className = "col-md-6">
                    <figure>
                        <img className="profile-img" src={aboutPhoto} alt="Jochebed Maduagwu" />
                    </figure>
                </div>
                <div className="col-md-6 d-flex alight-items-center">
                    <p>Hi! My name is Jochebed and I am a full-stack developer in the making, based out of Houston, TX. I'm
                        a seasoned public health professional with 5+ years of experience focused on maternal and child health, 
                        infectious diseases, and most recently case investigations for COVID-19. I have always had an interest in
                        technology and data, which led me to pursue numerous data analytics programs during my career. I have 
                        recently started my journey as a developer, and I'm excited about this opportunity to further broaden my 
                        ability to leverage data and technology.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default About;