import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from 'redux/auth';
import 'antd/dist/antd.css';
import { LockOutlined,SettingFilled } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import s from './SingInForm.module.css'



const SingInForm = () => {

  const dispatch = useDispatch()
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isBtnDisabled = !email || !password;

  const onFinish = (values) => {
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    
    <Form
      name="normal_login"
      className={s.loginForm}
      initialValues={{
        remember: true,
      }}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
    >
      
      <Form.Item
        name="email"
        label="E-mail"
        onChange={e =>setEmail(e.target.value)}
        
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
        onChange={e =>setPassword(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          className={s.containerInput}
          prefix={<LockOutlined className={s.siteFormItemIcon} />}
          type="password"
          placeholder=" Please enter your password  ..."
        />
      </Form.Item>


      <Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className={s.button}
          disabled={isBtnDisabled}
          >
          Log in
            </Button>
            <div className={s.textContainer}>
              <p>Or </p>
               <a
            className={s.link}
            href="/register">Register Now!</a>
            </div>
      </Form.Item>
    </Form>
  );
};

export default SingInForm;