// used multiple times in portfolio section

import React from 'react';
import hotspots from '../Assets/houston-hot-spots-scrnsht.png';
import booktrackr from '../Assets/booktrackr-screenshot.png';
import horiseon from '../Assets/horiseon-webpage-screenshot.png';
import codingquiz from '../Assets/coding-quiz-screenshot.png';
import pswdgen from '../Assets/pswd-generator.png';
import scheduler from '../Assets/work-day-scheduler-screenshot.png';
import wanderjo from '../Assets/wanderjoscreenshot1.png';
import './Project.css';


function Project() {
    const repoLinks = {
        horiseon: 'https://github.com/jomaduagwu/horiseon-code-refactor',
        hotspots: 'https://github.com/jomaduagwu/project-houston-hot-spots',
        booktrackr: 'https://github.com/jomaduagwu/Bookmanagement-system-Group3',
        pswdgen: 'https://github.com/jomaduagwu/friendly-parakeet',
        codingquiz: 'https://github.com/jomaduagwu/code-quiz',
        scheduler: 'https://github.com/jomaduagwu/work-day-scheduler',
        wanderjo: 'https://github.com/jomaduagwu/wanderjo-app',
    };

  return (
//   <div>Project Component</div>;
    <section id="work" className="container">
        <h2>Projects</h2>
        <div className="row card-deck">
                <div className="col-mb-3">
                    <div className="card">
                        <div className="card-body">
                            <a href="https://jomaduagwu.github.io/project-houston-hot-spots/" >
                                <img src={hotspots} className="card-img-top" alt="Houston Hot Spots Project" />
                            </a>
                            <h5 className="card-title">Houston Hot Spots</h5>
                            <p className="card-text">An application to find popular events, businesses and attractions in the Houston area. It can provide suggestions based on user's preferences.</p>
                            <a href={repoLinks.hotspots}>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card md-6">
                <a href="https://jomaduagwu.github.io/react-portfolio/">
                    <img src={wanderjo} className="card-img-top" alt="WanderJo Travel App" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">WanderJo Travel App</h5>
                    <p className="card-text">A trip planner designed to help users search for travel destinations and discover exciting attractions.</p>
                    <a href={repoLinks.wanderjo}>GitHub Repository</a>
                </div>
            </div>
            <div className="card md-6">
                <a href="https://jomaduagwu.github.io/horiseon-code-refactor/">
                    <img src={horiseon} className="card-img-top" alt="Horiseon Code Refactor Project" />
                </a>
                <div className="card-body">
                    <h5 className="card-title">Horiseon Code Refactor</h5>
                    <p className="card-text">A refactor of Horiseon's starter code, improving the structure of the program and the codebase for long-term sustainability</p>
                    <a href={repoLinks.horiseon}>GitHub Repository</a>
                </div>
            </div>
            {/* <div className="row card-deck">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <a href="https://jomaduagwu.github.io/project-houston-hot-spots/" >
                                <img src={hotspots} className="card-img-top" alt="Houston Hot Spots Project" />
                            </a>
                            <h5 className="card-title">Houston Hot Spots</h5>
                            <p className="card-text">An application to find popular events, businesses and attractions in the Houston area. It can provide suggestions based on user's preferences.</p>
                            <a href={repoLinks.hotspots}>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row card-deck">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <a href="https://bookmanagement.herokuapp.com/">
                                <img src={booktrackr} className="card-img-top" alt="Book Trackr Project" />
                            </a>
                            <h5 className="card-title">Book Trackr</h5>
                            <p className="card-text">Book Management System allows users to keep track of their personal book collection. The application will provide a user-friendly interface for managing books, including adding new books, updating book details, and viewing the book collection.</p>
                            <a href={repoLinks.booktrackr}>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <a href="https://jomaduagwu.github.io/friendly-parakeet/">
                                <img src={pswdgen} className="card-img-top" alt="Password generator" />
                            </a>
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">A random password generator.When the user needs a new secure password, the user clicks on the 'generate password' button and answers a series of prompts for the desired password criteria.</p>
                            <a href={repoLinks.pswdgen}>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <div className="row card-deck">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <a href="https://jomaduagwu.github.io/code-quiz/">
                                <img src={codingquiz}  alt="Coding Quiz Project" />
                            </a>
                            <h5 className="card-title">Web API's Quiz</h5>
                            <p className="card-text">A timed quiz on JavaScript fundamentals that stores high scores and enables the user to compare their progress to others taking the quiz</p>
                            <a href={repoLinks.codingquiz}>GitHub Repository</a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <a href="https://jomaduagwu.github.io/work-day-scheduler/">
                                <img src={scheduler} alt="Work-day scheduler" />
                            </a>
                            <h5 className="card-title">Work Day Scheduler</h5>
                            <p className="card-text">A simple calendar application that allows a user to save events for each hour of the day.</p>
                            <a href={repoLinks.scheduler}>GitHub Repository</a>
                        </div>
                    </div>
                </div>
            </div>
    </section>
)};


export default Project;