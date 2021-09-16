import styled from "styled-components";

export const PxToVw = (px, screen = 1920) => {
  return `${(px * 100) / screen}vw`;
};
export const AnimationWrapper = styled.div`
background-color: #252836;
background-image: url(https:cdn.pixabay.com/photo/2020/03/17/20/52/covid-4941846_960_720.png);
  background-size: ${PxToVw(450)};
  background-position: 0 ${({bgp})=> bgp}px;
  @media (max-width: 1024px) {
  background-size: ${PxToVw(750)};

  }
  @media (max-width: 640px) {
  background-size: ${PxToVw(1060)};

  }
`