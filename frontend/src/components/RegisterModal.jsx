import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const RegisterModal = ({ open, onCancel, onOk, loading, onLoginClick }) => {
  const [formRegister] = Form.useForm();

  const handleOk = () => {
    formRegister.validateFields().then((values) => {
      onOk(values);
      formRegister.resetFields();
    });
  };
  const handleCancel = () => {
    formRegister.resetFields();
    onCancel();
  };

  const handleLoginClick = () => {
    formRegister.resetFields();
    onLoginClick();
  };
  return (
    <Modal
      title="Registrarse"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={loading}
      okText="Enviar"
      cancelText="Iniciar Sesion"
      footer={[
        <Button key="cancel" onClick={handleLoginClick}>
          Iniciar Sesion
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
        name="normal_register"
        className="register-form"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        form={formRegister}
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
      </Form>
    </Modal>
  );
};

export default RegisterModal;
