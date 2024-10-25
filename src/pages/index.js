import * as React from "react"
import Layout from "../components/layout"

import "../styles/homepage.css"
import "../styles/all.css"

import splash1 from "../images/homepage/splash1.jpg"
import splash2 from "../images/homepage/splash2.jpg"
import teampic from "../images/homepage/teampic.jpg"

// import webicon from "../images/subteam-icons/webteambordered.png"
// import mediaicon from "../images/subteam-icons/mediateambordered.png"
// import appicon from "../images/subteam-icons/appteambordered.png"
// import emtechicon from "../images/subteam-icons/emergingtechteambordered.png"

import Carousel from 'react-material-ui-carousel'
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoCard from "../components/infocard";

// This is the landing page where people go to when they first go to the website
// TODO: Dynamic sizing and make more mobile friendly

function IndexPage() {

    return (
      
      <Layout>
        {/**Content for the Carousel */}
        <div className="top top-text dim">
          <h1>Empathy Bytes</h1>

          {/**This is the animated arrows that scroll down the page when clicked */}
          <a href="#info" alt="arrows"> 
            <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
                <path className="a2" d="M0 20 L30 52 L60 20"></path>
                <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </a>

        </div>

        {/* This is the animated picture carousel in the background */}
        <div className="bottom">
          <Carousel
            interval={10000}
            animation={"slide"}
            duration={2000}
            indicators={false}>
            <img className="splash-image" src={splash1} alt="Hive"></img>
            <img className="splash-image" src={splash2} alt="Gatech Tower"></img>
          </Carousel>
        </div>

        {/** This is the main part of the landing page containing the picture and info card*/}
        <div id="info" className="info">
          <div className="info-wrapper">
              <div className="image">
                <img src={teampic} className="teampic" alt="EB Team"></img>
              </div>
              <div className="info-card">
                <InfoCard 
                  title="What Is Empathy Bytes?"
                  body="Empathy Bytes is a student run research project focused on creating immersive technology and media centered around empathy. 
                  We think outside traditional modes of communication and documentation to create radical and unique experiences. Our research 
                  currently focuses on identifying and presenting distinct communities connected to Georgia Tech."
                  link="/contact"
                  btnTitle="Learn More"
                />
              </div>
            </div>
          </div>
      </Layout>
    )

}

export default IndexPage;

export const Head = () => <title>Home Page</title>