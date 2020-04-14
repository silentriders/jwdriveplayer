import React from 'react';
import firebase from 'firebase';
import { Icon, message, Button } from 'antd';
import { useGlobalState } from '../../globalState';
import UploadDocumentComponent from './UploadDocument.component';
import { UploadButton } from './UploadDocument.style';

const UploadDocumentContainer = props => {
  const { type, showFiles = true } = props;
  const [state, setState] = useGlobalState('fileSubtitles');
  const handleChange = info => {
    let fileList = [...info.fileList];
    fileList = fileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setState({ fileList });
  };

  const beforeUpload = file => {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('Document must smaller than 5MB!');
    }
    return isLt5M;
  };

  const customUpload = async ({ onError, onSuccess, file }) => {
    const storage = firebase.storage();
    const metadata = {
      contentType: '*/*'
    };
    const storageRef = await storage.ref();
    const location = type === 'subtitle' ? `subtitles` : `posters`;
    const imgFile = storageRef.child(`${location}/${file.uid}_${file.name}`);
    try {
      const image = await imgFile.put(file, metadata);
      onSuccess(null, image);
    } catch (e) {
      onError(e);
    }
  };

  const uploadButton = () => (
    <UploadButton>
      Click to Upload
    </UploadButton>
  );

  return (
    <div>
      <UploadDocumentComponent
        beforeUpload={beforeUpload}
        handleChange={handleChange}
        customUpload={customUpload}
        uploadButton={uploadButton}
        showFiles={showFiles}
        state={state}
      />
    </div>
  );
};

export default UploadDocumentContainer;
