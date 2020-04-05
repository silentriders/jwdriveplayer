import styled from '@emotion/styled';

export const WrapperIconFline = styled.div`
  position: relative;
  display: flex;
  margin-right: ${props => `${props?.marginRight ?? 0}px`};
  .img-icon{
    position: relative;
    display: block;
    width: ${props => `${props?.size ?? 16}px`};
    img{
      width: 100%;
      height: 100%;
    }
  }
  .text{
    p{
      margin:0;padding:0;
      font-size: ${props => `${props?.size ?? 16}px`};
      position: relative;
      left: 8px;
      line-height: unset;
    }
  }
`;
