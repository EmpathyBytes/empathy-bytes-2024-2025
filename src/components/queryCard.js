import React from "react";
import "../styles/playground.css";

import "../styles/components/interviewcard.css";
import Grid from "@mui/material/Grid";


/**
 * This component is used on each collection page (../templates/collection.js) to 
 * house individual interview titles, authors, photos, 
 * and descriptions. Each component is a grid row.
 * 
 * @param {*} props 
 * @returns the card component
 */

export default function QueryCard(props) {
    const playgroundObject = props.object
        return (
            <div>
            <Grid container spacing={0} alignItems="center" justifyContent="center">

                <Grid item sm={12} md={8} style={{ padding: "0% 0% 1% 3%" }}>
                    <h1 className="header-about">{props.subteam} {props.author}</h1>
                    <div className="horizontal-line" ></div>
                    <p className="paragraph-about padding-bottom-about">{props.about}</p>
                </Grid>

                <Grid xs={6}>

                </Grid>
            </Grid>

            <Grid container spacing={3} alignItems="center" justifyContent="center">
                
                {playgroundObject}
       
            </Grid>

        </div>  
    );
    
}