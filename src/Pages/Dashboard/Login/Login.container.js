import React, { useEffect } from 'react';
import LoginComponent from './Login.component';
import { Form, message } from 'antd';
import AuthenticationService from '../../../Services/Auth/AuthenticationService';
import Cookies from '../../../Utils/Cookies';

const LoginContainer = props => {
  const userCookies = Cookies.get('user');
  const formFields = [
    {
      label: 'Email',
      required: true,
      field_name: 'email',
      type: 'email',
      size: 24,
      initialValue: '',
      placeholder: 'member@jwdriveplayer.com'
    },
    {
      label: 'Password',
      required: true,
      field_name: 'password',
      type: 'password',
      size: 24,
      initialValue: '',
      placeholder: '12387das8123'
    }
  ];

  const onSubmit = async event => {
    event.preventDefault();
    await props.form.validateFields(async (err, values) => {
      if (!err) {
        await AuthenticationService.POST_LOGIN(values)
          .then(async login => {
            await Cookies.set('user', JSON.stringify(login));
            props.history.push('/dashboard')
          })
          .catch(() => message.error('Incorect email/password !'));
      }
    });
  };
  
  useEffect(()=>{
    if(userCookies !== null) {
      props.history.push('/dashboard')
    }
  }, [props.history, userCookies])

  return (
    <div>
      <LoginComponent
        formFields={formFields}
        form={props.form}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const WrapperLoginContainer = Form.create({
  name: 'LoginContainer'
})(LoginContainer);

export default WrapperLoginContainer;
