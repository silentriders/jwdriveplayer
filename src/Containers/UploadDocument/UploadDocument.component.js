import React from 'react';
import { Upload } from 'antd';
import { WrapperUploadDocument } from './UploadDocument.style'

const UploadDocumentComponent = ({
  beforeUpload,
  handleChange,
  customUpload,
  state,
  uploadButton,
  showFiles
}) => {
  return (
    <WrapperUploadDocument showFiles={showFiles}>
      <Upload
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={customUpload}
        fileList={state.fileList}
      >
        {uploadButton()}
      </Upload>
    </WrapperUploadDocument>
  );
};

export default UploadDocumentComponent;
