import filePdfFilled from "@iconify/icons-ant-design/file-pdf-filled";
import bxsChevronsDown from "@iconify/icons-bx/bxs-chevrons-down";
import linkedinIcon from "@iconify/icons-cib/linkedin";
import githubSquare from "@iconify/icons-fa-brands/github-square";
import emailIcon from "@iconify/icons-zmdi/email";
import { Icon } from "@iconify/react";
import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

const Landing: React.FC = () => {
  return (
    <div>
      <Jumbotron
        fluid
        className="min-vh-100 text-center m-0 d-flex flex-column justify-content-center"
        id="home"
      >
        <Container className="genericContainer">
          <h5>Hello my name is</h5>
          <h1>Mohan Vashist</h1>
          <p>
            Third year Computer Science student from the University of Toronto
          </p>
          <Jumbotron
            className="text-center justify-content-center"
            id="jumbotronIconsContainer"
          >
            <a
              href="https://github.com/MohanVashist1"
              target="_blank"
              className="genericIcons"
            >
              <Icon
                icon={githubSquare}
                width="60"
                height="60"
                className="icons"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-vashist-781513170/"
              target="_blank"
              className="genericIcons"
            >
              <Icon
                icon={linkedinIcon}
                width="54"
                height="54"
                className="icons"
              />
            </a>
            <a
              className="genericIcons"
              href="Mohan_Vashist_Resume.pdf"
              target="_blank"
            >
              <Icon
                icon={filePdfFilled}
                width="60"
                height="60"
                className="icons"
              />
            </a>
            <a
              href="mailto:mohan.vashist@mail.utoronto.ca"
              className="genericIcons"
            >
              <Icon icon={emailIcon} width="60" height="65" className="icons" />
            </a>
          </Jumbotron>
          <Icon
            icon={bxsChevronsDown}
            height="40"
            width="40"
            id="chevronIndicator"
          />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Landing;
