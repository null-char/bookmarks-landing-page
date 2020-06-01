import styled, { css } from "styled-components";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
};

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  outline: 0;
  border: none;
  padding: 1rem 2.5rem;
  color: ${props => props.theme.colors.white};
  font-size: inherit;
  font-family: inherit;
  transition: all 0.2s ease-in-out;
  border-radius: 0.3rem;

  :hover {
    transform: translateY(-0.1rem);
  }

  :active {
    transform: translateY(0.1rem);
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${props => props.theme.colors.softBlue};
      box-shadow: 0rem 0.3rem 0.6rem
        rgba(${props => props.theme.colors.rgbSoftBlue}, 0.25);

      :hover {
        box-shadow: 0rem 0.4rem 1rem
          rgba(${props => props.theme.colors.rgbSoftBlue}, 0.25);
      }

      :active {
        box-shadow: 0rem 0.3rem 0.6rem
          rgba(${props => props.theme.colors.rgbSoftBlue}, 0.25);
      }
    `};

  ${props =>
    props.secondary &&
    css`
      background-color: rgba(0, 0, 0, 0.05);
      color: ${props => props.theme.colors.darkBlue};
      box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.2);

      :hover {
        box-shadow: 0rem 0.4rem 1rem rgba(0, 0, 0, 0.2);
      }

      :active {
        box-shadow: 0rem 0.3rem 0.6rem rgba(0, 0, 0, 0.25);
      }
    `};

  ${props =>
    props.tertiary &&
    css`
      color: ${props => props.theme.colors.white};
      background-color: ${props => props.theme.colors.softRed};
      box-shadow: 0rem 0.3rem 0.6rem
        rgba(${props => props.theme.colors.rgbSoftRed}, 0.25);

      :hover {
        box-shadow: 0rem 0.4rem 1rem
          rgba(${props => props.theme.colors.rgbSoftRed}, 0.25);
      }

      :active {
        box-shadow: 0rem 0.3rem 0.6rem
          rgba(${props => props.theme.colors.rgbSoftRed}, 0.25);
      }
    `};

  :focus {
    border: 2px solid ${props => props.theme.colors.darkBlue};
  }
`;

Button.defaultProps = {
  primary: true,
};

export default Button;
