import React from 'react'
import "./SkillBar.css"
function SkillBar({skill}) {
    // console.log("yehh hai skill vala pageha ")
    // const imagePath = require(`${skill.path}`).default;
    console.log(skill[0])
  return (
    <div className='skillBar'>
      <div className="skillNames">
        <div className="skillName">{skill.name}</div>
        <span className="skillTotal"><span className="skillProgress" style={{ width : `${skill.percent}%` }}></span></span>
      </div>
    </div>
  )
}

export default SkillBar
