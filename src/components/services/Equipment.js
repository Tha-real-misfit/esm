import React from 'react';
import styled from 'styled-components';
// import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  height: 100vh;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="equipment">
      <div className="container">
        <SectionTitle className="services__title">Equipment I Use</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Canon 100mm lense"
            desc="Used for macro photography. "
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Canon 50mm lense"
            desc="Used for wide angle photography. "
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Reflectors"
            desc="Used for light placement. "
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Speed Lights"
            desc="Used for lighting up dark areas. "
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
