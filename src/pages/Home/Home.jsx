import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div>
     <section id="topSection" class="topPadding">
        <div class="container">
            <div class="sectionWrapper">
                <div class="singleBox">
                    <h2 class="welcmTitle">Welcome to Sotf Online</h2>
                    <p class="wlcmDescription">A business model in which a distributor network is needed to build the business.</p>
                    <Link class="wlcmBtn" to="/login">Get Started</Link>
                </div>
                <div class="singleBox">
                    <img className='wlcmImg' src="https://eeshoponline.com/public/fontend/assets/img/hero-img.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
    <section id="middleSection">
        <div class="container">
            <h1 class="missionTitle">Mission And Vision</h1>
            <div class="sectionWrapper">
                
                <div class="middleSingleBox">
                    <i class="fas fa-tv"></i>
                    <h1>Our Mission</h1>
                    <p>Sotf Online Has Committed To Work For Leaders Who Are Not Yet Successful Still They Are In Search Of Best Opportunity And Genuine Organization.</p>
                </div>
                <div class="middleSingleBox">
                    <i class="fab fa-envira"></i>
                    <h1>Our Vision</h1>
                    <p>Sotf Online Has Set Up And Designed By A Team Of Professional Who Have Been Working In Sales & Marketing For Last Ten Years . We Believe To Provide Products , Services And Best Platforms To Our Users To Create An Opportunity</p>
                </div>
                <div class="middleSingleBox">
                    <i class="far fa-sticky-note"></i>
                    <h1>Our Values</h1>
                    <p>We will engage more and more people in our business and continue to expand in domestic and international markets.</p>
                </div>
                
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home