import React, { useState, useEffect,useCallback } from 'react'
import githublink from "../../asset/link.svg"

import projectjson from "./project.json"
import expjson from "./experience.json"
import "./all.css"

import song from "./song.mp3"

const ALL = () => {

    // Logic for changing the active state
    const [activeTab, setActiveTab] = useState('all');
    const [currTabProject, setcurrTabProject] = useState([])
    // const [songTime, setsongTime] = useState("46")
    const [audio, setaudio] = useState()
    const setsudioelement = async ()=>{
        const _audio = new Audio(song)
        setaudio(_audio)
    }
    const currproject = useCallback(() => {
        if (activeTab === 'all') {
            setcurrTabProject(projectjson);
        } else {
            const projects = projectjson.filter((project) =>
                project.category === activeTab || project.category === "both"
            );
            setcurrTabProject(projects);
        }
        console.log(currTabProject);
    }, [activeTab, currTabProject]);

    const handleplay =async ()=>{
        const progressBar = document.getElementById("exp-song-progress")
        const icon = document.querySelector(".fa-regular")
        const progress = (46/audio.duration)*100
        progressBar.setAttribute("value",progress)
        if(audio.paused ){
            icon.classList.remove('fa-circle-play')
            icon.classList.add("fa-circle-pause")
            audio.currentTime = 46
            audio.play()
        }
        else{
            audio.pause();
            icon.classList.remove('fa-circle-pause')
            icon.classList.add("fa-circle-play")
        }
    }

    // Update progress bar
    useEffect(() => {
        currproject()
    }, [currproject]);
    useEffect(() => {
        setsudioelement()
    }, [])
    

    return (
        <div id="projects" className="section-one">
            <div className="containere">
                <div className="item item1">
                    <div className="item1container">
                        <h2 className="Projects">Projects</h2>
                    </div>
                    <div className="selection">
                        <div className={`exp-choice ${activeTab === "all" ? "exp-active" : "exp-nonactive"}`} onClick={() => {
                            setActiveTab('all')
                        }}>
                            <p className=" exp-choice-name">All</p>
                        </div>
                        <div className={`exp-choice ${activeTab === "blockchain" ? "exp-active" : "exp-nonactive"}`} onClick={() => {
                            setActiveTab('blockchain')
                        }}>
                            <p className=" exp-choice-name">Blockchain</p>
                        </div>
                        <div className={`exp-choice ${activeTab === "web" ? "exp-active" : "exp-nonactive"}`} onClick={() => {
                            setActiveTab('web')
                        }}>
                            <p className=" exp-choice-name">Web</p>
                        </div>
                    </div>
                    {
                        currTabProject.map((project) => (
                            <div className="exp-card ">

                                <p className="projectname">{project.name}</p>
                                <p className="timing">{project.tech}</p>
                                <p className="ghub">
                                    <img src={githublink} className="fa-solid fa-link" alt=""></img><a href={`${project.demo}` } >Github Link </a>
                                </p>

                            </div>
                        ))
                    }

                </div>

                <div className="item item2">
                    {/* handle description and data here */}
                </div>


                {/* ===============================> experience and internship=============> */}
                <div className="item item3">
                    <div className="item1container">
                        <h2 className="Projects">Work Experience</h2>
                    </div>
                    <div className="item3-abs">
                        {
                            expjson.map((exp) => (
                                <div className="exp-card exp-card-timeline">
                                    <div className="dotted-line"></div>
                                    <div className="projectcontent ">
                                        <p className="projectname">{exp.name}</p>
                                        <p className="timing">{exp.role}</p>
                                        <p className="ghub">{exp.duration} months</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* ========================================================================= */}


                <div className="item item4 ">
                    <p className="exp-education workexperience">Education</p>
                    <div className="exp-combine">
                        <p className="timing">2021-25</p>
                        <p className="projectname degree">Bachelor's of Technology(CSE)</p>
                        <p className="exp-college">Indian Institute of Information Technology Una</p>
                        <p className="cgpa">CGPA: 7.25</p>
                    </div>
                </div>

                <div className="item item5">
                    <div className="outer">
                        <div className="exp-inner">
                            <p className="exp-education workexperience track">Current Fav. track</p>
                            <div className="music_player">
                                <p className="song_name">Hai junoon</p>
                                <input type="range"  min = "0" max="100" id="exp-song-progress"/>
                                
                                <br />
                                <i className="fa-regular fa-circle-play fa-2xl" onClick={handleplay} ></i>
                                {/* <i className="fa-thin fa-circle-play" onClick={handleplay}></i> */}
                                {/* <img src={playButton} className='fa-solid fa-play musicbutton'  alt=""></img> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ALL
