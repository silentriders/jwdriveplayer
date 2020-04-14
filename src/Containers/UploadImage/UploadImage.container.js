import React from 'react'
import UploadImageComponent from './UploadImage.component'
import firebase from 'firebase';
import { Icon, message } from 'antd';
import { useGlobalState } from '../../globalState';

const UploadImageContainer = props => {
    const { type } = props;
    const [state, setState] = useGlobalState('fileAvatar')

    const handleChange = (info) => {
        let fileList = [...info.fileList];
        fileList = fileList.slice(-1);
        fileList = fileList.map(file => {
        if (file.response) {
            file.url = file.response.url;
        }
        return file;
        });
        setState({ fileList });
      };

      const beforeUpload = (file) => {
        const isImage = file.type.indexOf('image/') === 0;
        if (!isImage) {
          message.error('You can only upload image file!');
        }
        // You can remove this validation if you want
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
          message.error('Image must smaller than 5MB!');
        }
        return isImage && isLt5M;
      };

      const customUpload = async ({ onError, onSuccess, file }) => {
        const storage = firebase.storage()
        const metadata = {
            contentType: 'image/*'
        }
        const storageRef = await storage.ref()
        const location = type === "avatar" ? `avatars` : `images`
        const imgFile = storageRef.child(`${location}/${file.uid}_${file.name}`)
        try {
          const image = await imgFile.put(file, metadata);
          onSuccess(null, image)
        }
        catch(e) {
          onError(e);
        }
      };

  const uploadButton = () => (
    <div>
      <Icon type={state.loading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <div>
      <UploadImageComponent
        beforeUpload={beforeUpload}
        handleChange={handleChange}
        customUpload={customUpload}
        uploadButton={uploadButton}
        state={state}
      />
    </div>
  );
};

export default UploadImageContainer
