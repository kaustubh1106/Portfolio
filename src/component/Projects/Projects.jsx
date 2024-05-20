import React from 'react'
import "./Projects.css"
import Projectsjson from "./project.json"
import ProjectCards from './ProjectCard.jsx'
const Projects = () => {
    return (
        <section id="projects">
            <div className="projectDetail">
                <span className="project-look-at-my-pro">Look at my<br /> <span className="projects-pro">Projects</span></span>
                <div className="projects-domain">
                    <div className="desktopMenu projects-domain-btn">
                        <button className='ptojects-toggle-button'>Blockchain </button>
                        <button className='ptojects-toggle-button'>Web </button>
                    </div>
                </div>
            </div>
            <div className="project-glass-outer">
                <div className="project-info">{/*is div me project ka desc aur info lagani h*/}</div>
                <div className="project-glass">

                    {

                        Projectsjson.map((project1) => (

                            <ProjectCards project={project1} />

                        ))
                    }
                </div>

            </div>


        </section>
    )
}

export default Projects
