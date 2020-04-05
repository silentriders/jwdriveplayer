import styled from '@emotion/styled';
import Assets from '../../Assets';
import Constants from '../../Config/Constants';

export const WrapperNavbar = styled.div`
  position: relative;
  display: flex;
`;

export const Logo = styled.div`
  height: 50px;
  img {
    height: 100%;
  }
`;

export const MenuList = styled.div`
  position: relative;
  ul {
    position: relative;
    margin: 0;
    li {
      display: block;
      padding: 0 21px;
      float: left;
      color: ${Constants.COLOR.GREY};
      font-size: 18px;
      letter-spacing: 0.5px;
      font-family: ${Assets.font.REGULAR};
      :hover {
        cursor: pointer;
      }
    }
    li.active {
      color: ${Constants.COLOR.WHITE};

      ::after {
        position: relative;
        display: block;
        content: ' ';
        width: 9px;
        height: 9px;
        z-index: 1;
        border-radius: 9px;
        bottom: 16px;
        margin: 0 auto;
        background: ${Constants.COLOR.RED};
        box-shadow: ${Constants.COLOR.RED_SHADOW};
      }
    }
  }
  @media only screen and (max-width: 1366px) {
    ul li {
      font-size: 14px;
    }
    ul li.active::after {
      width: 7px;
      height: 7px;
    }
  }
`;
