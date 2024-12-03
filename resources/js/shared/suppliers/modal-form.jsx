"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Row,
  Col,
  Flex,
  DatePicker,

} from "antd";
import * as dayjs from "dayjs";
import { useCreate, useUpdate } from "@/lib/query";
const { TextArea } = Input;

const ModalSupplier = (props) =>{
  const { isOpened, onClose, initialData, resource } = props;

  const [form] = Form.useForm();
  const [formTouched, setFormTouched] = useState(false);
  const mutation = initialData ? useUpdate() : useCreate();

  const handleSubmit = async (values) => {
    const payload = {
      resource,
      appendUser: true,
      body: {
        ...values,
        date: dayjs(values.date).format("DD-MM-YYYY HH:mm:ss")
      },
    };

    if (initialData) {
      payload.id = initialData?.documentId;
    }

    try {
      await mutation.mutateAsync(payload);
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Modal
      open={isOpened}
      transitionName="ant-modal-slide-up"
      centered
      onCancel={onClose}
      title={initialData ? "Modifica promemoria" : "Nuovo promemoria"}
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
          <Input allowClear />
        </Form.Item>
        <Form.Item
          label="Data e ora"
          name="date"
          initialValue={dayjs(initialData?.date) || null}
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

export default ModalSupplier;