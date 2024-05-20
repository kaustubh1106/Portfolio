import React from 'react'
import "./Projects.css"

import ProjectCards from './ProjectCard.jsx'
const Projects = () => {
    return (
        <section id="projects">
            <div className="projectDetail">
                <span className="project-look-at-my-pro">Look at my<br/> <span className="projects-pro">Projects</span></span>
                <div className="projects-domain">
                    <div className="desktopMenu projects-domain-btn">
                       <button className='ptojects-toggle-button'>Blockchain </button>
                       <button className='ptojects-toggle-button'>Web </button>
                    </div>
                </div>
            </div>
            <div className="project-glass">
                {/* map karna hai */}
                <ProjectCards />
            </div>
        </section>
    )
}

export default Projects
