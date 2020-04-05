import styled from '@emotion/styled';
import Constants from '../../Config/Constants';

export const WrapperLayout = styled.div`
  position: relative;
  height: 100vh;
  

  .ant-layout{
    overflow-x: hidden;
    background: ${Constants.COLOR.BLACK};
    padding-bottom: 80px;
  }

  .ant-layout-header{
    background: ${Constants.COLOR.BLACK};
  }
`;