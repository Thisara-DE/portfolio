import React from "react";


function Portfolio() {
    // eslint-disable-next-line no-unused-vars
    const projects = [
        {
            name: 'Deep thoughts',
            github: 'https://github.com/Thisara-DE/deep-thoughts',
            prod: 'https://deep-----thoughts.herokuapp.com/',
            img: '../../assets/project-cover/1.jpg'
        },
        {
            name: 'Gameporium',
            github: 'https://github.com/Thisara-DE/Gameporium',
            prod: 'https://morning-lowlands-91275.herokuapp.com/',
            img: '../../assets/project-cover/2.jpg'
        },
        {
            name: 'dateLime',
            github: 'https://github.com/Thisara-DE/dateLime',
            prod: 'https://thisara-de.github.io/dateLime/',
            img: '../../assets/project-cover/3.jpg'
        },
        {
            name: 'Tech Chronicle',
            github: 'https://github.com/Thisara-DE/tech-chronicle',
            prod: 'https://tech-chronicle.herokuapp.com/',
            img: '../../assets/project-cover/4.jpg'
        },
        {
            name: 'Employee CMS',
            github: 'https://github.com/Thisara-DE/employee-tracker',
            prod: '',
            img: '../../assets/project-cover/5.jpg'
        },
        {
            name: 'Professional README Generator',
            github: 'https://github.com/Thisara-DE/professional-README-generator',
            prod: '',
            img: '../../assets/project-cover/6.jpg'
        }
    ]

    return (
        <div>
            <h1>Portfolio</h1>

            <div className="card-container">

            <img src={`../../assets/project-cover/0.jpg`} alt="projectPic"></img>
            <img src={`../../assets/project-cover/1.jpg`} alt="projectPic"></img>
            <img src={`../../assets/project-cover/2.jpg`} alt="projectPic"></img>
            <img src={`../../assets/project-cover/3.jpg`} alt="projectPic"></img>
            <img src={`../../assets/project-cover/4.jpg`} alt="projectPic"></img>
            <img src={`../../assets/project-cover/5.jpg`} alt="projectPic"></img>
                


                {/* {projects.map((project, i) => (
                    <div className="card">
                        <img src={project[i].img} alt={`project-${project[i].name}`}/>
                    </div>
                ))} */}
                

            </div>
        </div>
    )
}

export default Portfolio;