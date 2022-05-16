import React from "react";

function Project(props) {
    const {
        projects,
        handleClick
    } = props;
    
    return (
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
    )
}

export default Project;