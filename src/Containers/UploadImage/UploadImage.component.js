import React from 'react'
import { Upload } from 'antd'

const UploadImageComponent = ({beforeUpload, handleChange, customUpload, state, uploadButton}) => {
    return (
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        customRequest={customUpload}
        fileList={state.fileList}
      >
        {state.imageUrl ? <img src={state.imageUrl} alt="avatar" /> : uploadButton()}
      </Upload>
    )
}

export default UploadImageComponent
