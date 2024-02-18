import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function JoshCard() {


    return (

        <Card sx={{ maxWidth: 190 }}>
            <CardActionArea href="https://www.youtube.com/shorts/9JnGuLUvE4A">
                <CardMedia
                    component="img"
                    height="160"
                    image="https://framerusercontent.com/images/2IaDqekEeKdkCgq9NLqRLMsjY.jpg?scale-down-to=512"
                    alt="picture of josh"
                />
                <CardContent className="cardContentStyle" style={{ backgroundColor: "#005f56" }}>
                    <Typography gutterBottom id="cardText" style={{ fontSize: 'large' }}>Joshua Samuel</Typography>
                    <Typography variant="body2">
                        Hey everyone! I hope your all having fun learning React.js! ( ^-^)
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}