import React from "react";
import "./About.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Selfie from "../../images/selfie.png";
function About() {
  return (
    <div className="About">
      <Card id="About__Card">
        <CardMedia
          id="imag"
          component="img"
          alt="Mike Jones"
          height="240"
          image={Selfie}
        />
        <CardContent className="content">
          <Typography gutterBottom variant="h5" component="h2">
            Mike Jones
          </Typography>
          <h3> Web | Game Design / Development</h3>
          <br />
          <p>
            Full Stack Web Developer, Primarily focused on Frontend Development
            and Game Design / Development.
          </p>
          <br />
          <p>
            Hello, I'm Mike. I love to be creative, solve problems, and help
            others in need.
            <br />I Have a passion for playing and creating video games. <br />
            We all have dreams, I'm here to help you make your dreams a reality.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default About;
