import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function tiffanyCard() {

  return (
      <Card sx={{ maxWidth: 190, border: '1px solid black' }}>
          <CardActionArea href="https://open.spotify.com/user/4ghko38mrouxgsy2hpnqe6smp?si=dbe462fb9fea4734">
              <CardContent className="cardContentStyle" style={{ backgroundColor: "#EAE9DE" }}>
                  <Typography gutterBottom sx={{ color: 'rgb(49, 21, 4)', fontSize: 25, fontFamily: 'Georgia' }}>Tiffany :) </Typography>
                  <Box sx={{ backgroundColor: '#EDCA63', borderRadius: 2, p: 1, mb: 1.5 }}>
                      <Typography sx={{ color: '#2B2822', fontFamily: 'Georgia' }}>
                          <strong>status:</strong> probably listening to music rn~
                      </Typography>
                  </Box>
                  <CardMedia
                      component="img"
                      height="140"
                      image="https://i.pinimg.com/originals/71/bd/4e/71bd4e9159792006e8fb9139b5e16c48.jpg"
                      alt="Listening to music"
                  />
                  <Typography variant="body2" sx={{ color: 'rgb(49, 21, 4)', fontFamily: 'Georgia' }}>you should listen with me!</Typography>
                  <Box sx={{ backgroundColor: '#C0CEEF', borderRadius: 2, p: 1, mt: 1 }}>
                      <Typography variant="body2" sx={{ color: 'rgb(49, 21, 4)', fontFamily: 'Georgia' }}>
                          Hope you're all having a great day! ^^
                      </Typography>
                  </Box>
              </CardContent>
          </CardActionArea>
      </Card>
  );
}