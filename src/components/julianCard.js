// Standard import statement needed for all React components
import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
//import Collapse from '@mui/material/Collapse';

// TODO 1.0: Read the followin instructions
// 1. In the components folder, create a new file called yournameCard.js
// 2. Copy the code from starterCode.js into yournameCard.js
// 3. Put your name in the function name (i.e. yourNameCard)
// 4. Add your own code to the function
// 5. Add your component to the practice.js file
// 6. Once you're done with TODO 1.0, go to practice.js and complete TODO 2.0 and TODO 3.0

export default function JulianCard() {
    const [isJulianCool, setIsJulianCool] = useState(false);

    const handleCheckboxChange = () => {
      setIsJulianCool(!isJulianCool);
    };

    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardActionArea href="https://poptropica.com">
                <CardMedia
                    component="img"
                    height="160"
                    image="https://i.ibb.co/7j4gG6L/851665-E3-CABB-4-B8-C-A203-69-A38-F8-D4173-1-105-c.jpg"
                    alt="picture of julian lol"
                />
                <CardContent className="cardContentStyle" style={{ backgroundColor: "#a184f0" }}>
                    <Typography gutterBottom id="cardText" style={{ fontSize: 'large', fontFamily: 'Comic Sans MS', textAlign: 'center' }}>Julian Nogal</Typography>
                    <Typography variant="body2">
                    <div style={{ textAlign: 'center' }}>
                        Husband. Father. Grandfather. Gandhi. Architect. Angel Cabrera.
                    </div>
                    </Typography>
                    <div style={{ marginTop: '10px' }}>
                        <label>
                            <Checkbox
                                checked={isJulianCool}
                                onChange={handleCheckboxChange}
                            />
                            <span style={{ color: isJulianCool ? 'black' : 'black', fontFamily: 'Comic Sans MS' }}>Julian is cool.</span>
                        </label>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}