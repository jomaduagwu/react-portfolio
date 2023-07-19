import React, { useState } from 'react';
import './form.css';

function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const inputChangeHandlers = {
    firstName: setFirstName,
    lastName: setLastName,
    emailAddress: setEmailAddress,
    phoneNum: setPhoneNum,
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    const inputChangeHandler = inputChangeHandlers[name];
    if (inputChangeHandler) {
      inputChangeHandler(value);
    }
  };

  //   switch (name) {
  //     case 'firstName':
  //       setFirstName(value);
  //       break;
  //     case 'lastName':
  //       setLastName(value);
  //       break;
  //     case 'emailAddress':
  //       setEmailAddress(value);
  //       break;
  //     case 'phoneNum':
  //       setPhoneNum(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
  //   return name === 'firstName' ? setFirstName(value) : setLastName(value);
  // };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // email validation using regex
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(emailAddress)) {
      setEmailError('Please enter a valid email address.');
      return;
    } else {
      setEmailError('');
    }

    // Phone number validation using regex
    const phoneValidation = /^\d{10}$/;
    if (!phoneValidation.test(phoneNum)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return;
    } else {
      setPhoneError('');
    }
    // Alert the user their first and last name, clear the inputs
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setPhoneNum('');
  };

  return (
    <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
          <input
          value={emailAddress}
          name="emailAddress"
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
        />
        {emailError && <div className="error-message">{emailError}</div>}
          <input
          value={phoneNum}
          name="phoneNum"
          onChange={handleInputChange}
          type="text"
          placeholder="Phone Number"
        />
        {phoneError && <div className="error-message">{phoneError}</div>}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
