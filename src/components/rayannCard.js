// Standard import statement needed for all React components
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import FlightIcon from '@mui/icons-material/Flight';
import RestaurantIcon from '@mui/icons-material/Restaurant';

// TODO 1.0: Read the followin instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function RayannCard() {

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                height="160"
                image="https://parents.gatech.edu/sites/default/files/styles/large/public/2023-11/Rayann%20Liang.jpg?itok=h7bhQRyV?scale-down-to=512"
                alt="picture of rayann"
            />
            <CardContent className="cardContentStyle" style={{ backgroundColor: "#225add" }}>
                <Typography gutterBottom id="cardText" style={{ fontSize: 'large' }}>Rayann Liang</Typography>
                <Typography variant="body2">
                    Hello! I'm a 3rd year CM major from Georgia.
                    I love to travel, try new foods, and ski!
                    {/* @mui/icons-material/DownhillSkiing
                    @mui/icons-material/Flight
                    @mui/icons-material/Restaurant */}
                </Typography>

            </CardContent>
    </Card>

        // TODO 1.1: Add your own code here
        // I'm returning a div here because you need to return something, or else you'll get an error. 
        // You should replace this with your own code/delete the div when you're done
        // Visit https://mui.com/material-ui/all-components/ to see all the components you can use
        // You can also look at joshCard.js for an example of how to use MUI components
        // Have fun! Spice up your card however you want!

    );
}