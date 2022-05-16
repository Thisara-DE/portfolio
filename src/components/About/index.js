import React from "react";
import avatar from "../../assets/avatar.png"

function About() {

    return (
        <section id="About me" className="my-2 py-4 aboutSection">
            <h1 className="my-2" id="about">About me</h1>
            <img className="avatar my-2" src={avatar} alt="profilePic"></img>
            <p className="my-3 aboutPara">
                I am an Agile Product Owner and a Full-stack Developer with more than 8 years of experience with a proven ability in designing and improving System Architecture in various frameworks such as Waterfall, Scrum, and SAFe. I have experience working in Online/Retail banking, Retail, and Insurance domains. I can collaborate with senior leadership and software development teams to identify needs, define strategy, and guide the delivery of tools, systems, and interfaces.
            </p>
            <p className="my-4 aboutPara">
                I have experience working on numerous projects and delivering high quality software in all of them. In-depth knowledge of System Architecture, Web-services, Microservices, Data mapping, Test Cases, and APIs. Knowledge of Service Oriented Architecture and Microservices Architecture.
            </p>
            <div>
                <h3 className="my-2">Education</h3>
                <ul>
                    <li className="my-2">Full Stack Web Development Certification - University of Minnesota (USA)</li>
                    <li className="my-2">Robotic Process Automation Business Analyst Certification - UiPath-AutomationAnywhere</li>                    
                    <li className="my-2">MSc in Information Assurance - St. Cloud State University (USA)</li>
                    <li className="my-2">Bachelor of Business Management - University of Kelaniya (Sri Lanka)</li>
                </ul>
            </div>


        </section>
    )
}

export default About;