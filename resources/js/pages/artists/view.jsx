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
    IconDots,
    IconPencilMinus,
    IconTrash,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import FormBody from "@/modules/artists/form-body";
import AppLayout from "@/layouts/app-layout";
import { dateFormatter } from "@/helpers/formatter";

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
            icon: <IconPencilMinus />,
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
            backLink="/artists"
            title={`Artista - ${data?.name}`}
            subTitle={`Creato il - ${dateFormatter(data?.created_at)}`}
            extra={
                <Space>
                    <Dropdown
                        menu={{ items: tableActions }}
                        placement="bottomRight"
                        trigger={["click"]}
                    >
                        <Button icon={<IconDots />} type="text">
                            Altro
                        </Button>
                    </Dropdown>
                </Space>
            }
        >
            <div className="page-content">
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <FormBody initialData={data} processing={processing} />
                    </Col>
                    <Col span={12}>
                       
                    </Col>
                </Row>
            </div>
        </AppLayout>
    );
};

export default View;
