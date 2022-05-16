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
            img: '../../assets/project-cover/5.jpg'
        },
        {
            name: 'Professional README Generator',
            github: 'https://github.com/Thisara-DE/professional-README-generator',            
            img: '../../assets/project-cover/6.jpg'
        }
    ]

    function handleClick(url) {
        window.open(url, '_blank')
        

    }

    return (
        <div id="Portfolio">
            <h1>Portfolio</h1>

            <div className="flex-row card-container">
                {projects.map((project, i) => (
                    <div className="mx-3 my-3 card-handler">
                        <img className="card" src={require(`../../assets/project-cover/${i}.png`)} alt={`projectPic ${i}.jpg`}></img>
                        <div className="pic-label">
                            {projects[i].prod ? (<button className="my-2" onClick={() => handleClick(projects[i].prod)}>{project.name}</button>) : 
                            (<button className="my-2">{`${project.name} - No UI`}</button>)} <br/>
                            <button onClick={() => handleClick(projects[i].github)}><i class="fa-brands fa-github fa-1x"></i>  GitHub</button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Portfolio;