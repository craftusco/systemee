import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    Button,
    Avatar,
    Typography,
    List,
    Tag,
    Statistic,
    Space,
    Dropdown,
} from "antd";
const { Text, Title } = Typography;
const { Meta } = Card;

import {
    IconCompass,
    Icon123,
    IconActivity,
    IconUserCircle,
    IconMoneybag,
    IconUpload,
    IconCloudUpload,
    IconClock,
    IconDots,
    IconTrash,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import FormBody from "@/shared/artists/form-body";
import AppLayout from "@/layouts/app-layout";

const View = (props) => {
    const { data, processing } = props;

    console.log("🦄 page:", props);

    const productInfo = [
        { label: "ID", value: data?.id },
        { label: "Nome del Prodotto", value: data?.name },
        { label: "SKU", value: data?.sku },
        { label: "Prezzo", value: data?.price },
    ];

    const tableActions = [
        {
            onClick: () => setModal(!modal),
            label: "Modifica",
        },
        {
            type: "divider",
        },
        {
            key: 2,
            danger: true,
            icon: <IconTrash />,
            disabled: true,
            label: "Elimina",
            // onClick: async () => {
            //   if (selected?.user_id) {
            //     handleDelete(selected?.user_id);
            //   } else {
            //     console.error('documentId is undefined');
            //   }
            // },
        },
    ];

    return (
        <AppLayout
            backUrl="/artists"
            title={`Artista - ${data?.name}`}
            subTitle={`Club - ${data?.supplier?.name}`}
            extra={
                <Space>
                    <Dropdown
                        menu={{ items: tableActions }}
                        placement="bottomRight"
                        trigger={["click"]}
                    >
                        <Button icon={<IconDots />}>
                            Altro
                        </Button>
                    </Dropdown>
                </Space>
            }
        >
            <div className="page-content">
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card title="Dettagli prodotto">
                            <List
                                dataSource={productInfo}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Text strong>{item.label}:</Text>{" "}
                                        <Text>{item.value}</Text>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                       
                    </Col>
                </Row>
            </div>
        </AppLayout>
    );
};

export default View;
