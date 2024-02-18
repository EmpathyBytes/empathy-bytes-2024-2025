// Standard import statement needed for all React components
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import pic from "/src/images/react-practice-images/mackenzie.png";

export default function MackenzieCard() {
    return (
        <Card sx={{ maxWidth: 200 }} variant = "outlined">
            <CardActionArea href= "https://matias.me/nsfw/">
                <CardContent style={{ backgroundColor: "#99C68E" }}>
                    <Typography variant="h6" style={{color: '#520075', fontFamily: "cursive"}}>Mackenzie Thies</Typography>
                    <Typography variant="body2" style={{color: "#520075", fontFamily: "sans-serif"}}>
                        Hi! React can be so tricky sometimes :P
                    </Typography>
                </CardContent>
                <CardMedia
                    component = "img"
                    height="160"
                    src= {pic}
                    alt="picture of Mackenzie waving"
                />
            </CardActionArea>
        </Card>

    );
}