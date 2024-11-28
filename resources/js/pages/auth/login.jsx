"use client";
import AuthLayout from "@/layouts/auth-layout";
import { Button, Form, Input, message } from "antd";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

const Login = (props) => {
    const [form] = Form.useForm();
    const [formTouched, setFormTouched] = useState(false);
    const { data, setData, isDirty, processing, post, errors } = useForm({
        email: "",
        password: "",
    });
    //Handle Form
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            post("login", {
                ...data,
                onSuccess: () => {
                    message.success({
                        title: "Accesso effettuato",
                        status: "success",
                    });
                },
                onError: (e) => {
                    console.log("error", e);
                    message.error({
                        title: "Dati errati",
                        status: "error",
                    });
                },
            });
        } catch (error) {
            console.error(error);
            toast({
                title: "Errore generico",
                status: "error",
            });
        }
    };

    return (
        <AuthLayout title="Accedi">
            <Form
                layout="vertical"
                autoComplete="false"
                form={form}
                onFinish={handleSubmit}
                disabled={processing}
                onValuesChange={() => setFormTouched(true)}
            >
                <Form.Item
                    name="identifier"
                    autoComplete="off"
                    rules={[
                        { required: true, message: "Il campo è obbligatorio" },
                    ]}
                >
                    <Input autoComplete="off" placeholder="Inserisci email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "La password è obbligatoria",
                        },
                    ]}
                >
                    <Input.Password placeholder="Conferma password" />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        aria-label="Login"
                        type="primary"
                        block
                        loading={processing}
                        disabled={processing || !formTouched}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <div className="my-4 text-center">
                <p className="text-primary">Hai problemi ad accedere?</p>
                <Link href="mailto:" target="_blank" className="underline">
                    Contattaci
                </Link>
            </div>
        </AuthLayout>
    );
};

export default Login;
