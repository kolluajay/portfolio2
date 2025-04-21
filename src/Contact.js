import React from 'react'
import { FaCloud, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPaperPlane, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div id="contact">
    <div className="container">
        <div className="row">
            <div className="contact-left">
                <h1 className="sub-title">Contact Me</h1>
                <p><FaPaperPlane style={{fontSize: "20px"}}/>kolluajay042005@gmail.com</p>
                <p><FaPhone style={{fontSize: "20px"}} />8497938331</p>
                <div className="social-icons">
                    <a href="#"><FaFacebook /></a>
                    <a href="https://github.com/"><FaGithub /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/in/ajay-kollu-6b307a251/"><FaLinkedin /></a>
                </div>
                <a href="images/my-cv.pdf" download className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
                <form name="submit-to-google-sheet">
                    <input type='text' name='Name' placeholder='Your Name' required/>
                    <input type='text' name='Email' placeholder='Your Email' required/>
                    <textarea name='Message' rows="6" placeholder='Your Message'></textarea>
                    <button type='submit' className='btn btn2'>Submit</button>
                </form>
                <span id="msg"></span>
            </div>
        </div>
    </div>
    <div className="copyright">
        <p>Copyright &copy; Ajay.  Portfolio</p>
    </div>
</div>
  )
}

export default Contact
