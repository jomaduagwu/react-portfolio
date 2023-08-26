import React from 'react';
import './resume.css'; 

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <a href="https://drive.google.com/file/d/1-GV29uuG_5o52xTjWumh8_IMPsXVI0_0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>

      <div className="resume-content">
        <h2>Jochebed Maduagwu</h2>
        <p>Houston, TX | 346-329-2655 | jomaduagwu@gmail.com</p>
        <a href="www.linkedin.com/in/jochebed-maduagwu-26341148">LinkedIn</a> |
        <a href="https://github.com/jomaduagwu">Github</a> 
        
        <h3>SUMMARY</h3>
        <p>Full Stack Web Developer transitioning from a career as an Epidemiologist, equipped with a 
            diverse background in data analysis and now focused on enhancing web applications and 
            debugging. Recently completed a Full Stack Development certificate program. Proficient in 
            collaborating with cross-functional teams to deliver impactful projects, ensuring precision 
            and quality. Excited to contribute creativity and skills to web development projects, 
            aligning with teams that prioritize excellence. Over 5 years of experience in data-driven 
            decision-making and impactful collaborations.
            </p>

        <h3>TECHNICAL SKILLS</h3>
        <p>Web Development: HTML, CSS, JavaScript, React, Node.js, Express.js, jQuery, Bootstrap, MongoDB, MySQL</p>

        <h3>EXPERIENCE</h3>
        <div className="experience">
            <h4>Quality Assurance Supervisor</h4>
                <p>Kansas Department of Health</p>
                <p>Remote | January 2022 - Present</p>
                    <ul className="experience-list">
                        <li>Led and directed a high-performing team of 20+ case investigators, conducting comprehensive COVID-19 case surveillance investigations of Kansas residents, ensuring accurate data collection and timely reporting.</li>
                        <li>Delegated an average of 200 cases daily and ensured appropriate documentation of all information gathered during case interviews.</li>
                        <li>Achieved and maintained a 98% compliance rate by conducting weekly feedback sessions and providing targeted coaching, resulting in improved quality performance metrics.</li>
                    </ul>
        </div>

        <div className="experience">
            <h4>Epidemiologist and Contact Tracing Supervisor</h4>
                <p>Harris County Public Health</p>
                <p>Houston, TX | March 2020 - January 2022</p>
                    <ul>
                        <li>Managed 3 multidisciplinary teams with 60+ members. Led COVID-19 case surveillance, contact tracing, and facility assessments in high-risk settings, achieving a 15% reduction in transmission rates.</li>
                        <li>Developed and delivered comprehensive updates and insightful reports, highlighting the team’s operational achievements; enabled data-driven decision-making and facilitated continuous improvement efforts.</li>
                        <li>Advised and guided 20+ employers and businesses on implementing vital COVID-19 measures, driving strategic decision-making. </li>
                        <li>Implemented and maintained a comprehensive quality assurance framework to monitor performance and SOP compliance for contact tracing and case investigations; achieved a 30% reduction in errors.</li>
                        <li>Collaborated with epidemiologists and other supervisors in establishing priorities for case investigations and contact tracing; developed workflows for quality assurance, daily reports, and contact tracking.</li>  
                    </ul>
        </div>

        <div className="experience">
            <h4>National Youth Service Corps Member  (one-year compulsory community service)</h4>
                <p>Edgewood College</p>
                <p>Lagos, Nigeria | July 2017 - June 2018</p>
                    <ul>
                        <li>Recruited 150+ students for entrance exams, yielding a 97% increase in applications.</li>
                        <li>Spearheaded a college fair with 21+ institutions, fostering connections and raising awareness.</li>
                    </ul>
        </div>

        <div className="experience">
            <h4>Maternal and Child Health Epidemiologist</h4>
                <p>Hamilton County Public Health</p>
                <p>Cincinnati, OH | August 2016 - June 2017</p>
                    <ul>
                        <li>Conducted Perinatal Periods of Risk Analyses (PPOR), identifying critical high-mortality periods. Implemented targeted interventions, leading to a 24% county-wide infant mortality reduction.</li>
                        <li>Translated findings into actionable reports on intervention progress, driving a 25% improvement in intervention effectiveness.</li>
                        <li>Created geospatial visualizations to pinpoint high-risk regions, guiding targeted interventions and resource allocation for improved community health</li>
                    </ul>
        </div>

        <div className="experience">
            <h4>Research Assistant</h4>
                <p>Diabetes Translational Research Center - IU School of Medicine</p>
                <p>Indianapolis, IN | October 2014 - July 2016</p>
                    <ul>
                        <li>Analyzed demographic, health habits, and diabetes knowledge data from a pool of 107 conference attendees using SPSS. This data-driven assessment strategically informed enhancements to conference structure and content, resulting in a more impactful and tailored experience for participants.</li>
                    </ul>
        </div>

        <div className="experience">
            <h4>Epidemiology Intern</h4>
                <p>Jump IN for Healthy Kids</p>
                <p>Indianapolis, IN | June 2015 - October 2015</p>
                    <ul>
                        <li>Conducted SAS-based baseline analysis, revealing a 43% childhood overweight/obesity rate in the 8-county region of central Indiana.</li>
                        <li>Created a comprehensive 2015-2025 Sampling Plan Manual, empowering stakeholders with data-driven insights to monitor child overweight/obesity trends, leading to informed decision-making and target interventions.</li>
                    </ul>
        </div>
        
        <h3>EDUCATION</h3>
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
