// Standard import statement needed for all React components
import React from "react";
import pic from "/src/images/react-practice-images/xavier.png";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { BorderAllRounded } from "@mui/icons-material";
// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function xavierCard() {

    return (
        <Card sx={{ maxWidth: 200, border:  "3px solid #8e72b3"}}>
            <CardActionArea href="https://www.youtube.com/watch?v=SyPjwxHxbus">
                <CardMedia
                    component="img"
                    height="160"
                    image={pic}
                    alt="xavier"
                />
                <CardContent className="cardContentStyle" style={{ backgroundColor: "#6750ba" }}>
                    <Typography gutterBottom id="cardText" style={{ fontSize: 'large', textAlign: 'center'}}>Xavier Genio</Typography>
                    <Typography variant="body2" style={{textAlign: 'center'}}>

                        I do in fact exist

                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    );
}