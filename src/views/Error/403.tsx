import { Result, Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME_URL } from '@/config';

const View: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(HOME_URL);
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={goHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default View;
