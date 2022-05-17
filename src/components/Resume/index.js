import React from "react";
import resume from '../../assets/Resume_Thisara.pdf'

function Resume() {
    return (
        <div id="Resume" className="my-2">
            <h1>Resume</h1>

            <p className="my-4">Download my <a target='_blank' rel='noreferrer' href={resume}>resume</a></p>

            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>React</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            <h3>Testing</h3>
            <ul>
                <li>Jest</li>
                <li>Insomnia</li>                
            </ul>
        </div>
    )
}

export default Resume;