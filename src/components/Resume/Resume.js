import React from 'react';
import './resume.css'; 

function Resume() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      {/* Add the content of your resume here */}
      <a href="https://drive.google.com/file/d/1KxA-_JtK5RHaYQ3gKepJN6OCFJItUw7K/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>

      <div className="resume-content">
        <h2>Jochebed Maduagwu</h2>
        <p>Houston, TX | 346-329-2655 | jomaduagwu@gmail.com</p>
        <a href="www.linkedin.com/in/jochebed-maduagwu-26341148">LinkedIn</a> |
        <a href="https://github.com/jomaduagwu">Github</a> | <a href="https://jomaduagwu.github.io/portfolio/">Portfolio</a>
        
        <h3>SUMMARY</h3>
        <p>Detail-oriented and motivated Full Stack Web Developer with a strong background in data analytics. 
            I have recently transitioned my career from Epidemiology to the dynamic world of web development, 
            bringing a unique perspective to the tech industry. I have a keen eye for detail, and my ability 
            to gather and analyze data, previously applied in epidemiology, now serves as a powerful asset in 
            debugging and improving web applications.
            </p>
            <p>My technical skills include proficiency in HTML, CSS, JavaScript, MongoDB, and MySQL. 
            I am excited to contribute my skills and creativity to dynamic web development projects and collaborate 
            with passionate teams that share my commitment to excellence.
        </p>

        <h3>TECHNICAL SKILLS</h3>
        <p>Web Development: HTML, CSS, JavaScript, React, Node.js, Express.js, jQuery, Bootstrap</p>
        <p>Databases: MongoDB, MySQL</p>
        <p>Data Analysis: Excel, SQL, Tableau, SAS, SPSS, R</p>
        <p>GIS Mapping</p>

        <h3>EXPERIENCE</h3>
        <div className="experience">
            <h4>Quality Assurance Supervisor</h4>
                <p>Kansas Department of Health</p>
                <p>Remote | January 2022 - Present</p>
                    <ul className="experience-list">
                        <li>Supervised a team of 20+ case investigators responsible for COVID-19 case surveillance investigations of Kansas residents</li>
                        <li>Delegated cases daily and ensured appropriate documentation of all information gathered during case interview</li>
                        <li>Ensured quality performance metrics were met by case investigators through weekly feedback sessions and coaching</li>
                    </ul>
        </div>

        <div className="experience">
            <h4>Epidemiologist and Contact Tracing Supervisor</h4>
                <p>Harris County Public Health</p>
                <p>Houston, TX | March 2020 - January 2022</p>
                    <ul>
                        <li>Supervised the multidisciplinary teams – Workplace Investigations Team, School 
                            Investigations Team, and  Healthcare Investigations Team, which are responsible 
                            for COVID-19 case surveillance investigation, contact  tracing, and facility assessments 
                            in congregate and high-risk settings</li>
                        <li>Provided leadership with comprehensive updates and created reports summarizing the teams’ 
                            activities</li>
                        <li>Provided COVID-19 guidance to employers and businesses; reviewed operating/reopening plans 
                            and conducted  site assessments for facilities to ensure compliance with COVID-19 social 
                            distancing guidance </li>
                        <li>Conducted quality assurance and performance monitoring to ensure team members’ efforts were 
                            aligned with  SOPs for contact tracing and case investigations; worked with team members to 
                            address conflict or issues
                        </li>
                        <li>Collaborated with epidemiologists and other supervisors in establishing priorities for case 
                            investigations and  contact tracing; developed workflows for quality assurance, daily reports, 
                            and contacts tracking</li>  
                    </ul>
        </div>
        
        <h3>EDUCATION</h3>
            <div className="education">
                <h4>Full Stack Web Development Bootcamp</h4>
                <p>Rice University</p>
                <p>Feb 2023 - Aug 2023</p>
            </div>

            <div className="education">
                <h4>Data Analytics Bootcamp</h4>
                <p>Thinkful</p>
                <p>Feb 2020</p>
            </div>

            <div className="education">
                <h4>Master of Public Health in Epidemiology</h4>
                <p>Indiana University-Purdue University Indianapolis</p>
                <p>May 2016</p>
            </div>

            <div className="education">
                <h4>Bachelor of Science in Biochemistry</h4>
                <p>Calvin College</p>
                <p>May 2014</p>
            </div>
        </div>
    </div>
  );
}

export default Resume;
