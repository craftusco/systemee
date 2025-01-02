"use client";
import React, { useState } from "react";
import { Checkbox, Col, Form, Row, Table, Input, ColorPicker, message } from "antd";
import { useForm } from "@inertiajs/react";

const FormBody = (props) => {
    const { initialData } = props;
    const [form] = Form.useForm();
    // Initialize the form with Inertia's useForm hook
    const { data, setData, post, processing } = useForm({
        permissions: initialData,
    });

    // Gestione del submit
    const handleSubmit = () => {
        console.log("form:", data);
        post("store", {
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
        <>
            <Form
                layout="vertical"
                name="form-reminder"
                form={form}
                onFinish={handleSubmit}
                disabled={processing}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Nome ruolo"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Inserisci il nome del ruolo",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Colore"
                            name="color"
                            initialValue="#1677ff"
                        >
                            <ColorPicker showText/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default FormBody;
