import React from 'react';
import { Alert } from 'antd';

const HomeComponent = props => {
  const { isShowVerifMessage } = props;

  return (
    <div>
      {isShowVerifMessage && (
        <Alert
          message={`Your account isn't verified`}
          description="Request to admin to verified your account. Your account will be deleted if still not verified"
          type="info"
          showIcon
        />
      )}
    </div>
  );
};

export default HomeComponent;
