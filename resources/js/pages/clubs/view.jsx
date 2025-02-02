import React, { useState, useEffect } from "react";
import {
    Button,
    Avatar,
    Typography,
    Row,
    Col,
    Statistic,
    Space,
    Card,
} from "antd";
const { Text, Title } = Typography;

import {
    IconEye,
    IconCloudUpload,
    IconReload,
    IconClock,
    IconBox,
} from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import { dateTimeFormatter } from "@/helpers/formatter";
import AppLayout from "@/layouts/app-layout";


const View = (props) => {
    const { data, processing } = props;
    const { products } = data;
    const [selected, setSelected] = useState(null);
    const [reload, setReload] = useState(null);

    console.log("🦄 page:", props);


    const columns = [
        {
            title: "Nome",
            key: "name",
            
            render: (record) => (
                <Link href={`/artists/${record?.id}`}>
                    <Space>
                        <Avatar
                            
                            shape="square"
                            src={record?.iamge || "/images/placeholder.svg"}
                        />
                        {record?.name}
                    </Space>
                </Link>
            ),
        },
        {
            title: "Creato il",
            key: "created_at",
            align: "right",
            render: (record) => (
                <span>{dateTimeFormatter(record?.created_at)}</span>
            ),
        },
        {
            
            key: "actions",
            align: "right",
            render: (record) => (
                <Space.Compact>
                    <Link href={`/artists/${record?.name}`}>
                        <Button icon={<IconEye />}>Visualizza</Button>
                    </Link>
                    <Button
                        icon={<IconCloudUpload />}
                        onClick={() => togglePopup(record)}
                    >
                        Carica
                    </Button>
                </Space.Compact>
            ),
        },
    ];

    const navLinks = [
        {
            label: "Tot. Artisti",
            value: data?.total_events || 0,
            icon: <IconBox />,
            url: "/artists",
        }
    ];


    console.log("selected-state", selected);
    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelected(selectedRowKeys);

            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
        },
    };

    return (
        <AppLayout backLink="/clubs"
                title={
                    <>
                        {" "}
                        Dettagli Club - <mark>{data?.name}</mark>
                    </>
                }
                extra={[
                    <Space>
                        {/* <Button type="primary" icon={<IconPencil/>}>Modifica</Button> */}
                        <Button type="primary" icon={<IconReload />}>
                            Aggiorna catalogo
                        </Button>
                    </Space>,
                ]}
            >
            <div className="page-content">
                <Row gutter={[16, 16]}>
                    {navLinks.map((item, i) => (
                        <Col
                            span={4}
                            xl={6}
                            lg={6}
                            md={4}
                            sm={24}
                            xs={24}
                            key={i}
                        >
                            <Card>
                                <Link href={item.url}>
                                    <Statistic
                                        title={item.label}
                                        value={item.value}
                                        prefix={item.icon}
                                    />
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
               
            </div>
            </AppLayout>
    );
};

export default View;
