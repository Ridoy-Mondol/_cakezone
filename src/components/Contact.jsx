import React,{ useState, useEffect} from 'react'
import img from '../Images/bg.jpg'
import Commonheading from './Commonheading'

const Contact = ({common}) => {
  const initialState = {
    name : "",
    email : "",
    subject : "",
    message : "",
  }
  const [formValues, setFormValues] = useState (initialState);
  const [errors, setErrors] = useState ({});
  const [success, setSuccess] = useState (false);
  const handleInput = (event) => {
    const { name, value} = event.target;
    setFormValues ({...formValues,[name] : value});
    
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate(formValues);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setSuccess (true);
      console.log (formValues);
    }
    // setSuccess (true);
  }
  useEffect ( () => {
    if (Object.keys(errors).length === 0 && success) {
      console.log (formValues);
    }
  },[errors]);
  const validate = (values) => {
     const error = {};
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(!values.name) {
       error.name = "Please enter your name";
     }
     if(!values.email) {
      error.email = "Please enter your email";
    }
    else if (!emailRegex.test(values.email)) {
      error.email = "Please enter valid email";
    }
    if(!values.subject) {
      error.subject = "Please enter your subject";
    }
    if(!values.message) {
      error.message = "Please enter your message";
    }
    return error;
  }
  return (
    <>
    {common==="common" && <Commonheading heading = "CONTACT US" link = "CONTACT" url = "/contact"/>}

    <div className='service-div contact-div'>
      
      <div className='contact-img-div '>
      <img src={img} className='img-fluid menu-bg contact-bg' alt='background image'/>

      <div className='card-flex contact-card'>

      <div className='logo-outer card-outer contact-card-outer'>
       <div className='logo-inner card-inner contact-card-inner'>
       
       <i class="fa-solid fa-location-dot contact-card-icon"></i>
       <span className='contact-card-heading'>OUR OFFICE</span>
       <span className='contact-card-para'>
        Rajshahi, Bangladesh
       </span>
      
       </div>
       </div>

       <div className='logo-outer card-outer contact-card-outer'>
       <div className='logo-inner card-inner contact-card-inner'>
       
       <i class="fa-regular fa-envelope-open contact-card-icon"></i>
       <span className='contact-card-heading'>EMAIL US</span>
       <span className='contact-card-para'>
       ridoymondol140@gmail.com
       </span>
      
       </div>
       </div>

       <div className='logo-outer card-outer contact-card-outer'>
       <div className='logo-inner card-inner contact-card-inner'>
       
       <i class="fa-solid fa-mobile-screen contact-card-icon"></i>
       <span className='contact-card-heading'>CALL US</span>
       <span className='contact-card-para'>
        +8801319118383
       </span>
      
       </div>
       </div>

       </div>

       {/* {Object.keys(errors).length === 0 && success ? (<div className='submit-success'>
        Form Submitted Successfully
        </div>) : ""}    */}

    {Object.keys(errors).length === 0 && success && (
     <div className='submit-success'>
    Form Submitted Successfully
    </div>
    )}


       <form method="POST" className='form' onSubmit={handleSubmit}>

       <div className="input-flex mt-3">
                    <input type="text" placeholder="Your Name" name="name" value={formValues.name} className="input-inline" onChange = {handleInput}/>
                    <input type="email" placeholder="Your Email" name="email" value={formValues.email} className="input-inline" onChange = {handleInput}/>
                    </div>
                    <div className='d-flex justify-content-between'>
                    <span className = "error-msg">{errors.name}</span>
                    <span className = "error-msg error-email">{errors.email}</span>
                    </div>
                    <div>
                    <input type="text" placeholder="Subject" name="subject" value={formValues.subject} className="input-div mt-3" onChange = {handleInput}/>
                    </div>
                    <span className = "error-msg">{errors.subject}</span>
                    <div>
                    <input type="text" placeholder="Your Message" name="message" value={formValues.message} className="input-div input-msg mt-3" onChange = {handleInput}/>
                    </div>
                    <p className = "error-msg">{errors.message}</p>
                    <div className='btn-outer contact-btn-outer mt-3'>
                     <button type='submit' className='btn-inner contact-btn-inner'>Submit</button>
                     </div>
                </form>

      </div>

    </div>
    </>
  )
}

export default Contact
