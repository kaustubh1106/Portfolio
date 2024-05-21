import React, { useState, useEffect } from 'react'
import githublink from "../../asset/link.svg"
import playButton from "../../asset/play.svg"
import projectjson from "./project.json"
import expjson from "./experience.json"
import "./all.css"
const ALL = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    // Logic for changing the active state
    const [activeTab, setActiveTab] = useState('all');
    const [currTabProject, setcurrTabProject] = useState([])

    const currproject = () => {
        if (activeTab === 'all') { setcurrTabProject(projectjson) }
        else {
            const projects = []
            projectjson.forEach((project) => {
                if (project.category === activeTab || project.category === "both") {
                    projects.push(project)
                }
            })
            setcurrTabProject(projects)
        }
        console.log(currTabProject)
    }


    const handlePlayPause = () => {
        const audio = new Audio("/Users/miteshsingla/Documents/portfolio/public/audio.mp3");
        setIsPlaying(prevState => !prevState);
        if (!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    // Update progress bar
    useEffect(() => {
        currproject()
        //     const bar = document.querySelector("#file");
        //     const audio = new Audio('music.mp3');

        //     const updateProgressBar = () => {
        //         const progress = Math.floor((audio.currentTime / audio.duration) * 100);
        //         if (!isNaN(progress) && isFinite(progress)) {
        //             bar.value = progress;
        //         } else {
        //             // Handle non-finite progress values
        //             console.error("Progress value is not finite.");
        //         }
        //     };

        //     const interval = setInterval(updateProgressBar, 1000);

        //     return () => clearInterval(interval);
        // }
    }, [activeTab]);


    return (
        <div id="projects" className="section-one">
            <div className="containere">
                <div className="item item1">
                    <div className="item1container">
                        <h2 className="Projects">Projects</h2>
                    </div>
                    <div className="selection">
                        <div className={`stream ${activeTab === "all" ? "exp-active" : "exp-nonactive"}`} onClick={() => {
                            setActiveTab('all')
                        }}>
                            <p className="UI streamcontent">All</p>
                        </div>
                        <div className={`stream ${activeTab === "blockchain" ? "exp-active" : "exp-nonactive"}`} onClick={() => {
                            setActiveTab('blockchain')
                        }}>
                            <p className="android streamcontent">Blockchain</p>
                        </div>
                        <div className={`stream ${activeTab === "web" ? "exp-active" : "exp-nonactive"}`} onClick={() => {
                            setActiveTab('web')
                        }}>
                            <p className="UI streamcontent">Web</p>
                        </div>
                    </div>
                    {
                        currTabProject.map((project) => (
                            <div className="exp-card ">

                                <p className="projectname">{project.name}</p>
                                <p className="timing">{project.tech}</p>
                                <p className="ghub">
                                    <img src={githublink} className="fa-solid fa-link"></img>Github Link
                                </p>

                            </div>
                        ))
                    }

                </div>

                <div className="item item2">
                    {/* handle description and data here */}
                </div>


                {/* ===============================> experience and internship=============> */}
                <div className="item3">
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
                                <p className="song_name">Hook Raja Ji</p>
                                <progress id="file" value="32" max="100">
                                    32%
                                </progress>
                                <br />
                                <img src={playButton} className='fa-solid fa-play musicbutton' onClick={handlePlayPause}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link
//             href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
//             rel="stylesheet"
//         />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//         <link
//             href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
//             rel="stylesheet"
//         />
//         <script src="https://kit.fontawesome.com/0fc8787d5f.js" crossorigin="anonymous"></script>
//         <link rel="stylesheet" href="index.css" />
//     </head>
//     <body>

//         {/* Script tags */}
//         <script src="index.js"></script>
//     </body>
// </html>
export default ALL
