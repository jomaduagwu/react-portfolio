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
                <div className="col-md-6 d-block text-center">
                    <p>Hi! My name is Jochebed and I am a full-stack developer, based out of Houston, TX. I have recently transitioned 
                        my career from Epidemiology to the dynamic world of web development, bringing a unique perspective to the tech 
                        industry. During my journey as a developer, I completed a comprehensive 6-month Full Stack Web Development Bootcamp 
                        at Rice University, honing my skills in both front-end and back-end technologies. I have a keen eye for detail, and 
                        my ability to gather and analyze data, previously applied in epidemiology, now serves as a powerful asset in debugging 
                        and improving web applications.
                    </p>
                    <p>
                    My technical skills include proficiency in <strong>HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, MongoDB, and MySQL</strong>. I am adept 
                    at building interactive and user-friendly web applications that deliver seamless user experiences.
                    </p>
                    <p>
                        As a web developer, I am passionate about creating innovative solutions that positively impact users' lives. I believe 
                        in the power of technology to drive positive change and am dedicated to making a difference through my work. I am excited 
                        to contribute my skills and creativity to dynamic web development projects and collaborate with passionate teams that share 
                        my commitment to excellence.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default About;
