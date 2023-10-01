import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLinkedin, faGithub } from '@fortawesome/free-solid-svg-icons';

function Contact () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    // const inputChangeHandlers = {
    //     name: setName,
    //     email: setEmail,
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // const inputChangeHandler = inputChangeHandlers[name];
        // if (inputChangeHandler) {
        //     inputChangeHandler(value);
        // }

        switch (name) {
            case 'nameInput':
              setName(value);
              break;
            case 'emailInput':
              setEmail(value);
              break;
            case 'messageInput':
              setMessage(value);
              break;
            default:
              break;
          }
        };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!emailIsValid(email)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setName('');
            setEmail('');
            setMessage('');
            setEmailError('');
        }
    };

    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
    

    return (
        <section id="contact-form">
            <div className="contact-info">
                <h2>Want to get in touch?</h2>
                <div className="contact-details">
                    <p> My Phone Number: 346-329-2655</p>
                    <p>My Email: jomaduagwu@gmail.com</p>
                    <p><a href="https://www.linkedin.com/in/jochebed-maduagwu/"><i className="fab fa-linkedin"></i> My LinkedIn</a></p>
                    <p><a href="https://github.com/jomaduagwu"><i className="fab fa-github"></i>My GitHub</a></p>
                </div>
                {/* <p>
                    <FontAwesomeIcon icon={faLinkedin} />LinkedIn: <a href="https://www.linkedin.com/in/jochebed-maduagwu">My LinkedIn Profile</a>
                </p>
                <p>
                    <FontAwesomeIcon icon={faGithub} />GitHub: <a href="https://github.com/jomaduagwu">My GitHub Profile</a>
                </p> */}
            </div>
            <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Your Name:</label>
                    <input type="text" className="form-control" id="nameInput" aria-describedby="nameHelp"
                    name="nameInput"
                    value={name}
                    onChange={handleInputChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address:</label>
                    <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`} id="emailInput" aria-describedby="emailHelp"
                    name="emailInput"
                    value={email}
                    onChange={handleInputChange}
                    required />
                    {emailError && <div className="invalid-feedback">{emailError}
                    </div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="messageInput" className="form-label">Leave a message:</label>
                    <textarea className="form-control" id="messageInput" 
                    name="messageInput"
                    value={message}
                    onChange={handleInputChange}
                    required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
      
        </section>
    );
}

export default Contact;