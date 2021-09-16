import styled from "styled-components";

export const PxToVw = (px, screen = 1920) => {
  return `${(px * 100) / screen}vw`;
};
