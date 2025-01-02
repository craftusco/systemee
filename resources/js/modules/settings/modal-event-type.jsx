"use client";
import React, { useState } from "react";
import {
    Button,
    Form,
    Input,
    Drawer,
    Space,
    ColorPicker,
    Row,
    Col
} from "antd";
import { useForm } from "@inertiajs/react";
const { TextArea } = Input;

const ModalEventType = (props) => {
    const { isOpened, onClose, initialData } = props;
    const { data, setData, post, processing, isDirty } = useForm({
        title: "",
        color: "",
    });

    const [form] = Form.useForm();
    //   const mutation = initialData ? useUpdate() : useCreate();

    // Gestione del submit
    const handleSubmit = () => {
        console.log("form:", data);
        post("login", {
            onSuccess: () => {
                message.success("Accesso effettuato con successo!");
            },
            onError: () => {
                message.error(
                    "Errore nei dati di accesso, controlla e riprova."
                );
            },
        });
    };

    return (
        <Drawer
            key="drawer-event-types"
            open={isOpened}
            size="large"
            onClose={onClose}
            title={
                initialData
                    ? "Modifica tipologia evento"
                    : "Crea tipologia evento"
            }
            extra={
                <Space>
                    <Button type="default" onClick={onClose}>
                        Chiudi
                    </Button>
                    <Button
                        type="primary"
                        htmlType="submit"
                        aria-label="Salva"
                        form="form-event-type"
                        loading={processing}
                        disabled={isDirty | processing}
                    >
                        Salva
                    </Button>
                </Space>
            }
        >
            <Form
                layout="vertical"
                name="form-event-type"
                form={form}
                onFinish={handleSubmit}
                disabled={processing}
            >
                <Row gutter={16}>
                    <Col span={18}>
                        <Form.Item
                            label="Titolo"
                            name="title"
                            initialValue={initialData?.title}
                            rules={[
                                {
                                    required: true,
                                    message: "Il campo è obbligatorio",
                                },
                            ]}
                        >
                            <Input allowClear />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            label="Colore"
                            name="date"
                            rules={[
                                {
                                    required: true,
                                    message: "Il campo è obbligatorio",
                                },
                            ]}
                        >
                            <ColorPicker />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    label="Descrizione"
                    name="description"
                    initialValue={initialData?.content}
                >
                    <TextArea
                        rows={6}
                        placeholder="Note aggiuntive"
                        allowClear
                    />
                </Form.Item>
            </Form>
        </Drawer>
    );
};

export default ModalEventType;
