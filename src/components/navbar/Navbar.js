import React from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BookIcon from "@material-ui/icons/Book";
import InfoIcon from "@material-ui/icons/Info";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Nav__Left">
        <p id="Nav__Text">Free2BeM3</p>
      </div>
      <div className="Nav__Center">
        <Link to="/" exact>
          <div className="Nav__Option">
            <HomeIcon />
            <p>
              <strong>Home</strong>
            </p>
          </div>
        </Link>

        <Link to="/projects">
          <div className="Nav__Option">
            <AccountTreeIcon />
            <p>
              <strong>Projects</strong>
            </p>
          </div>
        </Link>

        <Link to="/posts">
          <div className="Nav__Option">
            <BookIcon />
            <p>
              <strong>Blog</strong>
            </p>
          </div>
        </Link>

        <Link to="/about">
          <div className="Nav__Option">
            <InfoIcon />
            <p>
              <strong>About</strong>
            </p>
          </div>
        </Link>
      </div>
      <div className="Nav__Right">
        <a href="https://github.com/MikeJonesSE" target="blank">
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/mike-jones-27b63a208/"
          target="blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/free_2_be_m3/" target="blank">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/DNIDGAMING" target="blank">
          <FacebookIcon />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
