import styled from '@emotion/styled';

export const WrapPlayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
