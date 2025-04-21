import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  return (
    <div id="portfolio">
    <div class="container">
        <h1 class="sub-title">Certifications</h1>
        <div class="work-list">
            <div class="work">
                <img src="/images/cipherschools.png" alt="" />
                <div class="layer">
                    <h3>Fullstack development using MERN</h3>
                    <p>We learned about frontend and backend development using MERN<br/>
                        -Cipher Schools
                    </p>
                    <a href="#">
                    <FaExternalLinkAlt style={{fontSize: '20px'}}/>
                    </a>
                </div>
            </div>
            <div class="work">
                <img src="/images/nptel.png" alt="" />
                <div class="layer">
                    <h3>Cloud Computing</h3>
                    <p>We learned about fundamentals of cloud computing and security challenges with cloud management issues<br />
                        -NPTEL
                    </p>
                    <a href="#"><FaExternalLinkAlt style={{fontSize: '20px'}}/></a>
                </div>
            </div>
            <div class="work">
                <img src="/images/linkedin.png" alt="" />
                <div class="layer">
                    <h3>Data Visualization</h3>
                    <p>We learned about data visualization using the Tableau and how data will be represented<br/>
                        -LinkedIn Learning
                    </p>
                    <a href="#"><FaExternalLinkAlt style={{fontSize: '20px'}}/></a>
                </div>
            </div>
        </div>
        <a href="#" class="btn">See more</a>
    </div>
</div>
  )
}

export default Certifications
