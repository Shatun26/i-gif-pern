import styled from 'styled-components';
import { PxToVw } from '../../index.styled';

export const MainWrapper = styled.div`
  background-color: #252836;
  padding: 0 ${PxToVw(150)};
  padding-bottom: ${PxToVw(100)};
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
  }
  button {
    background-color: #1c1e29;
    border: 1px solid white;
    border-radius: ${PxToVw(50)};
    padding: ${PxToVw(8)} ${PxToVw(20)};
    cursor: pointer;
    font-size: ${PxToVw(20)};
  }
`;
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${PxToVw(20)};
`;
export const ContentControls = styled.div`
  display: flex;
  column-gap: ${PxToVw(25)};
  flex-wrap: wrap;
  width: ${PxToVw(700)};
`;
export const FilterBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-size: ${PxToVw(20)};
  cursor: pointer;
  padding: ${PxToVw(10)} 0;
`;
export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BtnAddGif = styled.button`
  background-color: #1c1e29;
  padding: ${PxToVw(5)} ${PxToVw(100)};
  font-size: ${PxToVw(100)};
  border: 3px dashed white;
  border-radius: ${PxToVw(15)};
  cursor: pointer;
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
}
`;
export const ImgContainer = styled.div`
  background-color: #1c1e29;
  width: 100%;
  margin-bottom: ${PxToVw(10)};
  img{
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const BtnContainer = styled.div`

  margin-top: auto;
  display: flex;
  column-gap: ${PxToVw(20)};
`;
