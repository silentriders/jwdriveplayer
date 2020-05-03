import React from 'react';
import { Row, Form, Col, Button, Input, Icon, Radio } from 'antd';
import { _mappingItemForm } from '../../Utils/formUtils';
import {
  WrapperFormAddMovie,
  SubtitleDirect,
  SubtitleUpload,
  WrapUploadSubtitle,
  ResultPreview
} from './FormAddMovie.style';
import { UploadDocument } from '..';
import Constants from '../../Config/Constants';

const FormAddMovieComponent = props => {
  const {
    formField,
    handleSubmit,
    dynamicCount,
    handleAddMore,
    handleDeleteMore,
    onChangeSubtitle,
    subtitleType,
    fileSubtitles,
    isLoadingSubmit,
    type,
    formFieldSeries,
    handleSubmitSeries,
    dataMovie,
    isShowResult
  } = props;
  const { getFieldDecorator } = props.form;

  const mappingForm = () => (
    <div>
      {_mappingItemForm(
        type === 'movie' ? formField : formFieldSeries,
        props.form.getFieldDecorator
      )}
      <Col span={24}>
        <Form.Item label={`Subtitles`} style={{ marginBottom: 0 }} />
        <Radio.Group
          onChange={e => onChangeSubtitle(e.target.value)}
          defaultValue={subtitleType}
        >
          <Radio.Button value="direct">Direct Link</Radio.Button>
          <Radio.Button value="upload">Upload</Radio.Button>
        </Radio.Group>
        <SubtitleUpload isShow={subtitleType === 'upload' ? true : false}>
          {_mappingUploadSubtitles()}
          <Row gutter={24} type="flex" justify="end" style={{ marginTop: 8 }}>
            <Col span={6}>
              <Button
                type="default"
                size="small"
                onClick={() => handleAddMore('subtitles')}
                block
              >
                <Icon type="plus-circle" />
                Add More
              </Button>
            </Col>
            <Col span={6}>
              <Button
                type="danger"
                size="small"
                onClick={() => handleDeleteMore('subtitles')}
                disabled={dynamicCount.subtitles === 0 ? true : false}
                block
              >
                <Icon type="minus-circle" />
                Delete
              </Button>
            </Col>
          </Row>
        </SubtitleUpload>
        <SubtitleDirect isShow={subtitleType === 'direct' ? true : false}>
          {_mappingDynamicForm()}
          <Row gutter={24} type="flex" justify="end" style={{ marginTop: 8 }}>
            <Col span={6}>
              <Button
                type="default"
                size="small"
                onClick={() => handleAddMore('subtitles')}
                block
              >
                <Icon type="plus-circle" />
                Add More
              </Button>
            </Col>
            <Col span={6}>
              <Button
                type="danger"
                size="small"
                onClick={() => handleDeleteMore('subtitles')}
                disabled={dynamicCount.subtitles === 0 ? true : false}
                block
              >
                <Icon type="minus-circle" />
                Delete
              </Button>
            </Col>
          </Row>
        </SubtitleDirect>
      </Col>
    </div>
  );

  const _mappingDynamicForm = () => {
    let temp = [];

    for (let index = 0; index <= dynamicCount.subtitles; index++) {
      temp.push(
        <Row gutter={24} key={index} style={{ marginBottom: 8 }}>
          <Col span={12}>
            {getFieldDecorator(`subtitleUrl[${index}]`, {
              rules: [
                { required: false, message: 'Please input your subtitle' }
              ],
              initialValue: ''
            })(
              <Input
                placeholder="ex. http://domain.com/subtitle/english.srt"
                size="default"
              />
            )}
          </Col>
          <Col span={12}>
            {getFieldDecorator(`subtitleLabel[${index}]`, {
              rules: [
                { required: false, message: 'Please input your subtitle' }
              ],
              initialValue: ''
            })(
              <Input placeholder={`ex. English-${index + 1}`} size="default" />
            )}
          </Col>
        </Row>
      );
    }

    return temp;
  };

  const _mappingUploadSubtitles = () => {
    let temp = [];

    for (let index = 0; index <= dynamicCount.subtitles; index++) {
      const valueAfterUpload =
        fileSubtitles?.fileList !== undefined
          ? fileSubtitles?.fileList[index] !== undefined
            ? `${Constants.BASE_FIREBASE}/subtitles%2F${fileSubtitles?.fileList[index]?.uid}_${fileSubtitles?.fileList[index]?.name}?alt=media`
            : ''
          : '';
      temp.push(
        <Row gutter={24} key={index} style={{ marginBottom: 8 }}>
          <Col span={3}>
            <UploadDocument type="subtitle" showFiles={false} />
          </Col>
          <Col span={9}>
            {getFieldDecorator(`subtitleUrlUpload[${index}]`, {
              rules: [
                { required: false, message: 'Please input your subtitle' }
              ],
              initialValue: valueAfterUpload
            })(
              <WrapUploadSubtitle>
                <Input disabled size="default" value={valueAfterUpload} />
              </WrapUploadSubtitle>
            )}
          </Col>
          <Col span={12}>
            {getFieldDecorator(`subtitleLabelUpload[${index}]`, {
              rules: [
                { required: false, message: 'Please input your subtitle' }
              ],
              initialValue: ''
            })(
              <Input placeholder={`ex. English-${index + 1}`} size="default" />
            )}
          </Col>
        </Row>
      );
    }

    return temp;
  };

  const _form = () => (
    <Row gutter={24}>
      <Form
        layout="horizontal"
        onSubmit={type === 'movie' ? handleSubmit : handleSubmitSeries}
      >
        {mappingForm()}
        <Col span={24} style={{ marginTop: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={isLoadingSubmit}
          >
            Submit
          </Button>
        </Col>
      </Form>
    </Row>
  );
  return (
    <WrapperFormAddMovie>
      {_form()}
      <ResultPreview isShow={isShowResult}>
        <p>Your Link</p>
        <Input.TextArea
          rows={2}
          value={`https://jwdriveplayer.com/play/${dataMovie._id}`}
        />
        <br />
        <br />
        <p>Embed Source</p>
        <Input.TextArea
          rows={2}
          value={`<iframe src="https://jwdriveplayer.com/play/${dataMovie._id}" frameborder="0" width="100%" height="400" allowfullscreen="allowfullscreen"></iframe>`}
        />
         {/* <br />
        <br />
        <p>Download link</p>
        <Input.TextArea
          rows={2}
          value={`https://www.googleapis.com/drive/v3/files/${dataMovie?.backupDriveId ? dataMovie?.backupDriveId[0] : dataMovie?.driveId}?alt=media&key=AIzaSyC-349q1U-bdyXXDsCqZLS99cwXyiJzKYs`}
        /> */}
      </ResultPreview>
    </WrapperFormAddMovie>
  );
};

export default FormAddMovieComponent;
