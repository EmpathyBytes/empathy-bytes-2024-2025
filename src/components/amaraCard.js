import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import teampic from "../images/homepage/teampic.jpg";

const card = (
    <React.Fragment>
      <CardContent className="cardContentStyle" style={{ backgroundColor: "#005f56" }}>
        <Typography variant="h5" component="div" style={{ color: "#FFFFFF" }}>
          What Is Empathy Bytes?
        </Typography>
         <CardMedia
          component="img"
          height="275"
          image={teampic}
          alt="team pic"
        />
        <Typography variant="body2">
          Empathy Bytes is a student run research project focused on creating 
          <br/>
          immersive technology and media centered around empathy. 
          <br/>
          We think outside traditional modes of communication and
          <br/>
           documentation to create radical and unique experiences. 
          <br/>
          Our research currently focuses on identifying and presenting 
          <br/>
          distinct communities connected to Georgia Tech.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
  export default function AmaraCard() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    );
  }