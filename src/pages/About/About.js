import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import AboutStyles from "./styles";

const About = ({ classes }) => (
  <Card className={classes.cardStyle}>
    <CardContent align="center">
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.headerStyle}
      >
        Hey, we're iTechArt
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.textStyle}
        align="right"
      >
        A top-tier, one-stop custom software development company. We provide
        dedicated teams packed with senior-level talent to help VC-backed
        startups and fast-growing tech companies build successful, scalable
        products that users love.
      </Typography>
    </CardContent>
  </Card>
);

export default withStyles(AboutStyles)(About);
