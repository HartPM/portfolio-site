import React from 'react'
import './Demo.css'
import ReactPlayer from "react-player"

const Demo = () => {

    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>Check out my recent project demo</p>
                    <p>Research Link</p>
                    <p>An app to connect scientific research groups with volunteer study participants. Built on a React + Rails stack.</p>
                    <a href='https://github.com/HartPM/research-link'>
                        <button className='button'>View Source Code</button>
                    </a>
                </div>
                <div className='col-2'>
                    <ReactPlayer url='https://vimeo.com/733331792' />
                </div>
            </div>
        </div>
    )
}

export default Demo
