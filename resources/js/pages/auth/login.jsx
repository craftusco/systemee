"use client";
import AuthLayout from "@/layouts/auth-layout";
import { Button, Form, Input, message } from "antd";
import { Link, useForm } from "@inertiajs/react";

const Login = (props) => {
    const [form] = Form.useForm();
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    // Sincronizza i valori del form con i dati di Inertia
    const handleFormChange = (changedValues, allValues) => {
        setData(allValues); // Aggiorna i dati con i valori correnti del form
    };

    console.log('form:', data);
    
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
        <AuthLayout title="Accedi">
            <Form
                layout="vertical"
                autoComplete="off"
                form={form}
                onValuesChange={handleFormChange}
                onFinish={handleSubmit}
                disabled={processing}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    validateStatus={errors.email ? "error" : ""}
                    help={errors.email || ""}
                    rules={[
                        {
                            required: true,
                            message: "Il campo email è obbligatorio.",
                        },
                        {
                            type: "email",
                            message: "Inserisci un'email valida.",
                        },
                    ]}
                >
                    <Input placeholder="Inserisci email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    validateStatus={errors.password ? "error" : ""}
                    help={errors.password || ""}
                    rules={[
                        {
                            required: true,
                            message: "La password è obbligatoria.",
                        },
                    ]}
                >
                    <Input.Password placeholder="Inserisci la password" />
                </Form.Item>
                <Form.Item>
                    <Button
                        htmlType="submit"
                        type="primary"
                        block
                        loading={processing}
                    >
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <div className="my-4 text-center">
                <p className="text-primary">Hai problemi ad accedere?</p>
                <Link href="mailto:support@example.com" target="_blank" className="underline">
                    Contattaci
                </Link>
            </div>
        </AuthLayout>
    );
};

export default Login;
