import styled from '@emotion/styled';
import Constants from '../../Config/Constants';
import Assets from '../../Assets';

export const WrapperPlayMoviePage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  color: ${Constants.COLOR.WHITE};
  padding: 0 48px;

  iframe{
    border: 0;
    width: 100%;
    height: 85vh;
    margin-top: 24px;
  }
`;

export const BannerPlay = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${Constants.COLOR.BLACK};
  background-image: url("${props => props?.img ?? Assets.images.example.backdrop}");
  background-size: cover;
  min-width: 100%;
  height: 729px;
  color: ${Constants.COLOR.WHITE};
  overflow: hidden;
  top: 24px;

  @media only screen and (max-width: 1366px) {
    height: 590px;
  }
`;

export const PlayButton = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  top: 40%;
  background-image: url(${Assets.icon.play_red});
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position: center;
  padding: 50px;
  border: 10px solid ${Constants.COLOR.RED};
  border-radius: 100%;
  box-shadow: ${Constants.COLOR.RED_SHADOW};

  :hover{
    cursor: pointer;
  }
`;