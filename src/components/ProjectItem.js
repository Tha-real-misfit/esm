import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AboutImg from '../assets/images/ash logo-01.png';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
    /* font-family: 'Poppins', sans-serif; */
  }
  .projectItem__desc {
    font-size: 1.6rem;
    /* font-family: 'Poppins', sans-serif; */
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 250px;
    }
  }
`;

export default function ProjectItem({
  img = AboutImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      {/* <Link to="/projects"  */}
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>
      {/* </Link> */}
      <div className="projectItem__info">
        {/* <Link to="#"> */}
        <SectionTitle className="projectItem__title">{title}</SectionTitle>
        {/* </Link> */}
        <ParagraphText className="projectItem__desc">{desc}</ParagraphText>
      </div>
    </ProjectItemStyles>
  );
}
