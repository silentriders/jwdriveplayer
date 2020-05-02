import styled from '@emotion/styled';
import Assets from '../../Assets';
import Constants from '../../Config/Constants';

export const WrapPlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  /* background-image: url(${Assets.no_preview.image2}); */
  background-size: 100%;
  .ant-spin.ant-spin-show-text .ant-spin-text{
    font-size: 48px;
    margin-top: 24px;
    color: yellow;
  }
  .video-react.video-react-fluid,
  .video-react.video-react-16-9,
  .video-react.video-react-4-3 {
    height: 100vh;
  }
  .jwplayer.jw-flag-aspect-mode {
    width: 100%;
    height: 100% !important;
    position: absolute;
  }
  .jw-svg-icon-rewind path {
	display: none;
}

  .jw-svg-icon-rewind {
    background-image: url(${Assets.icon.rewind});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.8;
  }

  .jw-icon-rewind:hover .jw-svg-icon-rewind {
    background-image: url(${Assets.icon.rewind_hover});
    opacity: 1;
  }
`;


export const ButtonDownload = styled.div`
  a{
    padding: 10px 20px;
    background: ${Constants.COLOR.BLUE};
    color: #fff;
    border-radius: 3px;
    width: 100%;
    display: block;
    text-align: center;
    margin-bottom: 16px;
  }
`;
