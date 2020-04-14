import styled from '@emotion/styled';

export const WrapperFormAddMovie = styled.div`
  position: relative;
  background: #fff;
  border-radius: 3px;
  padding: 24px;
  .ant-form-item {
    margin-bottom: 0;
  }
`;

export const SubtitleUpload = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')};
  margin-top: 8px;
`;

export const SubtitleDirect = styled.div`
  display: ${props => (props.isShow ? 'block' : 'none')};
  margin-top: 8px;
`;

export const WrapUploadSubtitle = styled.div`
  position: relative;
`;

export const ResultPreview = styled.div`
  position: relative;
  display: ${props => (props.isShow ? 'block' : 'none')};
  background: #e6e6e6;
  padding: 24px;
  margin-top: 16px;
  border-radius: 3px;
`;
