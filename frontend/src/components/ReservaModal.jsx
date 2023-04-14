import React, { useState, useEffect } from 'react';

import { Button, Checkbox, Form, Input, Modal, message, Select } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { store } from '../store';
const { useModelState, getModelDispatchers } = store;

const arrayHs = [
  { id: 1, horaFormat: '18:00:00', hora: '18:00' },
  { id: 2, horaFormat: '19:00:00', hora: '19:00' },
  { id: 3, horaFormat: '20:00:00', hora: '20:00' },
  { id: 4, horaFormat: '21:00:00', hora: '21:00' },
];
const ReservaModal = ({ handleModalReserva, isReservaModalOpen }) => {
  const { getAllSoccerFields } = getModelDispatchers('cancha');
  const { getAllDatesByCanchaId } = getModelDispatchers('fecha');
  const { getAllTimesByCanchaId } = getModelDispatchers('horario');

  const { canchas } = useModelState('cancha');
  const { fechas } = useModelState('fecha');
  const { horarios } = useModelState('horario');
  const [loading, setLoading] = useState(false);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedFecha, setSelectedFecha] = useState(null);

  const [formReserva] = Form.useForm();

  useEffect(() => {
    getAllSoccerFields();
  }, []);

  const handleOk = () => {
    setLoading(true);
    // formReserva
    //   .validateFields()
    //   // .then((values) => login(values))
    //   .then((resp) => {
    //     message.info(resp);
    //     handleModalReserva();
    //     setLoading(false);
    //     formReserva.resetFields();
    //   })
    //   .catch((error) => message.error(error));
    setTimeout(() => {
      message.info('Su reserva ha sido enviado');
      handleModalReserva();
    }, 1000);
  };

  const handleCanchaChange = (value) => {
    setSelectedCourt(value);
    getAllDatesByCanchaId(value);
    console.log(fechas);
  };
  const handleFechaChange = (value) => {
    setSelectedFecha(value);
    getAllTimesByCanchaId(value);
    console.log(horarios);
  };

  return (
    <Modal
      title="Realizar una reserva"
      open={isReservaModalOpen}
      onOk={handleOk}
      onCancel={handleModalReserva}
      okText="Enviar"
      cancelText="Salir"
      footer={[
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
        className="reserva-form"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        form={formReserva}
      >
        <Form.Item name="cancha">
          <Select
            placeholder="Seleccione una cancha"
            onChange={handleCanchaChange}
          >
            {canchas.map((cancha) => (
              <Option key={cancha.id} value={cancha.id}>
                {cancha.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="fecha">
          <Select
            placeholder="Seleccione una fecha"
            onChange={handleFechaChange}
          >
            {fechas?.map((date) => (
              <Option key={date.id} value={date.date}>
                {date.date}
              </Option>
            ))}
          </Select>

          <Select placeholder="Seleccione un horario">
            {arrayHs?.map((date) => (
              <Option key={date.id} value={date.horaFormat}>
                {date.hora}
              </Option>
            ))}
          </Select>
        </Form.Item>
        {/* <Form.Item
          name="fecha"
          rules={[
            {
              required: true,
              message: 'Por favor seleccione una fecha!',
            },
          ]}
        >
          <Select
            placeholder="Seleccione una fecha"
            disabled={disabledDates}
            onChange={(value) => {
              setSelectedDate(value);
              setHours([]);
              setSelectedHour(null);
              setDisabledHours(true);
              fetchHours(selectedCourt, value);
            }}
          >
            {dates.map((date) => (
              <Option key={date} value={date}>
                {moment(date).format('dddd, D MMMM')}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="horario"
          rules={[
            {
              required: true,
              message: 'Por favor seleccione un horario!',
            },
          ]}
        >
          <Select
            placeholder="Seleccione un horario"
            disabled={disabledHours}
            onChange={(value) => setSelectedHour(value)}
          >
            {hours.map((hour) => (
              <Option key={hour} value={hour}>
                {moment(hour).format('HH:mm')}
              </Option>
            ))}
          </Select>
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default ReservaModal;
