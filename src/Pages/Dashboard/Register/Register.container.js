import React, { useEffect } from 'react';
import { Form, message } from 'antd';
import Cookies from '../../../Utils/Cookies';
import RegisterComponent from './Register.component';
import Jwplayer from '../../../Services/Jwplayer/Jwplayer';

const RegisterContainer = props => {
  const userCookies = Cookies.get('user');
  const formFields = [
    {
      label: 'Name',
      required: true,
      field_name: 'name',
      type: 'name',
      size: 24,
      initialValue: '',
      placeholder: 'Joko Robert'
    },
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
        await Jwplayer.POST_REGISTER(values).then(
          res => {
            if(res) {
              message.success(`Successfully register`)
              props.history.push('/dashboard/login')
            }
          }
        ).catch(() => message.error(`Can't register, please contact admin`))
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
      <RegisterComponent
        formFields={formFields}
        form={props.form}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const WrapperRegisterContainer = Form.create({
  name: 'RegisterContainer'
})(RegisterContainer);

export default WrapperRegisterContainer;
