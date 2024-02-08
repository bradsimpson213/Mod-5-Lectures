//!!START SILENT
import { useState, useEffect } from 'react';
//!!END
//!!ADD
// import { useState } from 'react';
//!!END_ADD

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [comments, setComments] = useState('');
  //!!START SILENT
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};
    if (!name.length) errors['name']='Please enter your Name';
    if (!email.includes('@')) errors['email']='Please provide a valid Email';
    setValidationErrors(errors);
  }, [name, email]);
  //!!END

  const onSubmit = e => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    //!!START SILENT
    setHasSubmitted(true);
    if (Object.values(validationErrors).length) 
      return alert(`The following errors were found:
      
        ${validationErrors.name ? "* " + validationErrors.name : ""}
        ${validationErrors.email ? "* " + validationErrors.email : ""}`
      );

    //!!END
    // Create a new object for the contact information.
    const contactUsInformation = {
      name,
      email,
      phone,
      phoneType,
      comments,
      submittedOn: new Date()
    };

    // Ideally, you'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact information to the console.
    console.log(contactUsInformation);

    // Reset the form state.
    setName('');
    setEmail('');
    setPhone('');
    setPhoneType('');
    setComments('');
    //!!START SILENT
    setValidationErrors({});
    setHasSubmitted(false);
    //!!END
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            onChange={e => setName(e.target.value)}
            value={name}
          />
          {/*!!START SILENT */}
          <div className='error'>
            {hasSubmitted && validationErrors.name && `* ${validationErrors.name}`}
          </div>
          {/*!!END */}
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          {/*!!START SILENT */}
          <div className='error'>
            {hasSubmitted && validationErrors.email && `* ${validationErrors.email}`}
          </div>
          {/*!!END */}
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
          <select
            name='phoneType'
            onChange={e => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value='' disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <div>
          <label htmlFor='comments'>Comments:</label>
          <textarea
            id='comments'
            name='comments'
            onChange={e => setComments(e.target.value)}
            value={comments}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
