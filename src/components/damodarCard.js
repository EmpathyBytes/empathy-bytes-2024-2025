// Standard import statement needed for all React components
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import pic from "../images/react-practice-images/damodar.jpg";

// TODO 1.0: Read the following instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file that is in the pages folder
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0


export default function DamodarCard() {
    return (
      <Card
        sx={{
          maxWidth: 190,
          transition: "0.3s",
          "&:hover": {
              transform: "scale(1.1)",
          },
          margin: "10px",
          borderRadius: "10px",
          border: "10px",
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          height="160"
          image=  {pic}
          alt="Picture of Damodar"
        />
        <CardContent
          sx={{
            backgroundColor: "#005f56",
            background: "linear-gradient(45deg,rgb(7, 123, 111),rgb(7, 168, 154))",
            padding: "16px",
          }}
        >
          <Typography
            gutterBottom
            id="cardText"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "black",
              marginBottom: "8px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Damodar Ezhilmuthu
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "black",
              fontSize: "0.9rem",
              lineHeight: 1.4,
            }}
          >
            Hello team! I am Damodar
          </Typography>
        </CardContent>
      </Card>
    );
  }