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

    const tableActions = [
        {
          onClick: () => setModal(!modal),
          label: "Modifica",
          icon: <IconPencilMinus />,
          onClick: () => router.visit(`/requests/${selected?.id}`),
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
                    subTitle={`Club - ${data?.created_at}`}
                    extra={
                        <Space>
                          <Dropdown
                            menu={{ items: tableActions }}
                            placement="bottomRight"
                            trigger={["click"]}
                          >
                            <Button type="text" icon={<IconDots />}>
                              Altro
                            </Button>
                          </Dropdown>
                        </Space>
                      }
                >
                <div className="page-content">
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Card title="Dettagli">
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
