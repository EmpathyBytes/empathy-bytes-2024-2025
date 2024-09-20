import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import pic from "/src/images/diana.png"
import React from "react";

// TODO 1.0: Read the following instructions
// 4. Add your own code to the function
// 5. Add your component to the practice.js file
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function DianaCard() {

    return (

        <Card sx={{ maxWidth: 200, borderRadius: 4}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    src={pic}
                    alt="Diana's picture"
                />
                <CardContent 
                    sx={{
                        background: 'linear-gradient(135deg, #abd1ed 30%, #88c1eb 100%)',
                        color: "black"
                    }}
                >
                    <Typography gutterButtom variant = "h7" component="div" sx={{ fontFamily: 'Monserrat, sans-serif' }}> 
                        Diana Garcia Perales
                    </Typography>
                    <Typography variant = "body2" color="black">
                        Hi, I'm a 3rd year cs major! I like thrifting and going cafe hopping!
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        // TODO 1.1: Add your own code here
        // I'm returning a div here because you need to return something, or else you'll get an error. 
        // You should replace this with your own code/delete the div when you're done
        // Visit https://mui.com/material-ui/all-components/ to see all the components you can use
        // You can also look at joshCard.js for an example of how to use MUI components
        // Have fun! Spice up your card however you want!
        

    );
}