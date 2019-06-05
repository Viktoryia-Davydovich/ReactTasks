import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const About = () => (
    <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            About us
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is some information abou us.
          </Typography>
        </CardContent>
    </Card>
)

export default About;