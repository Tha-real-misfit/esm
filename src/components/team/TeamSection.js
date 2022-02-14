import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';

// team images

// import teamMember1 from '../../assets/images/butterfly.jpg';
// import teamMember2 from '../../assets/images/flower4.jpg';
// import teamMember3 from '../../assets/images/butterfly3.jpg';
// import teamMember4 from '../../assets/images/flower1.jpg';
// import teamMember5 from '../../assets/images/waterfall.jpg';
// import teamMember6 from '../../assets/images/StreetArt.jpg';
// import teamMember7 from '../../assets/images/Bolte.jpg';
// import teamMember8 from '../../assets/images/Aimee.jpg';

// png

import teamMembera from '../../assets/images/butterfly.png';
import teamMemberb from '../../assets/images/flower4.png';
import teamMemberc from '../../assets/images/butterfly3.png';
import teamMemberd from '../../assets/images/flower1.png';
import teamMembere from '../../assets/images/waterfall.png';
import teamMemberf from '../../assets/images/StreetArt.png';
import teamMemberg from '../../assets/images/Bolte.png';
import teamMemberh from '../../assets/images/Aimee.png';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateTeal);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* grid-template-columns: auto auto auto; */

    gap: 3rem;
  }
  .team__title {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  .team__desc {
    margin-bottom: 2rem;
    max-width: 300px;
  }

  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles id="shop">
      <div className="container">
        <div className="team__info">
          <ParagraphText className="team__subtitle">
            Images for sale
          </ParagraphText>
          <SectionTitle className="team__title">
            Enquire if interested
          </SectionTitle>
          <ParagraphText className="team__desc">
            Please use the contact form below to discuss purchasing any of my
            photos or to enquire about any of my services.
          </ParagraphText>
        </div>
        <div className="team__wrapper">
          <div className="team__members">
            <TeamMemberItem
              img={teamMembera}
              name="Relaxing on a leaf"
              title=""
            />
            <TeamMemberItem img={teamMemberb} name="Pretty in pink" title="" />
            <TeamMemberItem
              img={teamMemberc}
              name="This smells nice"
              title=""
            />
            <TeamMemberItem img={teamMemberd} name="Look at me" title="" />
            <TeamMemberItem
              img={teamMembere}
              name="Water water water"
              title=""
            />
            <TeamMemberItem img={teamMemberf} name="Urban life" title="" />
            <TeamMemberItem img={teamMemberg} name="Get over it" title="" />
            <TeamMemberItem img={teamMemberh} name="Portrait" title="" />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
