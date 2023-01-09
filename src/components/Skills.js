import React from 'react';
import { 
    ReactOriginalIcon, 
    RubyOriginalIcon,
    RailsOriginalWordmarkIcon,
    JavascriptOriginalIcon,
    PythonOriginalIcon,
    GitOriginalIcon,
    GithubOriginalIcon,
    PostgresqlOriginalIcon,
    Html5OriginalIcon,
    Css3OriginalIcon,
    TypescriptOriginalIcon,
    NestjsPlainIcon,
    RaspberrypiLineIcon,
    DockerOriginalIcon,
    MaterialuiOriginalIcon,
    DjangoOriginalIcon,
    GraphqlPlainWordmarkIcon,
    SwiftOriginalIcon
} from 'react-devicons';
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills' id='skills'>
            <div className='content'>
                <h1>Skills</h1>
                <br />
                <div>
                    <JavascriptOriginalIcon className='svg' size="100"/>
                    <TypescriptOriginalIcon className='svg' size="100"/>
                    <ReactOriginalIcon className='svg' size="100"/>
                    <MaterialuiOriginalIcon className='svg' size="100"/>
                    <RubyOriginalIcon className='svg' size="100"/>
                    <RailsOriginalWordmarkIcon className='svg' size="100"/>
                    <PythonOriginalIcon className='svg' size="100"/>
                    <GitOriginalIcon className='svg' size="100"/>
                    <GithubOriginalIcon className='svg' color="white" size="100"/>
                    <PostgresqlOriginalIcon className='svg' size="100"/>
                    <Html5OriginalIcon className='svg' size="100"/>
                    <Css3OriginalIcon className='svg' size="100"/>
                </div>
                <br />
                <br />
                <h1>Currently Learning</h1>
                <br />
                <div className='svg'>
                    <DockerOriginalIcon className='svg' size="100"/>
                    <NestjsPlainIcon className='svg' size="100"/>      
                    <SwiftOriginalIcon className='svg' size="100"/>              
                    <DjangoOriginalIcon className='svg' size="100"/>
                    <GraphqlPlainWordmarkIcon className='svg' size="100"/>
                    <RaspberrypiLineIcon className='svg' size="100"/>
                </div>
                <br />
                <a href='https://github.com/HartPM'>
                    <button className='button'>Collaborate on GitHub</button>
                </a>
            </div>
        </div>
    )
}

export default Skills;
