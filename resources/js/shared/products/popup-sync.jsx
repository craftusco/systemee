import React, { useState } from "react";
import {
    Button,
    Modal,
    Row,
    Col,
    Typography,
    List,
    Divider,
    Form,
    InputNumber,
    Input,
    Avatar,
    Splitter,
    Flex,
} from "antd";
const { Title } = Typography;
import FormBody from "./form-body";
import { IconCloudUpload } from "@tabler/icons-react";
import SelectCategory from "../form-fields/select-category";

const PopupSync = ({ opened, toggle, reload, data, onSave }) => {
    // const { id } = router.query;
    console.log("popup-selected", data);
    const [loading, setLoading] = useState(false);
    const [isFormChanged, setIsFormChanged] = useState(false);

    const nativeProduct = [
        { label: "Nome del Prodotto", value: data?.name },
        { label: "SKU", value: data?.sku },
        { label: "Prezzo", value: data?.price },
        { label: "Prezzo Regolare", value: data?.regular_price },
        { label: "Prezzo Scontato", value: data?.sale_price },
        { label: "Stato Scorte", value: data?.stock_status },
        {
            label: "Categorie",
            value: data?.categories?.map((cat) => cat.name).join(", "),
        },
        { label: "Tag", value: data?.tags?.map((tag) => tag.name).join(", ") },
        { label: "Descrizione", value: data?.description },
        { label: "Descrizione Breve", value: data?.short_description },
        { label: "Peso", value: data?.weight },
        {
            label: "Dimensioni",
            value: `${data?.dimensions?.length} x ${data?.dimensions?.width} x ${data?.dimensions?.height}`,
        },
        { label: "Quantità in Stock", value: data?.stock_quantity },
        { label: "Data di Creazione", value: data?.date_created },
        { label: "Data di Modifica", value: data?.date_modified },
    ];

    return (
        <Modal
            open={opened}
            onCancel={toggle}
            width={"80%"}
            transitionName="ant-modal-slide-up"
            title="Anteprima sincronizzazione prodotti"
            centered
            maskClosable={false}
            destroyOnClose={true}
            footer={[
                <Button key={0} onClick={toggle}>
                    Chiudi
                </Button>,
                <Button
                    // disabled={!formChanged}
                    key="submit"
                    type="primary"
                    htmlType="submit"
                    form="form-contact"
                    loading={loading}
                    icon={<IconCloudUpload />}
                    //disabled={!isFormChanged}
                >
                    Carica
                </Button>,
            ]}
        >
            <Flex vertical gap="middle">
                <Splitter>
                    <Splitter.Panel resizable={true}>
                        <Title level={5}>Fornitore</Title>
                        <Divider />
                        <List
                            dataSource={nativeProduct}
                            renderItem={(item) => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.label}
                                        description={item.title}
                                    />
                                    <span>{item.value}</span>
                                </List.Item>
                            )}
                        />
                    </Splitter.Panel>
                    <Splitter.Panel>
                        <Title level={5}>Woocommerce anteprima</Title>
                        <Form>
                            <Form.Item
                                label="Nome"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input!",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Prezzo"
                                name="price"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input!",
                                    },
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item>
                                <SelectCategory />
                            </Form.Item>
                        </Form>
                    </Splitter.Panel>
                </Splitter>
            </Flex>
        </Modal>
    );
};

export default PopupSync;
