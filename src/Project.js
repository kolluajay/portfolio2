import React from 'react'
import { FaAppStore, FaCode, FaCropAlt } from 'react-icons/fa'

const Project = () => {
  return (
    <div id="services">
    <div class="container">
        <h1 class="sub-title">Projects</h1>
        <div class="services-list">
            <div>
                <i class="fas fa-code"></i>
                <FaCode style={{fontSize: "100px"}}  className='fas-fa-code'/>
                <h2>Crypto Price Tracker</h2>
                <p> 
                    Enhanced a responsive and dynamic cryptocurrency tracking web applica-tion using React.js and integrated
                    it with the Coin Gecko API to fetch and display real-time market data for thousands of cryptocurrencies.
                    The application allows users to view key information such as current prices, market capitalization, 24-hour
                    changes, and volume
                </p>
                    <a href="#">Tech Stack:HTML, CSS, React JS, Chart JS </a>
            </div>
            <div>
                <i class="fas fa-crop-alt"></i>
                <FaCropAlt style={{fontSize: "100px"}}/>
                <h2>Weather Prediction</h2>
                <p>Integrated the OpenWeather API to fetch real-time weather data, including temperature,
                    humidity, and forecasts. Implemented responsive UI for seamless user experience across devices. Optimized
                    API requests for efficient data retrieval and caching</p>
                    <a href="#">Tech Stack: React, Node.js, Express, Open Weather API</a>
            </div>
            <div>
                <i class="fab fa-app-store"></i>
                <FaAppStore style={{fontSize: "100px"}}/>
                <h2>Currency Converter</h2>
                <p>A sleek and intuitive currency converter that allows users to quickly convert between major world currencies in real time. Built with a focus on responsive design and user experience, this app fetches live exchange rates from an external API and updates conversions instantly as the user inputs values.
                   </p>
                    <a href="#"> Tech Stack: HTML, CSS, JavaScript, API integration</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Project
