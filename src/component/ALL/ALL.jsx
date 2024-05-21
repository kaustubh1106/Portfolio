import React, { useState, useEffect,useCallback } from 'react'
import githublink from "../../asset/link.svg"
import playButton from "../../asset/play.svg"
import projectjson from "./project.json"
import expjson from "./experience.json"
import "./all.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from "./song.mp3"

const ALL = () => {

    // Logic for changing the active state
    const [activeTab, setActiveTab] = useState('all');
    const [currTabProject, setcurrTabProject] = useState([])

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
        const playSide = document.querySelector(".rhap_play-pause-button")
        playSide.click();

        console.log(playSide)
    }

    // Update progress bar
    useEffect(() => {
        currproject()
    }, [currproject]);


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
                                    <img src={githublink} className="fa-solid fa-link" alt=""></img>Github Link
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
                    <p className="education workexperience">Education</p>
                    <div className="combine">
                        <p className="timing">2021-25</p>
                        <p className="projectname degree">Bachelor's of Technology(CSE)</p>
                        <p className="college">Indian Institute of Information Technology Una</p>
                        <p className="cgpa">CGPA: 7.25</p>
                    </div>
                </div>

                <div className="item item5">
                    <div className="outer">
                        <div className="inner">
                            <p className="education workexperience track">Current Fav. track</p>
                            <div className="music_player">
                                <p className="song_name">Hai junoon</p>
                                <progress id="file" value="32" max="100">
                                    32%
                                </progress>
                                <br />
                                <img src={playButton} className='fa-solid fa-play musicbutton' onClick={handleplay} alt=""></img>
                                <div className="audio-exp">
                                    <AudioPlayer
                                        autoPlay
                                        src={song}
                                        onPlay={e => console.log("onPlay")}
                                    // other props here
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ALL
