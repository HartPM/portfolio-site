import './Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Resume from './images/Resume.pdf'
import icon from './images/resume_logo.png'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gttkq29', 'template_q07d5b6', form.current, 'EO0E6VCtlDny0EnU8')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <div className='contact' id='contact'>
            <div className='container'>
                <div className='col-1'>
                    <a href={Resume} target='_blank' rel='noopener noreferrer' className='btn'>
                        <img src={icon} alt='resume icon' />
                    </a>
                    <a href={Resume} target='_blank' rel='noopener noreferrer' className='btn'>
                        <p>View Resume</p>
                    </a>
                </div>
                <div className='col-2'>
                    <p>Get in touch</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Your full name" required />
                        <input type="email" name="user_email" placeholder="Your email address" required />
                        <textarea name="user_message" rows="7" placeholder="Your message" required />
                        <button type="submit" className="button">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;