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
} from "antd";
const { Text, Title } = Typography;
const { Meta } = Card;
import PageActions from "@/shared/components/page-actions";
import {
    IconCompass,
    Icon123,
    IconActivity,
    IconUserCircle,
    IconMoneybag,
    IconUpload,
    IconCloudUpload,
    IconClock,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import FormBody from "@/shared/products/form-body";

const View = (props) => {
    const { data, processing } = props;

    console.log("🦄 page:", props);

    const productInfo = [
        { label: "ID", value: data?.id },
        { label: "Nome del Prodotto", value: data?.name },
        { label: "SKU", value: data?.sku },
        { label: "Prezzo", value: data?.price },
        { label: "Prezzo Regolare", value: data?.regular_price },
        { label: "Prezzo Scontato", value: data?.sale_price },
        { label: "Stato Scorte", value: data?.stock_status }, // Stato delle scorte (Disponibile, Non disponibile)
        {
            label: "Categorie",
            value: data?.categories?.map((cat) => cat.name).join(", "),
        }, // Categorie
        { label: "Tag", value: data?.tags?.map((tag) => tag.name).join(", ") }, // Tag
        { label: "Descrizione", value: data?.description }, // Descrizione
        { label: "Descrizione Breve", value: data?.short_description }, // Descrizione breve
        { label: "Peso", value: data?.weight }, // Peso del prodotto
        {
            label: "Dimensioni",
            value: `${data?.dimensions?.length} x ${data?.dimensions?.width} x ${data?.dimensions?.height}`,
        }, // Dimensioni (Lunghezza, Larghezza, Altezza)
        { label: "Quantità in Stock", value: data?.stock_quantity }, // Quantità in stock
        { label: "Data di Creazione", value: data?.date_created }, // Data di creazione
        { label: "Data di Modifica", value: data?.date_modified }, // Data di modifica
    ];

    return (
        <>
            <div className="page">
                <PageActions
                    backUrl="/products"
                    title={
                        <>
                            {" "}
                            Dettagli prodotto - <mark>{data?.name}</mark>
                        </>
                    }
                    subTitle={`Fornitore - ${data?.supplier?.name}`}
                    extra={[
                        <Space>
                            <Button
                                icon={<IconCloudUpload />}
                                onClick={setIsOpen}
                            >
                                Sincronizza
                            </Button>
                        </Space>,
                    ]}
                />
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
                        <Card title="Lista prezzi">
                            <FormBody data={data} />
                        </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default View;
