import React from 'react';
import { _mappingItemForm } from '../../../Utils/formUtils';
import { WrapperLogin } from './Login.style';
import { Row, Col, Button, Form } from 'antd';

const LoginComponent = props => {
  const { formFields, form, onSubmit } = props;

  return (
    <WrapperLogin>
      <div className="form-login">
        <Form layout="horizontal" onSubmit={onSubmit}>
          <Row>
            {_mappingItemForm(formFields, form.getFieldDecorator)}
            <Col span={24} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit" block loading={null}>
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </WrapperLogin>
  );
};

export default LoginComponent;
