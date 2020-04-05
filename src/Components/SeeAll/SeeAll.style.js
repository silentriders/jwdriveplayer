import styled from '@emotion/styled';
import Constants from '../../Config/Constants';
import Assets from '../../Assets';

export const WrapperSeeAll = styled.div`
  position: relative;
  top: 8px;
  float: right;
 a{
  color: ${Constants.COLOR.WHITE};
  font-family: ${Assets.font.REGULAR};
  font-size: 14px;
  :hover{
    color: ${Constants.COLOR.RED};
  }
 }
 img{
   margin-left: 16px;
 }
`;
