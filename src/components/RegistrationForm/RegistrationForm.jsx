import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';


import 'antd/dist/antd.css';
import {
  SettingFilled,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import s from './RegistrationForm.module.css';


const RegistrationForm = () => {

  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    const { email, name, password } = values;
  
    dispatch(authOperations.register({ name, email, password }));

    reset()
  };
 
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  }
 
   
  const isBtnDisabled = !name || !email || !password;

  return (
    <div
      className={s.loginForm}>
     <Form
      name="basic"
        
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}

      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
      
        label="UserName"
        name="name"
        onChange={e => setName(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input 
        className={s.containerInput} 
        placeholder={` Please enter your name  ...`} 
        prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        onChange={e => setEmail(e.target.value)}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
        className={s.containerInput} 
        placeholder=" Please enter your e-mail with -> @  :)"
        prefix={<SettingFilled />}/> 
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={e => setPassword(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password  
        className={s.containerInput} 
        placeholder=" Please enter your password  ..."
        prefix={<LockOutlined />}
        
        />
      </Form.Item>
      
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        >
          <Button
          type="primary"
          htmlType="submit"
          disabled ={isBtnDisabled}>
          Submit
        </Button >

      </Form.Item>
    </Form>

    </div>

  );

  
};

export default RegistrationForm;