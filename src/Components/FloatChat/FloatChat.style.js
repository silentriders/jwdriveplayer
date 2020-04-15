import styled from '@emotion/styled';
import Constants from '../../Config/Constants';

export const WrapFloatChat = styled.div`
  position: fixed;
  background: ${Constants.COLOR.BLUE};
  box-shadow: 0px 0px 18px ${Constants.COLOR.BLUE};
  width: 50px;
  height: 50px;
  right: 75px;
  z-index: 99;
  border-radius: 100%;
  text-align: center;
  color: #fff;
  padding: 13px;
  bottom: 24px;
`;
