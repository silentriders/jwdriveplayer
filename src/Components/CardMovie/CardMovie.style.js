import styled from '@emotion/styled';
import Constants from '../../Config/Constants';

export const WrapperCardMovie = styled.div`
  position: relative;
  color: ${Constants.COLOR.WHITE};
  width: 318px;
  overflow: hidden;
  margin-right: 24px;

  .continue-movie {
    display: flex;
    .poster {
      width: 80px;
      height: 56px;
      overflow: hidden;
      border-radius: 5px;
      margin-right: 16px;
      img {
        width: 100%;
      }
    }

    .info {
      p{
        font-size: 12px;
        color: ${Constants.COLOR.GREY};
        margin: 0; padding:0;
        letter-spacing: 0.5px;
      }
      .progress {
        width: 63%;
        bottom: 0;

        position: absolute;
        .ant-progress-text {
          color: ${Constants.COLOR.GREY};
        }
        .ant-progress-bg{
          background: linear-gradient(270deg, #DC1623 0%, #4F87F5 100%);
        }
      }
    }
  }

  @media only screen and (max-width: 1366px) {
    .continue-movie .info .progress {
      width: 60%;
    }
  }
  
`;
