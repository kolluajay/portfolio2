import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/images/photo.png" alt="Ajay's" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hi, I'm Ajay, a passionate Fullstack Developer dedicated to crafting visually stunning and highly
              responsive web experiences. I specialize in turning design concepts into interactive, user-friendly websites using modern web technologies 
              like HTML, CSS, JavaScript, and frameworks like React, Node and MongoDB.
            </p>

            <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Internship
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>

            <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
              {activeTab === "skills" && (
                <ul>
                  <li>
                    <span>Languages</span>
                    <ul>
                      <li>C++, Java, JavaScript</li>
                    </ul>
                  </li>
                  <li>
                    <span>Frameworks</span><br />HTML, CSS and React JS
                  </li>
                  <li>
                    <span>Tools/Platforms</span><br />Oracle, Tableau, Excel, LeetCode, VS Code
                  </li>
                  <li>
                    <span>Soft Skills</span><br />Problem-Solving, Time Management, Quick Learner
                  </li>
                </ul>
              )}
            </div>

            <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
              {activeTab === "experience" && (
                <ul>
                  <li>
                    <span>MERN stack</span><br />
                    ◦ Developed a strong understanding of frontend-backend integration.<br />
                    • Implemented backend connectivity to MongoDB for efficient data handling.
                  </li>
                  <li>
                    <span>Organization</span><br />Cipher Schools
                  </li>
                  <li>
                    <span>Tech Stack Used:</span><br />React JS, Node JS, MongoDB, HTML, CSS
                  </li>
                </ul>
              )}
            </div>

            <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
              {activeTab === "education" && (
                <ul>
                  <li>
                    <span>2019-2020</span><br />Ark Bird School<br />
                    Matriculation <b>Percentage:</b> 99%
                  </li>
                  <li>
                    <span>2020-2022</span><br />Sri Krishna Junior College<br />
                    Intermediate <b>Percentage:</b> 92%
                  </li>
                  <li>
                    <span>Since 2022</span><br />Lovely Professional University<br />
                    B.Tech in CSE <b>CGPA:</b> 7.32
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
