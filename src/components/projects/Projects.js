import React, { useState, useEffect } from "react";
import "./Projects.css";
import { makeStyles } from "@material-ui/core/styles";
import sanityClient from "../../client";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { GitHubIcon } from "@material-ui/icons/GitHub";
import { classes } from "istanbul-lib-coverage";

function Projects() {
  const [projectData, setProjectData] = useState(null);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  const classes = useStyles();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      demolink,
      repolink,
      tags,
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="Projects">
      <h1 id="title">Projects</h1>
      {projectData &&
        projectData.map((project) => (
          <Card className="P__Card">
            <CardActionArea>
              <CardMedia
                component="img"
                alt={project.title}
                height="150"
                image={project.mainImage.asset.url}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href={project.repolink} target="blank">
                <Button className="btn" size="small" color="primary">
                  View on Github
                </Button>
              </a>
              <a href={project.demolink} target="blank">
                <Button className="btn" size="small" color="primary">
                  View Live Demo
                </Button>
              </a>
            </CardActions>
          </Card>
        ))}
    </div>
  );
}

export default Projects;
