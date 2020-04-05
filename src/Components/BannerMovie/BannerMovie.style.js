import styled from '@emotion/styled';
import Assets from '../../Assets';
import Constants from '../../Config/Constants';

export const WrapperBannerMovie = styled.div`
  position: relative;
  height: 100vh;
`;

export const Backdrop = styled.div`
  background-image: url("${props => props?.img ?? Assets.images.example.backdrop}");
  height: 100vh;
  background-size: cover;
  filter: blur(30px);
`;

export const InfoFilm = styled.div`
  position: relative;
  border-radius: 5px;
  background-image: url("${props => props?.img ?? Assets.images.example.backdrop}");
  background-size: cover;
  min-width: 100%;
  height: 729px;
  color: ${Constants.COLOR.WHITE};
  overflow: hidden;

  ::before{
    display: block;
    content: ' ';
    width: 1000px;
    height: 1000px;
    background: #00000070;
    position: absolute;
    transform: rotate(30deg);
    right: 55%;
    border-radius: 24px;
    top: -10%;
  }

  h1{
    color: ${Constants.COLOR.WHITE};
  }

  .info{
    padding-top: 124px;
    padding-left: 170px;
    z-index: 1;
    p{
      margin:0; padding: 0;
      line-height: 32px;
      margin-top: 24px;
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1366px) {
    height: 590px;
  }
`;

export const ContentHeader = styled.div`
  position: absolute;
  top: 25px;
  width: 100%;
  padding: 0 48px;
`;
