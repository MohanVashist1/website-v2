import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import useSWR from "swr";
import { Project } from "../public/helpers/interfaces";
import ProjectList from "./projectList";
import ProjectsFilter from "./projectFilters";
import Layout from "./layout";

const Projects: React.FC = () => {
  const [selLang, setSelLang] = useState<string | null>(null);
  const [projects, setProjects] = useState([]);
  const { data, error } = useSWR("/api/projects");

  const MAX_PROJS = 6;
  if (error) console.log(error);

  useEffect(() => {
    if (data) {
      setProjects(data.projects.slice(0, MAX_PROJS));
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      if (!selLang) setProjects(data.projects.slice(0, MAX_PROJS));
      else {
        setProjects(
          data.projects
            .filter((proj: Project) => proj.langs.includes(selLang))
            .slice(0, MAX_PROJS)
        );
      }
    }
  }, [selLang]);

  return (
    <Layout id="projects">
      <div className="row" id="projectsHeader">
        <div className="col-12">
          <h1> My Projects</h1>
        </div>
      </div>
      <div className="projects px-2 pt-4 row" id="jumbotronProjectsContainer">
        <div
          className={`w-100 d-flex justify-content-center align-items-center rounded`}
        >
          {!data ? (
            <Spinner animation="border" variant="success" />
          ) : (
            <div className="m-4 w-100">
              <ProjectsFilter
                langs={data.langs}
                selLang={selLang}
                setSelLang={setSelLang}
              />
              <ProjectList projects={projects} />
            </div>
          )}
        </div>
        <div id="projectsFooter">Projects updated in realtime from Github</div>
      </div>
    </Layout>
  );
};

export default Projects;
