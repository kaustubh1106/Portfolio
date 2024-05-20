import React, { useEffect } from 'react';
import './Skills.css';
import SkillBar from './SkillBar.jsx';
import skill from './skills.json';



const Skills = () => {

  const setPosition = () => {
    const container = document.querySelector(".skills-container")
    const skills = document.querySelectorAll(".skill-icon")
    const popover = document.querySelectorAll(".skill-bar-popover")

    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight


    const position = [];
    skills.forEach(icon => {

      const randX = Math.random() * (containerWidth - icon.offsetWidth)
      const randY = Math.random() * (containerHeight - icon.offsetHeight)
      icon.style.left = `${randX}px`
      icon.style.top = `${randY}px`
      position.push({ l: randX, t: randY })
    })
    popover.forEach((pop, index) => {
      pop.style.left = `${position[index].l + 68}px`
      pop.style.top = `${position[index].t}px`
    })
  }

  useEffect(() => {
    setPosition()
  }, [])
  return (
    <section id="skills">
       <span className="project-look-at-my-pro skills-tag">Explore my<br/> <span className="projects-pro skills-tag">Skills</span></span>
       <div className="skills">
      <div className="skills-random">

        <div className="skills-container " >
          <span class="cib--js skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[0]} /></div>
        </div>
        <div className="skills-container">
          <span class="simple-icons--rust skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[1]} /></div>
        </div>
        <div className="skills-container">
          <span class="file-icons--solidity skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[2]} /></div>
        </div>
        <div className="skills-container">

          <span class="file-icons--truffle skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[3]} /></div>
        </div>
        <div className="skills-container">

          <span class="bxs--file-html skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[4]} /></div>
        </div>
        <div className="skills-container">
          <span class="streamline--css-three-solid skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[5]} /></div>
        </div>
        <div className="skills-container">
          <span class="mdi--react skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[6]} /></div>
        </div>
        <div className="skills-container">
          <span class="fa-brands--node skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[7]} /></div>
        </div>
        <div className="skills-container">
          <span class="simple-icons--express skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[8]} /></div>
        </div>
        <div className="skills-container">
          <span class="simple-icons--mongodb skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[9]} /></div>
        </div>
        <div className="skills-container">
          <span class="ri--bootstrap-fill skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[10]} /></div>
        </div>
        <div className="skills-container">
          <span class="cib--postgresql skill-icon" data-aos="zoom"></span>
          <div className="skill-bar-popover"><SkillBar skill={skill[11]} /></div>
        </div>
      </div>
      <div className="paragraph">
      I am an intermediate professional with a growing skill set encompassing both technical and interpersonal expertise. <br/>My core competencies include a robust unsderstanding and expierience in Smart Contract development using Solidty and Rust and hands on expierience with blockchains like Ethereum, Steller, Telos.<br/> I have solid proficiency in software development, particularly in C++, JavaScript and database prefferably MongoDB, along with a good understanding of data structures and algorithms.<br/>  Additionally, I possess strong analytical and problem-solving abilities, enabling me to address various challenges effectively. My communication skills facilitate smooth collaboration across multidisciplinary teams, contributing to a productive and innovative work environment.<br/>Grab a coffee and hover over the icons to check my understanding in particular tech      </div>
    </div>
    </section>
  );
};

export default Skills;

