import styled from '@emotion/styled';
import Assets from '../../Assets';

export const WrapPlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background-image: url(${Assets.no_preview.image2});
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
`;
