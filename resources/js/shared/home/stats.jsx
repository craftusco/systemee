import React, { useState, useEffect } from "react";
import { Row, Col, Card, Statistic, List, Select } from "antd";

import { IconBox, IconClock, IconUsersGroup } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";
import PageActions from "../components/page-actions";

const HomeStats = (props) => {
    const { data } = props;
    console.log("🌱 page:", props);
    const navLinks = [
        {
            label: "Tot. Artisti",
            value: data?.total_products || 0,
            icon: <IconBox />,
            url: "/artists",
        },
        {
            label: "Tot. Club",
            value: data?.total_suppliers || 0,
            icon: <IconUsersGroup />,
            url: "/clubs",
        },
        {
            label: "Tot. Artisti",
            value: data?.total_products || 0,
            icon: <IconBox />,
            url: "/artists",
        },
        {
            label: "Tot. Club",
            value: data?.total_suppliers || 0,
            icon: <IconUsersGroup />,
            url: "/clubs",
        },
    ];

    return (
        <section className="mb-4">
            <PageActions
                title="Overview"
                extra={<Select options={[{ value: "today", label: "Oggi" }]} />}
            />
            <Row gutter={[16, 16]}>
                {navLinks.map((item, i) => (
                    <Col span={6} xl={6} lg={6} md={6} sm={24} xs={24} key={i}>
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
        </section>
    );
};

export default HomeStats;
