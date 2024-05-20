import React from 'react'
import "./ProjectInfo.css"
const ProjectInfo = ( { projectdetail } ) => {
  return (
    <div className="project-info">
        <div className="project-info-relative">

            <div className="project-info-name-links">
                <h3>{projectdetail.name}</h3><div className="project-info-icondiv"><i class="fa-brands fa-github fa-2xl"></i><i class="fa-solid fa-arrow-up-right-from-square fa-2xl"></i></div>
            </div>
            <div className="project-info-desc-prob">
                <span className="project-info-span-prob">Problems Solved:</span><p>{projectdetail.problem}</p><br/>
                <span className="project-info-span-desc">Description:</span><p>{projectdetail.desc}</p><br/>
                <span className="project-info-span-tech">Tech Stack:</span><p>{projectdetail.tech}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjectInfo
