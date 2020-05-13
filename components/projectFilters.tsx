import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

interface ProjFilterProps {
  langs: Array<string>;
  selLang: string | null;
  setSelLang: any;
}

import styled from "styled-components";

const Title = styled.h3`
  color: #ffffff;
`;

const ProjectsFilter: React.FC<ProjFilterProps> = ({
  langs,
  selLang,
  setSelLang,
}) => {
  return (
    <div className="pt-2 d-flex justify-content-between flex-wrap">
      <Title>Filter by language</Title>

      <DropdownButton
        id="dropdown-basic"
        title="Select Language"
        variant="warning"
      >
        <Dropdown.Item onClick={() => setSelLang(null)}>Show All</Dropdown.Item>
        {langs.map((lang) => {
          return (
            <Dropdown.Item
              key={lang}
              onClick={() => setSelLang(selLang === lang ? null : lang)}
            >
              {lang}
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    </div>
  );
};

export default ProjectsFilter;
