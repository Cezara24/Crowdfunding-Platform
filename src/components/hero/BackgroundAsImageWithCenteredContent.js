import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import painter from "images/original/painter.jpg"

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${painter});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`w-3/6 px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`uppercase text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-orange-500 text-gray-100 hocus:bg-orange-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const scrollToContent = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

export default () => {
  const navLinks = [
    <NavLinks key={2}>
      <NavLink href="#">Despre noi</NavLink>
      <NavLink href="#">Descoperă proiecte</NavLink>
      <PrimaryLink href="/#">Îndeplinește-ți visul</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Împreună,
            <br />
            Scriem Viitorul
          </Heading>
          <PrimaryAction
            onClick={scrollToContent}
          >Află mai multe</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
