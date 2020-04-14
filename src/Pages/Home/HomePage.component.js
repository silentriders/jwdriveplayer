import React from 'react';
import { FormAddMovie } from '../../Containers';
import { Row, Col } from 'antd';

const HomePageComponent = props => {
  return (
    <div>
      <Row>
        <Col span={24}>
        <h1>Add Movie</h1>
        <FormAddMovie />
        </Col>
        <Col span={24}>
        <h1>Add Series</h1>
        <FormAddMovie type='series' />
        </Col>
      </Row>
    </div>
  );
};

export default HomePageComponent;
