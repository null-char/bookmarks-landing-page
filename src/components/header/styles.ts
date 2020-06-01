import styled from "styled-components";
import device from "@/utils/media";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2.7rem;
  margin-bottom: 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  z-index: 5;
  box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    padding: 2rem 3rem;
  }

  @media ${device.laptop} {
    padding: 2rem 5rem;
  }
`;
