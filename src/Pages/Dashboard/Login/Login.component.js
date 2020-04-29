import React from 'react';
import { _mappingItemForm } from '../../../Utils/formUtils';
import { WrapperLogin } from './Login.style';
import { Row, Col, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

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
            <Col span={24} style={{ marginTop: 8 }}>
              <p>
                {`Don't have account ?`}
               <Link to="/dashboard/register">Create new account</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </div>
    </WrapperLogin>
  );
};

export default LoginComponent;
