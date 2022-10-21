import React from 'react'
import patrick from './images/patrick.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='col-1'>
                    <img id='profile-img' src={patrick} alt='patrick' />
                </div>
                <div className='col-2'>
                    <h2>Patrick Hart</h2>
                    <span className='line'></span>
                    <p>Full-Stack Software Engineer</p>
                    <p>Building React + Ruby on Rails applications</p>
                    <a href='https://www.linkedin.com/in/patrick-hart-m/'>
                        <button className='button'>Connect on Linkedin</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
