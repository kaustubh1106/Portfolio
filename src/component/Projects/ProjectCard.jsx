import React from 'react'
import "./ProjectCards.css"
import gym from "../../asset/image.png"
import { Link } from 'react-scroll'
const ProjectCard = ({project}) => {
    
    
  return (
    <div>
       <div className="projects-card " style={{ width: "18rem" }}>
                <img src={gym} className="projects-card-img-top" alt="..." />
                <div className="projects-card-body">
                    <h3 className="projects-card-title"><Link href=''>{project.name}</Link></h3>
                    <p className="projects-card-text">
                        <span className="project-readmore">
                        <Link href="#" className="projects-btn projects-btn-primary">know more..</Link></span>
                    </p>
                    
                </div>
            </div>
    </div>
  )
}

export default ProjectCard
