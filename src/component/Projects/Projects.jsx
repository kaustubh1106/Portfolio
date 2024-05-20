import React,{useState} from 'react'
import "./Projects.css"
import Projectsjson from "./project.json"
import ProjectCards from './ProjectCard.jsx'
import ProjectInfo from './ProjectInfo'
const Projects = () => {
    // activeProject konsa hai vo set karna hai click karne par
    const [activeProject, setactiveProject] = useState(0) 
    
    
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
                <ProjectInfo projectdetail={Projectsjson[activeProject]}/>
                <div className="project-glass">

                    {

                        Projectsjson.map((project1,index) => (
                            
                            <div 
                            className="projectcard"
                            onClick={()=>{
                                console.log(index)
                                setactiveProject(index)

                            }}>
                                <ProjectCards project={project1} index={index} acproject = {activeProject} />

                            </div>

                        ))
                    }
                </div>

            </div>


        </section>
    )
}

export default Projects
