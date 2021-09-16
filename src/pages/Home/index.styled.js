import styled from 'styled-components';
import { PxToVw } from '../../index.styled';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: ${PxToVw(50)};
  height: 100vh;
  background-image: url(https:cdn.pixabay.com/photo/2020/03/17/20/52/covid-4941846_960_720.png);
  background-size: ${PxToVw(450)};
  background-position: 0 ${({bgp})=> bgp}px;
  h1 {
    user-select: none;
    font-size: ${PxToVw(100)};
    text-decoration: underline;
    text-shadow: ${PxToVw(3)} ${PxToVw(3)} #32c2ac;
    position: relative;
    z-index: 2;
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  column-gap: ${PxToVw(50)};
  user-select: none;
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    top: ${PxToVw(-250)};
    left: -7.5vw;
    background-color: #252836;
    border-radius: 30% / 40%;
    width: ${PxToVw(700)};
    height: ${PxToVw(500)};
    z-index: -1;
    opacity: 0.97;
    filter: blur(${PxToVw(60)});
  }
  a {
    border: 1px solid white;
    border-radius: ${PxToVw(30)};
    display: flex;
    background-color: #1c1e29;
    padding: ${PxToVw(30)} ${PxToVw(40)};
    font-size: ${PxToVw(32)};
    transition: 0.4s;

    &:hover {
      transform: translate(${PxToVw(-10)}, ${PxToVw(-10)});
      box-shadow: ${PxToVw(6)} ${PxToVw(6)} 0px 0 #fff;
    }
  }
`;
