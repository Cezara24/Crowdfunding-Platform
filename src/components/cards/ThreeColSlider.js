import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import tinyGlade from "images/original/tiny-glade/tiny-glade.png";
import pounceLight from "images/original/tiny-glade/pounce-light.jpeg";
import whale from "images/original/ceti/whale.png";
import cetiProfilePhoto from "images/original/ceti/ceti-profile-photo.jpg";
import singer from "images/original/kamauu/singer.jpg";
import kamauuProfilePhoto from "images/original/kamauu/kamauu-profile-photo.jpg";
import doen from "images/original/doen/artist.webp";
import doenProfilePhoto from "images/original/doen/doen-profile-photo.jpg";
import { FaUsers } from "react-icons/fa";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-2xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-blue-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const ProfileImgContainer = styled.div(props => [
  `background-image: url("${props.profileSrc}");`,
  tw`inline-block rounded-full w-12 h-12 bg-cover bg-center`
]);
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: tinyGlade,
      profileSrc: pounceLight,
      title: "Tiny Glade",
      description: "Tiny Glade este un joc relaxant despre construirea unor castele. Explorează clădirile și urmărește jocul, asamblează fiecare cărămidă, piatră și scândură.",
      locationText: "Pounce Light Studio",
      rating: '125K',
    },
    {
      imageSrc: singer,
      profileSrc: kamauuProfilePhoto,
      title: "KAMAUU",
      description: `Artist, rapper, poet și gânditor, împletește fire de rap, reggae, soul și chiar doo wop. "Nu sunt profesor. Sunt doar un coleg de clasă. Nu am un plan de lecție, dar am câteva note pe care sper să le împărtășesc în cântecele mele."`,
      locationText: "Mbonisi Kwame Agyeman",
      rating: "158K",
    },
    {
      imageSrc: whale,
      profileSrc: cetiProfilePhoto,
      title: "Project CETI",
      description: "CETI este o organizație nonprofit care folosește inteligența artificială și robotica pentru a asculta și traduce comunicarea balenelor.",
      locationText: "inițiativă de conservare",
      rating: '173K',
    },
    {
      imageSrc: doen,
      profileSrc: doenProfilePhoto,
      title: "Doen",
      description: "Doen este un artist care transformă culoarea și speranța în realitate, donând toate veniturile obținute prin picturile ei școlilor, semănând speranță prin fiecare pensulă atinsă de pânză. Prin fiecare operă de artă, Doen pictează nu doar peisaje ale sufletului ei, ci și zâmbete pe chipurile celor mici.",
      locationText: "The journey of life",
      rating: '110K',
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Sub lumina reflectoarelor</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <FaUsers />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <ProfileImgContainer profileSrc={card.profileSrc}>
                    </ProfileImgContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Donează</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
