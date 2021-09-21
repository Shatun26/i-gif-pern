import styled from 'styled-components';
import { PxToVw } from '../../index.styled';

export const MainWrapper = styled.div`
  background-color: #252836;
  padding: ${PxToVw(100)} ${PxToVw(150)};
  padding-bottom: ${PxToVw(100)};
  min-height: 100vh;
  padding-top: ${PxToVw(0)};
  @media (max-width: 768px) {
    padding: 0 ${PxToVw(100)};
    padding-bottom: ${PxToVw(100)};
  }
  @media (max-width: 768px) {
    padding: 0 ${PxToVw(50)};
    padding-bottom: ${PxToVw(100)};
  }
`;
export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${PxToVw(20)} 0;
  position: relative;

  h1 {
    user-select: none;
    font-size: ${PxToVw(55)};
    text-shadow: ${PxToVw(3)} ${PxToVw(3)} #32c2ac;
    z-index: 2;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  button {
    background-color: #1c1e29;
    border: 1px solid white;
    border-radius: ${PxToVw(50)};
    padding: ${PxToVw(8)} ${PxToVw(20)};
    cursor: pointer;
    font-size: ${PxToVw(20)};
  }
  @media (max-width: 768px) {
    padding: ${PxToVw(60)} 0;
    h1 {
      font-size: ${PxToVw(85)};
      text-shadow: ${PxToVw(6)} ${PxToVw(6)} #32c2ac;
    }
    button {
      border-radius: ${PxToVw(50)};
      padding: ${PxToVw(16)} ${PxToVw(40)};
      font-size: ${PxToVw(30)};
    }
  }
  @media (max-width: 640px) {
    padding: ${PxToVw(60)} 0;
    h1 {
      font-size: ${PxToVw(155)};
      text-shadow: ${PxToVw(10)} ${PxToVw(10)} #32c2ac;
    }
    button {
      border-radius: ${PxToVw(50)};
      padding: ${PxToVw(16)} ${PxToVw(100)};
      font-size: ${PxToVw(60)};
    }
  }
`;
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${PxToVw(20)};
`;
export const ContentControls = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${PxToVw(25)};
  flex-wrap: wrap;
  width: ${PxToVw(700)};
  @media (max-width: 768px) {
    width: ${PxToVw(1000)};
    column-gap: ${PxToVw(55)};
  }
  @media (max-width: 640px) {
    width: ${PxToVw(1500)};
    column-gap: ${PxToVw(75)};
    row-gap: ${PxToVw(15)};
  }
`;
export const FilterBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-size: ${PxToVw(20)};
  cursor: pointer;
  padding: ${PxToVw(10)} 0;
  height: fit-content;
  @media (max-width: 768px) {
    font-size: ${PxToVw(40)};
  }
  @media (max-width: 640px) {
    font-size: ${PxToVw(80)};
  }
`;
export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BtnAddGif = styled.button`
  background-color: #1c1e29;
  padding: ${PxToVw(5)} ${PxToVw(100)};
  font-size: ${PxToVw(100)};
  border: 3px dashed white;
  border-radius: ${PxToVw(15)};
  cursor: pointer;
  @media (max-width: 640px) {
    padding: ${PxToVw(120)} ${PxToVw(100)};
    font-size: ${PxToVw(150)};
  }
`;
export const CardConteiner = styled.div`
  background-color: #232633;
  margin-top: ${PxToVw(50)};
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding: ${PxToVw(30)};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: ${PxToVw(20)};
  p {
    line-height: 100%;
    text-align: center;
    grid-column: 2/4;
    margin-bottom: 0;
    font-size: 1.5vw;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    p {
      font-size: 2vw;
    }
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${PxToVw(100)};
    padding: ${PxToVw(100)} 0;
    margin-top: ${PxToVw(100)};

    p {
      font-size: 2.5vw;
    }
  }
`;
export const GifCard = styled.div`
  background-color: #1c1e29;
  display: flex;
  flex-direction: column;
  padding: ${PxToVw(10)} ${PxToVw(20)};
  h1 {
    font-size: ${PxToVw(20)};
    margin-bottom: ${PxToVw(10)};
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    font-size: ${PxToVw(20)};
  }
  @media (max-width: 768px) {
    h1 {
      font-size: ${PxToVw(40)};
      margin-bottom: ${PxToVw(15)};
    }
    button {
      font-size: ${PxToVw(40)};
    }
  }
  @media (max-width: 640px) {
    padding: ${PxToVw(30)} ${PxToVw(40)};

    h1 {
      font-size: ${PxToVw(80)};
      margin-bottom: ${PxToVw(5)};
    }
    button {
      font-size: ${PxToVw(80)};
    }
  }
`;
export const ImgContainer = styled.div`
  max-height: ${PxToVw(300)};
  background-color: #1c1e29;
  width: 100%;
  height: 100%;
  margin-bottom: ${PxToVw(10)};
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    max-height: ${PxToVw(400)};
  }
  @media (max-width: 640px) {
    max-height: ${PxToVw(1400)};
  }
`;
export const BtnContainer = styled.div`
  margin-top: auto;
  display: flex;
  column-gap: ${PxToVw(20)};
`;
export const ModalAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 0;
    font-size: ${PxToVw(25)};
  }
  input:last-of-type {
    display: none;
  }
  @media (max-width: 640px) {
    h1 {
    font-size: ${PxToVw(75)};
  }
 
 }
`;
export const ModalAddInput = styled.input`
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  font-size: ${PxToVw(30)};
  border-bottom: 1px solid white;
  width: 85%;
  margin-bottom: ${PxToVw(20)};
  @media (max-width: 768px) {
    font-size: ${PxToVw(50)};
    width: 100%;
  }
  @media (max-width: 640px) {
    font-size: ${PxToVw(80)};
  }
`;
export const ModalAddBtn = styled.label`
  background-color: #3377ff;
  padding: 1vw;
  font-size: 1.6vw;
  border-radius: 6%/95%;
  cursor: pointer;
  padding: 1vw 9vw;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  p {
    z-index: 99;
    position: relative;
    line-height: 100%;
    margin-bottom: 0;
    transition: 0.3s;
  }
  &::after {
    position: absolute;
    content: '';
    top: -1vw;
    left: -80vw;
    width: 80vw;
    height: 5vw;
    background-color: #33c9ff;
    border-radius: 0% 20% /0% 100%;
    z-index: 0;
    transition: 0.3s;
  }
  &:hover {
    p {
      letter-spacing: 0.5vw;
    }
    &::after {
      transform: translate(32vw, 0);
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 2vw;
    }
  }
  @media (max-width: 640px) {
    padding: 2vw 28vw;
    p {
      font-size: 4vw;
    }
    &::after {
      height: ${PxToVw(200)};
      width: ${PxToVw(1800)};
      transform: translate(-15vw, 0);

      }
    &:hover {
    
    &::after {
      transform: translate(70vw, 0);
    }
  }
  }
`;
export const ModalAddInputCategory = styled.input`
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  font-size: ${PxToVw(30)};
  border-bottom: 1px solid white;
  width: 85%;
  margin-bottom: ${PxToVw(20)};
  @media (max-width: 768px) {
    font-size: ${PxToVw(50)};
    width: 100%;
  }
  @media (max-width: 640px) {
    font-size: ${PxToVw(80)};
  }
  
`;
