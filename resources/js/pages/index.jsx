import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Avatar, Typography, Statistic } from "antd";
const { Text, Title } = Typography;
const { Meta } = Card;
import PageActions from "@/shared/components/page-actions";
import {
    Icon123,
    IconApps,
    IconBox,
    IconClock,
    IconUserFilled,
    IconUsersGroup,
} from "@tabler/icons-react";
import { Link } from "@inertiajs/react";

const Index = (props) => {
    const { data } = props;
    console.log("Index props", props);
    const navLinks = [
        {
            label: "Tot. Prodotti",
            value: data?.total_products || 0,
            icon: <IconBox />,
            url: "/products",
        },
        {
            label: "Tot. Fornitori",
            value: data?.total_suppliers || 0,
            icon: <IconUsersGroup />,
            url: "/suppliers",
        },
        {
            label: "Ultima sincronizzazione",
            value: data?.last_sync || null,
            icon: <IconClock />,
            url: "#",
        },
    ];

    return (
        <div className="page">
            <PageActions title="Dashboard" />
            <div className="page-content">
                <Row gutter={[16, 16]}>
                    {navLinks.map((item, i) => (
                        <Col
                            span={6}
                            xl={6}
                            lg={6}
                            md={6}
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
        </div>
    );
};

export default Index;
