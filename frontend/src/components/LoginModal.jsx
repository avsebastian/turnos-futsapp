import React from 'react';

import { Button, Checkbox, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { store } from '../store';
const { useModelState, getModelDispatchers } = store;

const LoginModal = ({ handleClose, isLoginModalOpen }) => {

  const { login } = getModelDispatchers('authentication');
  
  const [formLogin] = Form.useForm();

  const handleOk = () => {
    formLogin.validateFields().then((values) => {
      login(values);
      handleClose();
      formLogin.resetFields();
    });
  };

  // const handleCancel = () => {
  //   formLogin.resetFields();
  //   handleClose();
  //   //onCancel();
  // };

  const handleRegisterClick = () => {
    formLogin.resetFields();
    //onRegisterClick();
  };
  return (
    <Modal
      title="Iniciar Sesion"
      open={isLoginModalOpen}
      onOk={handleOk}
      //onCancel={handleCancel}
      onCancel={handleClose}
      //confirmLoading={loading}
      okText="Enviar"
      cancelText="Registrarse"
      footer={[
        <Button key="cancel" onClick={handleClose}>
          Registrarse
        </Button>,
        <Button
          key="submit"
          type="primary"
          //loading={loading}
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
        // onFinish={onFinish}
        form={formLogin}
      >
        <Form.Item
          name="email"
          label="Correo Electronico"
          rules={[
            {
              required: true,
              message: 'Por favor, introduzca su email!',
            },
            {
              type: 'email',
              message: 'Introduzca un email valido',
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
          label="Contraseña"
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
