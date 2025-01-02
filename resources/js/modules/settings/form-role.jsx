"use client";
import React, { useState } from "react";
import { Checkbox, Col, Form, Row, Table, Input, ColorPicker, message } from "antd";
import { useForm } from "@inertiajs/react";

const FormRole = (props) => {
    const { initialData } = props;
    const [form] = Form.useForm();
    // Initialize the form with Inertia's useForm hook
    const { data, setData, post, processing } = useForm({
        permissions: initialData,
    });

    // Handle checkbox changes
    const handlePermissionChange = (recordKey, permissionType, checked) => {
        setData("permissions", (permissions) =>
            permissions.map((item) =>
                item.key === recordKey
                    ? {
                          ...item,
                          permissions: {
                              ...item.permissions,
                              [permissionType]: checked,
                          },
                      }
                    : item
            )
        );
    };

    // Define table columns
    const columns = [
        {
            title: "Pagina",
            dataIndex: "pageName",
            key: "pageName",
        },
        {
            title: "Creazione",
            dataIndex: "permissions",
            key: "create",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.create}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "create",
                            e.target.checked
                        )
                    }
                />
            ),
        },
        {
            title: "Lettura",
            dataIndex: "permissions",
            key: "read",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.read}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "read",
                            e.target.checked
                        )
                    }
                />
            ),
        },
        {
            title: "Modifica",
            dataIndex: "permissions",
            key: "update",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.update}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "update",
                            e.target.checked
                        )
                    }
                />
            ),
        },
        {
            title: "Eliminazione",
            dataIndex: "permissions",
            key: "delete",
            render: (_, record) => (
                <Checkbox
                    key={record.key}
                    checked={record.permissions.delete}
                    onChange={(e) =>
                        handlePermissionChange(
                            record.key,
                            "delete",
                            e.target.checked
                        )
                    }
                />
            ),
        },
    ];

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
            <Table
                dataSource={initialData}
                columns={columns}
                pagination={false}
                key="uuid"
            />
        </>
    );
};

export default FormRole;
