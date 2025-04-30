import "../styles/playground.css";
import QueryCard from "../components/queryCard";
import "../styles/about.css"

import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby";

import Grid from '@mui/material/Grid';
import task1vid from "../assets/task-1.mp4"
import task1img from "../images/playground/task-1.jpg"
import task2 from "../images/playground/task-2.jpg"
import task21 from "../images/playground/task-2-1.jpg"
import task3 from "../images/playground/task-3.jpg"
import confetti from "canvas-confetti"

function Playground({ data }) {
      const [visExample , setToggleExample] = useState(true)
      const [visF25 , setToggleF25] = useState(false)
    
      function toggleExample() {
        setToggleExample(true)
        setToggleF25(false)
      }
      function toggleF25() {
        setToggleExample(false)
        setToggleF25(true)
      }

     
        
      

      const handleConfetti = () => {
        confetti();
      }
     
      // Extract mediaAudio info from the query
      
      const mediaAudio = data.mediaAudioFile.path.alias;

      {/* Add your constant here for extracting your data from the query!*/}
    
    
      
    return (
        <Layout>
          <div>
            <div className="container-contact">
              
                <div className="headerStyles">
                    <h1>
                    <span className="centerStyles">Welcome to the Backend Playground!</span>
                    </h1>
                </div>
                <div className="headerStyles">
                    <h2>
                    <span className="leftAlignStyles">GraphQL Training</span>
                    </h2>
                    <h4>
                    <span className="leftAlignStyles"> An interactive training guide for learning about GraphQL queries.</span>
                    <span className="leftAlignStyles"> Note: You’ll push changes at the end of the training week so wait for instructions from your team lead!</span>
                    </h4>
                    <Grid xs={2} className="button-grid">
                      <a href="#task-1" className="noUnderline">
                        <h3 className="about-nav-text">Start</h3>
                      </a>
                    </Grid>
                </div>
                  
            </div>
            <div className="container"id="task-1">
              <div className="horizontal-div">

                <video width="320" height="240" controls>
                  <source src={task1vid} type="video/mp4"/>
                  
                  Your browser does not support the video tag.
                </video>
                <img className="example-img" src={task1img} alt="Code example"/>

              </div>
                
                <div className="headerStyles">
                    <h2>
                    <span className="leftAlignStyles">Task 1</span>
                    </h2>
                    <h4>
                    <span className="leftAlignStyles">Using the GraphiQL Explorer, create a query! Then, add it to the const query in the playground.js file. Try making a different one from the example video.</span>
                    <span className="leftAlignStyles">If you already did the GraphQL training, try using the query you made before.</span>
                    </h4>
                    <Grid xs={2} className="button-grid">
                      <a href="#task-2" className="noUnderline">
                        <h3 className="about-nav-text">Next</h3>
                      </a>
                    </Grid>
                </div>

            </div>

            <div className="container"id="task-2">
                <div className="horizonalStyle" >
                <img className="example-img" src={task2} alt="Code example"/>
                <img className="example-img" src={task21}alt="Dictionary output from GraphiQL" width="200" height="200"/>
                </div>
                <div className="headerStyles">
                    <h2>
                    <span className="leftAlignStyles">Task 2</span>
                    </h2>
                    <h4>
                    <span className="leftAlignStyles"> Now that you have your query, you'll notice in the GraphiQL Explorer that it will output a dictionary called "data". </span>
                    <span className="leftAlignStyles">Now, create a constant in the playground.js that accesses the dictionary data.</span>
                    <span className="leftAlignStyles">In the example query, the const mediaAudio holds the path alias to the file.</span>
                    </h4>
                    <Grid xs={2} className="button-grid">
                      <a href="#task-3" className="noUnderline">
                        <h3 className="about-nav-text">Next</h3>
                      </a>
                    </Grid>
                </div>

            </div>

            <div className="container" id="task-3">
               
                <img className="example-img" src={task3} alt="Code example"/>
               
              
                <div className="headerStyles">
                    <h2>
                    <span className="leftAlignStyles">Task 3</span>
                    </h2>
                    <h4>
                    <span className="leftAlignStyles"> Now, you'll add your own QueryCard component to the page! </span>
                    <span className="leftAlignStyles">be sure to fill out all the props. Note: the "object" prop is how your object will be rendered directly. 
                      Ensure it works prior to passing it in.</span>
                    </h4>
                    <Grid xs={2} className="button-grid">
                      <button onClick={handleConfetti} className="confetti-btn">

                      
                      <a href="#nav" className="noUnderline" >
                     
                        
                          <h3 className="about-nav-text" >Finish</h3> 
                        
                     
                        </a>
                        </button>
                    </Grid>
                </div>

            </div>
            
          <div className="nav-grid" id="nav">
                
                      
                      
                      
                        <a href="#example" className="noUnderline">
                          <h3 className="about-nav-text" onClick={toggleExample}>Example</h3>
                        </a>
                         
                        <a href="#fall2025" className="noUnderline">
                          <h3 className="about-nav-text" onClick={toggleF25}>Fall 2025</h3>
                        </a>
                        
                       

                  
                </div>
        
        <div className="container" id="example" style={{ display: visExample ? 'block' : 'none' }}>
          <QueryCard
            author={"Amara - Example Query"}
            object={<audio controls>
              <source src={"https://empathybytes.library.gatech.edu/" + mediaAudio} type="audio/mpeg"/>
              audio not supported in your browser</audio>}
           
          />
         {/* add examples here from previous semesters!*/}
        </div>

        <div className="container" id="fall2025" style={{ display: visF25 ? 'block' : 'none' }}>
         
          {/* add your QueryCard component here! 

          If your query gives back multiple objects, the AboutComponent has an 
          of how you'd want to map these object to display all of them, then wrap it in a div with the className "horizontal-styles". 

          The example query only gives back one object so mapping is not necessary here.  */}
        </div>

            
            
            
       
              


              
              
              
                 
        
        
        
                
        </div>
            </Layout>
    )
}

{/* add your query INSIDE of this exported query! */}
export const query = graphql`
  query {

      mediaAudioFile (path: {alias: {}}) {
        path {
          alias
        }
      }

    
  }
`;

export default Playground;

export const Head = () => (
  <>
  <link rel="icon" type="image/png" href="https://educast.library.gatech.edu/static/empbytes-8c9db7ee75f110e619f7d85cb8b170c5.jpg" />
  <title>Playground</title>
  </>
  )