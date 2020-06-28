import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  padding: 11px 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    .header {
      margin-top: 15px;
      height: 30px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 40px;
  padding: 15px;
  margin-left: 50px;

  @media (max-width: 768px) {
    .logo {
      position: absolute;
      top: 28px;
      left: 40px;
      height: 25px;
      width: 25px;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 35px;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
