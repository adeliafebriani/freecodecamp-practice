import React from 'react';
import './Home.css';

import { MdDevices, MdCalculate } from "react-icons/md";
import { FaJs, FaServer, FaReact, FaPython, FaFileCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";
import { VscGraphLine } from "react-icons/vsc";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { SiVisualstudio } from "react-icons/si";
import { GrVirtualMachine } from "react-icons/gr";
import { SiTheodinproject, SiMoleculer } from "react-icons/si";
import { GiGraduateCap } from "react-icons/gi";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const Home = () => {
    return (
        <div className="home">
            <h1>Learn to code - for free.</h1>
            <h1>Build projects.</h1>
            <h1>Earn certifications.</h1>
            <p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
            
            <div className="brand">
                <img src="apple.png" alt="apple" />
                <img src="google.png" alt="google" />
                <img src="microsoft.png" alt="microsoft" />
                <img src="spotify.png" alt="spotify" />
                <img src="amazon.png" alt="amazon" />
            </div>
            
            <button>Get started (it's free)</button>

            <div className="student">
                <img src="student.png" alt="student" />
                <p>freeCodeCamp students at a local study group in South Korea.</p>
            </div>

            <div className="middle">
                <h2>As seen in:</h2>

                <div className="image">
                    <img src="wired.png" alt="wired" />
                    <img src="businessinsider.png" alt="business insider" />
                    <img src="inc.png" alt="inc" />
                    <img src="lifehacker.png" alt="Lifehacker" />
                    <img src="time.png" alt="time" />
                    <img src="quartz.png" alt="quartz" />
                    <img src="usa today.png" alt="usa today" />
                    <img src="tnyt.png" alt="The New York Times" />
                    <img src="bbc.png" alt="bbc" />
                </div>
            </div>
            
            <h3>Here is what our alumni say about freeCodeCamp:</h3>
            <div className="alumni">    
                <div className="box">
                    <img src="shawn.png" alt="shawn" />
                    <div className="info">
                        <p><b>Shawn Wang</b> in Singapore</p>
                        <p>Software Engineer at <b>Amazon</b></p>
                        <p>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <b>freeCodeCamp changed my life.</b>"</p>
                    </div>
                </div>

                <div className="box">
                <img src="sarah.png" alt="sarah" />
                    <div className="info">
                        <p><b>Sarah Chima</b> in Nigeria</p>
                        <p>Software Engineer at <b>ChatDesk</b></p>
                        <p>"<b>freeCodeCamp was the gateway to my career</b> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company." </p>
                    </div>
                </div>
                
                <div className="box">
                <img src="emma.png" alt="emma" />
                    <div className="info">
                        <p><b>Emma Bostian</b> in Sweden</p>
                        <p>Software Engineer at <b>Spotify</b></p>
                        <p>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <b>freeCodeCamp gave me the skills</b> and confidence I needed to land my dream job as a software engineer at Spotify."</p>
                    </div>
                </div>

                <button>Get started (it's free)</button>
            </div>

            <h3>Earn free verified certifications with freeCodeCamp's core curriculum:</h3>
            <div className="core-curiculum">
                <div className="cocuriculum">
                    <div className="number">1</div>
                    <div className="certification">
                        <MdDevices className="icon" />
                        <div className="name">Responsive Wed Design Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">2</div>
                    <div className="certification">
                        <FaJs className="icon" />
                        <div className="name">JavaScript Algorithms and Data Structures (Beta) Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">3</div>
                    <div className="certification">
                        <FaReact className="icon" />
                        <div className="name">Front End Development Libraries Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">4</div>
                    <div className="certification">
                        <SiVisualstudio className="icon" />
                        <div className="name">Data Visualization Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>
                
                <div className="cocuriculum">
                    <div className="number">5</div>
                    <div className="certification">
                        <FaDatabase className="icon" />
                        <div className="name">Relational Database Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">6</div>
                    <div className="certification">
                        <FaServer className="icon" />
                        <div className="name">Back End Development and APIs Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">7</div>
                    <div className="certification">
                        <LuClipboardCheck className="icon" />
                        <div className="name">Quality Assurance Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">8</div>
                    <div className="certification">
                        <FaPython className="icon" />
                        <div className="name">Scientific Computing with Python(Beta) Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">9</div>
                    <div className="certification">
                        <VscGraphLine className="icon" />
                        <div className="name">Data Analysis with Python Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="cocuriculum">
                    <div className="number">10</div>
                    <div className="certification">
                        <IoShieldCheckmarkSharp className="icon" />
                        <div className="name">Information Security Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>
                
                <div className="cocuriculum">
                    <div className="number">11</div>
                    <div className="certification">
                        <GrVirtualMachine className="icon" />
                        <div className="name">Machine Learning with Python Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>
                
                <div className="cocuriculum">
                    <div className="number">12</div>
                    <div className="certification">
                        <MdCalculate className="icon" />
                        <div className="name">College Algebra with Python Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>
            </div>            

                <h3>Learn English for Developer</h3>
                <div className="other-curiculum">
                    <div className="certification">
                        <RiEnglishInput className="icon" />
                        <div className="name">A2 English for Developers (Beta) Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <h3>Earn free professional certifications</h3>
                <div className="other-curiculum">
                    <div className="certification">
                        <TfiMicrosoftAlt className="icon" />
                        <div className="name">(New) Foundational c# with Microsoft Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>              

                <h3>Prepare for the developer interview job search:</h3>
                <div className="other-curiculum">
                    <div className="certification">
                        <SiTheodinproject className="icon" />
                        <div className="name">The Odin Project - freeCodeCamp Remix (Beta)</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="other-curiculum">
                    <div className="certification">
                        <SiMoleculer className="icon" />
                        <div className="name">Coding Interview Prep</div>
                        <div className="arrow">»</div>
                    </div>

                    </div>

                <div className="other-curiculum">
                    <div className="certification">
                        <GiGraduateCap className="icon" />
                        <div className="name">Project Euler</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="other-curiculum">
                    <div className="certification">
                        <FaFileCode className="icon" />
                        <div className="name">Rosetta Code</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <h3>Explore our Legacy Curriculum:</h3>
                <div className="other-curiculum">
                    <div className="certification">
                        <MdDevices className="icon" />
                        <div className="name">Legacy Responsive Web Design Challenges</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="other-curiculum">
                    <div className="certification">
                        <FaJs className="icon" />
                        <div className="name">Legacy JavaScript Algorithms and Data Structures Certification</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

                <div className="other-curiculum">
                    <div className="certification">
                        <FaPython className="icon" />
                        <div className="name">Legacy Python for Everybody</div>
                        <div className="arrow">»</div>
                    </div>
                </div>

            <button>Get Started (it's free)</button>

            <h3>Frequently Asked Questions:</h3>
            <div className="FaQ">
                <h4>What exactly is freeCodeCamp?</h4>
                <p>freeCodeCamp is a community of people from all around the world who are learning to code together. We're a 501(c)(3) public charity.</p>
                <h4>How will freeCodeCamp help me learn to code?</h4>
                <p>You will learn to code by building dozens of projects, step-by-step, right in your browser, code editor, or mobile app.</p>
                <p>You will also earn free verified certifications along the way.</p>
                <h4>Is freeCodeCamp really free?</h4>
                <p>Yes. Every aspect of freeCodeCamp is 100% free. The courses, the projects, and even the certifications.</p>
                <h4>Can freeCodeCamp help me get a job as a software developer?</h4>
                <p>Yes. Every year, thousands of people who join the freeCodeCamp community get their first software developer job.</p>
                <h4>What skills will I learn?</h4>
                <p>You will learn the skills most developers use on the job: HTML, CSS, JavaScript, Python, Linux, Git, and SQL, and more. You'll also learn how to use powerful libraries for web development, mobile app development, data science, and artificial intelligence.</p>
                <h4>How long does it take to learn all this?</h4>
                <p>freeCodeCamp is self-paced. Realistically, it may take several years of practicing coding to learn these skills well enough to get a job as a software engineer. Don't quit school or your day job until you feel ready.</p>
                <h4>How do I get started?</h4>
                <p>If you're a beginner, you should start at the beginning of the freeCodeCamp core curriculum. If you're more advanced, we still recommend starting at the beginning, but you can skip to whatever area you wish.</p>
                <h4>How do I earn the free verified certifications?</h4>
                <p>For each certification, you need to build its 5 certification projects, and get all of the project tests to pass to be able to claim your certification.</p>
                <h4>I don't see [name of tool] in the freeCodeCamp core curriculum.</h4>
                <p>Aside from the freeCodeCamp core curriculum, We have thousands of free, full-length books, courses, and programming tutorials. We almost certainly teach whatever programming tools you want to learn. Just use the search bar.</p>
                <h4>Happy coding!</h4>
            </div>

            <button>Get Started (it's free)</button>
        </div>  
    );
};

export default Home;