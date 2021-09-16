import styled from 'styled-components';
import { PxToVw } from '../../index.styled';
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(https:cdn.pixabay.com/photo/2020/03/17/20/52/covid-4941846_960_720.png);
  background-size: ${PxToVw(450)};
  h1 {
    user-select: none;
    font-size: ${PxToVw(100)};
    margin-bottom: ${PxToVw(50)};
    text-shadow: ${PxToVw(3)} ${PxToVw(3)} #32c2ac;
    position: relative;
    z-index: 2;
  }
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: ${PxToVw(400)};
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: '';
    top: ${PxToVw(-220)};
    left: -8.5vw;
    background-color: #252836;
    border-radius: 30% / 40%;
    width: ${PxToVw(700)};
    height: ${PxToVw(600)};
    z-index: -1;
    opacity: 0.97;
    filter: blur(${PxToVw(60)});
  }
  label {
    font-size: ${PxToVw(25)};
    margin-bottom: ${PxToVw(5)};
    text-transform: capitalize;
    color: #f0f0f0;
  }
  input {
    width: 100%;
    background-color: inherit;
    padding: ${PxToVw(10)};
    font-size: ${PxToVw(25)};
    margin-bottom: ${PxToVw(30)};
    border-bottom: 1px solid white;
    background: linear-gradient(
      210deg,
      rgba(0, 0, 255, 0) 15%,
      rgba(28, 30, 41, 1) 100%
    );
  }
  button {
    margin: 0 auto;
    display: block;
    background-color: #1c1e29;
    margin-top: ${PxToVw(30)};
    border: 1px solid white;
    border-radius: ${PxToVw(30)};
    padding: ${PxToVw(20)} ${PxToVw(40)};
    font-size: ${PxToVw(32)};
    transition: 0.4s;

    &:hover {
      transform: translate(${PxToVw(-10)}, ${PxToVw(-10)});
      box-shadow: ${PxToVw(6)} ${PxToVw(6)} 0px 0 #fff;
    }
  }
`;
