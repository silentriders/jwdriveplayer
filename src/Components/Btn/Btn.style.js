import styled from '@emotion/styled';
import Assets from '../../Assets';
import Constants from '../../Config/Constants';

export const WrapperBtn = styled.div`
  position: relative;
  top: 40px;

  .ant-btn{
    font-family: ${Assets.font.BOLD};
    padding: 14px 55px;
    background: ${props => props.bgColor ?? 'transparent'};
    border: none;
    color: ${Constants.COLOR.WHITE};

    .text p{
      top: 2px;
      letter-spacing: 0.5px;
    }

    :hover{
      filter: contrast(95%);
    }
  }

  a.ant-btn{
    line-height: unset;
  }

  .ant-btn-primary{
    box-shadow: ${Constants.COLOR.RED_SHADOW};
  }

  .ant-btn-round {
    height: 48px;
    border-radius: 48px;
  }
`;
