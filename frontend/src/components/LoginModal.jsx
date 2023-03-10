import React from 'react';
import { useState } from 'react';

import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginModal = ({ isLoginModalOpen, setIsLoginModalOpen }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {    
    // TODO: llamada a la API para hacer login
    form
      .validateFields()
      .then((values) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setIsLoginModalOpen(false);
          form.resetFields();        
        }, 3000);
      })
      .catch((info) => {        
        console.log('Validate Failed:', info);
      });
  };
  const handleCancel = () => {
    form.resetFields();
    setIsLoginModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Modal
      title="Iniciar Sesion"
      open={isLoginModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Registrarse
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Enviar
        </Button>,
      ]}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor, introduzca su email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor, introduzca su contraseña!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Contraseña"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recuerdamé</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Olvidé mi contraseña
          </a>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
