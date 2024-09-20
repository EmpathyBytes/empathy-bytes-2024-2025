// Standard import statement needed for all React components
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import pic from "/src/images/react-practice-images/tyler.jpeg";
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(1),
  color: "white"
}));

// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function TylerCard() {
    const [value, setValue] = React.useState(5);

    return (
        <Card sx={{ maxWidth: 190 }}>
            <CardActionArea href="https://youtu.be/r2TkkELL5Yg?si=SnQjXzhhZRIC1t3p" target = "_blank">
                <CardMedia
                    component="img"
                    height="160"
                    src={pic}
                    alt="picture of Tyler"
                />
                <CardContent className="cardContentStyle" style={{ backgroundColor: "#005f56" }}>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                    <Typography gutterBottom id="cardText" style={{ fontSize: 'large' }}>Tyler Wallace</Typography>
                    <Div>{"Rate my card " + String.fromCodePoint(0x1F929)}</Div>;
                </CardContent>
            </CardActionArea>
        </Card>

    );
}