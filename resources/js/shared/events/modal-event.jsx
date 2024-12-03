"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Flex,
  DatePicker,
} from "antd";
import * as dayjs from "dayjs";
import { useForm } from "@inertiajs/react";
const { TextArea } = Input;

const ModalEvent = (props) =>{
  const { isOpened, onClose, initialData } = props;
  const { data, setData, post, processing } = useForm({
    title: "",
    descripton: "",
});

  const [form] = Form.useForm();
  const [formTouched, setFormTouched] = useState(false);
//   const mutation = initialData ? useUpdate() : useCreate();

   // Gestione del submit
   const handleSubmit = () => {
    console.log('form:', data);
    post("login", {
        onSuccess: () => {
            message.success("Accesso effettuato con successo!");
        },
        onError: () => {
            message.error("Errore nei dati di accesso, controlla e riprova.");
        },
    });
};

  return (
    <Modal
      open={isOpened}
      transitionName="ant-modal-slide-up"
      centered
      maskClosable={false}
      onCancel={onClose}
      title={initialData ? "Modifica evento" : "Nuovo evento"}
      footer={
        <Flex gap={12}>
          <Button block type="default" onClick={onClose}>
            Chiudi
          </Button>
          <Button
            type="primary"
            block
            htmlType="submit"
            aria-label="Salva"
            form="form-reminder"
            loading={processing}
            disabled={!formTouched || processing}
          >
            Salva
          </Button>
        </Flex>
      }
    >
      <Form
        layout="vertical"
        name="form-reminder"
        form={form}
        onFinish={handleSubmit}
        disabled={processing}
        onValuesChange={() => setFormTouched(true)}
      >
        <Form.Item
          label="Titolo"
          name="title"
          initialValue={initialData?.title}
          rules={[{ required: true, message: "Il campo è obbligatorio" }]}
        >
          <Input allowClear/>
        </Form.Item>
        <Form.Item
          label="Data e ora"
          name="date"
          rules={[{ required: true, message: "Il campo è obbligatorio" }]}
        >
          <DatePicker showTime placement="topRight" format="DD-MM-YYYY HH:mm" minuteStep={10} hourStep={1} />
        </Form.Item>

        <Form.Item
          label="Descrizione"
          name="content"
          initialValue={initialData?.content}
        >
          <TextArea rows={6} placeholder="Descrivi l'attività" allowClear />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalEvent;