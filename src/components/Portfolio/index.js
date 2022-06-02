import React from "react";
import Project from "../Project";

function Portfolio() {
    // eslint-disable-next-line no-unused-vars
    const projects = [
        {
            name: 'Perspective-News',
            github: 'https://github.com/ItzGuled/perspective-news',
            prod: 'https://perspective-news.herokuapp.com/',            
            img: '../../assets/project-cover/6.jpg',
            tech: 'Node.js,React,Express,GraphQL'
        },
        {
            name: 'Deep thoughts',
            github: 'https://github.com/Thisara-DE/deep-thoughts',
            prod: 'https://deep-----thoughts.herokuapp.com/',
            img: '../../assets/project-cover/5.jpg',
            tech: 'React,Node.js,Express,GraphQL '
        },
        {
            name: 'Gameporium',
            github: 'https://github.com/Thisara-DE/Gameporium',
            prod: 'https://morning-lowlands-91275.herokuapp.com/',
            img: '../../assets/project-cover/4.jpg',
            tech: 'Handlebars.js,MySQL,Sequelize, Node.js, Express.js'
        },
        {
            name: 'Tech Chronicle',
            github: 'https://github.com/Thisara-DE/tech-chronicle',
            prod: 'https://tech-chronicle.herokuapp.com/',
            img: '../../assets/project-cover/3.jpg',
            tech: 'Handlebars.js,Node.js,Express.js, MySQL, Sequelize'
        },
        {
            name: 'dateLime',
            github: 'https://github.com/Thisara-DE/dateLime',
            prod: 'https://thisara-de.github.io/dateLime/',
            img: '../../assets/project-cover/2.jpg',
            tech: 'JavaScript,Bulma,APIs'
        },
        {
            name: 'Employee CMS',
            github: 'https://github.com/Thisara-DE/employee-tracker',            
            img: '../../assets/project-cover/1.jpg',
            tech: 'Node.js,Express.js,Inquirer,MySQL'
        },  
        {
            name: 'Professional README Generator',
            github: 'https://github.com/Thisara-DE/professional-README-generator',            
            img: '../../assets/project-cover/0.jpg',
            tech: 'Node.js'
        }        
    ]

    function handleClick(url) {
        window.open(url, '_blank');
    }

    return (
        <div id="Portfolio">
            <h1>Portfolio</h1>
            <Project projects={projects} handleClick={handleClick} />
        </div>
    )
}

export default Portfolio;