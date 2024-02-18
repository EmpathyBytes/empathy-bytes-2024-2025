// Standard import statement needed for all React components
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Face3Icon from '@mui/icons-material/Face3';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// TODO 1.0: Read the followin instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function HebeCard() {

    return (

        // TODO 1.1: Add your own code here
        // I'm returning a div here because you need to return something, or else you'll get an error. 
        // You should replace this with your own code/delete the div when you're done
        // Visit https://mui.com/material-ui/all-components/ to see all the components you can use
        // You can also look at joshCard.js for an example of how to use MUI components
        // Have fun! Spice up your card however you want!
        <Card sx={{maxWidth: 200, boxShadow: "5px 10px 1px #DACBFB", fontFamily: "cursive"}}>
            <CardContent>
            <Stack direction="column" alignItems="center" sx={{backgroundColor: "#CCDEF3", padding: "30px 0"}}>
                <Face3Icon fontSize="large" />
            </Stack>
            <Typography variant="h5">Hebe</Typography>
            <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            </CardContent>
        </Card>

    );
}