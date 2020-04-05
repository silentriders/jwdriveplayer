import styled from '@emotion/styled';
import Constants from '../../Config/Constants';

export const WrapperPosterMovie = styled.div`
  position: relative;
  width: 204px;
  margin-right: 24px;
  margin-bottom: 24px;

  @media screen and (max-width: 1366px) {
    width: 184px;
  }

  .poster {
    height: 276px;

    background: black;

    border-radius: 5px;

    margin-bottom: 8px;
  }

  h5 {
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 8px;
    height: 276px;
  }

  .info-footer {
    margin-top: 4px;
    display: flex;
    .year {
      color: ${Constants.COLOR.GREY};
      font-size: 12px;
      letter-spacing: 0.5;
    }
    .runtime-rating {
      position: absolute;
      right: 10px;
      display: flex;
      line-height: 14px;
      bottom: 2px;
      .text p {
        top: 3px;
        color: ${Constants.COLOR.GREY};
      }
    }
  }
`;
