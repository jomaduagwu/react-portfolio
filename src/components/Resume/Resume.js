import React from 'react';
import './resume.css'; 


function Resume() {
  return (
    <div className="resume-container">
      <h2 style={{ marginTop: '20px'}}>My Resume</h2>
      <a style={{ marginBottom: '20px'}} href="https://drive.google.com/file/d/1-GV29uuG_5o52xTjWumh8_IMPsXVI0_0/view?usp=sharing"
       target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>

      <div className="resume-content">
        <h2 style={{ marginTop: '40px '}}>Jochebed Maduagwu</h2>
        <div className="contact-info">
        <p>Houston, TX | 346-329-2655 | jomaduagwu@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/jochebed-maduagwu">LinkedIn</a> |
        <a href="https://github.com/jomaduagwu">Github</a> 
        
        <h3 style={{ marginTop: '40px'}}>SUMMARY</h3>
        <p>Full Stack Web Developer transitioning from a career as an Epidemiologist, equipped with a 
            diverse background in data analysis and now focused on enhancing web applications and 
            debugging. Recently completed a Full Stack Development certificate program. Proficient in 
            collaborating with cross-functional teams to deliver impactful projects, ensuring precision 
            and quality. Excited to contribute creativity and skills to web development projects, 
            aligning with teams that prioritize excellence. Over 5 years of experience in data-driven 
            decision-making and impactful collaborations.
            </p>

        <h3 style={{ marginTop: '40px '}}>TECHNICAL SKILLS</h3>
        <p>HTML, CSS, JavaScript, React, Node.js, Express.js, jQuery, Bootstrap, MongoDB, MySQL, Python</p>

        <h3 style={{ marginTop: '40px '}}>PROJECTS</h3>
        <ul className="project-list">
            <li>
                <strong>Houston Hot Spots</strong> 
                <br />
                <a href="https://bit.ly/3PcD1Bu" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://bit.ly/44oheev" target="_blank" rel="noopener noreferrer"> Deployed App</a>
                <br />
                <strong>Summary:</strong> A Houston activity finder application
                <br />
                <strong>Tools:</strong> JavaScript, Bulma CSS, Google Maps API
                <br />
                <strong>Role:</strong> Front-end designer
            </li>
            <li>
                <strong>Google Book Search</strong> 
                <br />
                <a href="https://bit.ly/45n29eJ" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://bit.ly/3KUBVbi" target="_blank" rel="noopener noreferrer"> Deployed App</a>
                <br />
                <strong>Summary:</strong> A Google Books API Search engine
                <br />
                <strong>Tools:</strong> GraphQL API, Apollo Server, JavaScript, ExpressJS, MySQL, Google Books API
                <br />
                <strong>Role:</strong> Sole author
            </li>
            <li>
                <strong>Note Taker</strong> 
                <br />
                <a href="https://bit.ly/45f2sbn" target="_blank" rel="noopener noreferrer">GitHub</a> |
                <a href="https://bit.ly/3KVVL65" target="_blank" rel="noopener noreferrer"> Deployed App</a>
                <br />
                <strong>Summary:</strong> An application to quickly and easily write and save notes
                <br />
                <strong>Tools:</strong> JavaScript, ExpressJS, NodeJS
                <br />
                <strong>Role:</strong> Sole author
            </li>
            
        </ul>



        <h3 style={{ marginTop: '40px '}}>EXPERIENCE</h3>
        <div className="experience">
            <h4>Quality Assurance Supervisor</h4>
                <p>Kansas Department of Health</p>
                <p>Remote | January 2022 - May 2023</p>
                    <ol className="experience-list">
                        <li>Led and directed a high-performing team of 20+ case investigators, conducting comprehensive COVID-19 case surveillance investigations of Kansas residents, ensuring accurate data collection and timely reporting.</li>
                        <li>Delegated an average of 200 cases daily and ensured appropriate documentation of all information gathered during case interviews.</li>
                        <li>Achieved and maintained a 98% compliance rate by conducting weekly feedback sessions and providing targeted coaching, resulting in improved quality performance metrics.</li>
                    </ol>
        </div>

        <div className="experience">
            <h4 style={{ marginTop: '20px '}}>Epidemiologist and Contact Tracing Supervisor</h4>
                <p>Harris County Public Health</p>
                <p>Houston, TX | March 2020 - January 2022</p>
                    <ol className="experience-list">
                        <li>Managed 3 multidisciplinary teams with 60+ members. Led COVID-19 case surveillance, contact tracing, and facility assessments in high-risk settings, achieving a 15% reduction in transmission rates.</li>
                        <li>Developed and delivered comprehensive updates and insightful reports, highlighting the team’s operational achievements; enabled data-driven decision-making and facilitated continuous improvement efforts.</li>
                        <li>Advised and guided 20+ employers and businesses on implementing vital COVID-19 measures, driving strategic decision-making. </li>
                        <li>Implemented and maintained a comprehensive quality assurance framework to monitor performance and SOP compliance for contact tracing and case investigations; achieved a 30% reduction in errors.</li>
                        <li>Collaborated with epidemiologists and other supervisors in establishing priorities for case investigations and contact tracing; developed workflows for quality assurance, daily reports, and contact tracking.</li>  
                    </ol>
        </div>

        <div className="experience">
            <h4 style={{ marginTop: '20px '}}>National Youth Service Corps Member</h4>
                <p>Edgewood College</p>
                <p>Lagos, Nigeria | July 2017 - June 2018</p>
                    <ol className="experience-list">
                        <li>Recruited 150+ students for entrance exams, yielding a 97% increase in applications.</li>
                        <li>Spearheaded a college fair with 21+ institutions, fostering connections and raising awareness.</li>
                    </ol>
        </div>

        <div className="experience">
            <h4 style={{ marginTop: '20px '}}>Maternal and Child Health Epidemiologist</h4>
                <p>Hamilton County Public Health</p>
                <p>Cincinnati, OH | August 2016 - June 2017</p>
                    <ol className="experience-list">
                        <li>Conducted Perinatal Periods of Risk Analyses (PPOR), identifying critical high-mortality periods. Implemented targeted interventions, leading to a 24% county-wide infant mortality reduction.</li>
                        <li>Translated findings into actionable reports on intervention progress, driving a 25% improvement in intervention effectiveness.</li>
                        <li>Created geospatial visualizations to pinpoint high-risk regions, guiding targeted interventions and resource allocation for improved community health</li>
                    </ol>
        </div>

        <div className="experience">
            <h4 style={{ marginTop: '20px '}}>Research Assistant</h4>
                <p>Diabetes Translational Research Center - IU School of Medicine</p>
                <p>Indianapolis, IN | October 2014 - July 2016</p>
                    <ol className="experience-list">
                        <li>Analyzed demographic, health habits, and diabetes knowledge data from a pool of 107 conference attendees using SPSS. This data-driven assessment strategically informed enhancements to conference structure and content, resulting in a more impactful and tailored experience for participants.</li>
                    </ol>
        </div>

        <div className="experience">
            <h4 style={{ marginTop: '20px '}}>Epidemiology Intern</h4>
                <p>Jump IN for Healthy Kids</p>
                <p>Indianapolis, IN | June 2015 - October 2015</p>
                    <ol className="experience-list">
                        <li>Conducted SAS-based baseline analysis, revealing a 43% childhood overweight/obesity rate in the 8-county region of central Indiana.</li>
                        <li>Created a comprehensive 2015-2025 Sampling Plan Manual, empowering stakeholders with data-driven insights to monitor child overweight/obesity trends, leading to informed decision-making and target interventions.</li>
                    </ol>
        </div>
        
        <h3 style={{ marginTop: '40px '}}>EDUCATION</h3>
            <div className="education">
                <h4>Certificate in Full Stack Web Development</h4>
                <p>Rice University Bootcamp</p>
                <p>February 2023 - August 2023</p>
            </div>

            <div className="education">
                <h4>Data Analytics Bootcamp</h4>
                <p>Thinkful</p>
                <p>November 2019 - February 2020</p>
            </div>

            <div className="education">
                <h4>Master of Public Health in Epidemiology</h4>
                <p>Indiana University-Purdue University Indianapolis</p>
                <p>August 2014 - May 2016</p>
            </div>

            <div className="education">
                <h4>Bachelor of Science in Biochemistry</h4>
                <p>Calvin College</p>
                <p>August 2010 - May 2014</p>
            </div>
        </div>
    </div>
  );
}

export default Resume;
