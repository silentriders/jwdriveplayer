import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import { _mappingItemForm } from '../../../Utils/formUtils';
import { WrapperRegister } from './Register.style';
import { Link } from 'react-router-dom';

const RegisterComponent = (props) => {
  const { formFields, form, onSubmit } = props;
  return (
    <WrapperRegister>
      <div className="form-register">
        <Form layout="horizontal" onSubmit={onSubmit}>
          <Row>
            {_mappingItemForm(formFields, form.getFieldDecorator)}
            <Col span={24} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit" block loading={null}>
                Register
              </Button>
            </Col>
            <Col span={24} style={{ marginTop: 8 }}>
              <p>
                {`Already have account ?`}
               <Link to="/dashboard/login">Login</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </div>
    </WrapperRegister>
  );
};

export default RegisterComponent;