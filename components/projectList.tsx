import forkOutlined from "@iconify/icons-ant-design/fork-outlined";
import starIcon from "@iconify/icons-emojione/star";
import codeIcon from "@iconify/icons-entypo/code";
import { Icon } from "@iconify/react";
import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import styled from "styled-components";
import { Project } from "../public/helpers/interfaces";

const Title = styled.h4`
  color: #212121;
`;

interface ProjCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjCardProps> = ({ project }) => {
  return (
    <Card border="secondary">
      <Card.Header>
        <Title>
          <a id="styledLink" href={project.link} target="_blank">
            {project.name}
          </a>
        </Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-3 row genericIcon">
          <div className="pl-3" title="Stars" id="starIcon">
            <Icon icon={starIcon} id="starIcon" height="20" />
            <span className="genericSpan">{project.stars}</span>
          </div>
          <div className="col-1-sm genericIcon" title="Forks">
            <Icon icon={forkOutlined} color="#212121" />{" "}
            <span className="genericSpan">{project.forks}</span>
          </div>
          <div className="col-1-sm genericIcon" title="Contributions">
            <Icon icon={codeIcon} color="#FF5252" />
            <span className="genericSpan">{project.contribs}</span>
          </div>
        </Card.Subtitle>
        <Card.Text>{project.desc}</Card.Text>
      </Card.Body>
      <Card.Footer>
        {project.langs.map((lang, i) => {
          return (
            <span key={i}>
              {lang + (i !== project.langs.length - 1 ? ", " : "")}
            </span>
          );
        })}
      </Card.Footer>
    </Card>
  );
};

interface ProjListProps {
  projects: Array<Project>;
}

const ProjectList: React.FC<ProjListProps> = ({ projects }) => {
  return (
    <div id="projectList">
      <CardColumns>
        {projects.map((proj) => {
          return <ProjectCard key={proj.id} project={proj} />;
        })}
      </CardColumns>
    </div>
  );
};

export default ProjectList;
