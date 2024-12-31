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
            value: data?.total_artists || 0,
            icon: <IconBox />,
            url: "/artists",
        },
        {
            label: "Tot. Club",
            value: data?.total_clubs || 0,
            icon: <IconUsersGroup />,
            url: "/clubs",
        },
        {
            label: "Tot. Eventi",
            value: data?.total_events || 0,
            icon: <IconBox />,
            url: "/artists",
        },
        {
            label: "Tot. Ordini",
            value: data?.total_orders || 0,
            icon: <IconUsersGroup />,
            url: "/clubs",
        },
    ];

    return (
        <section className="mb-4">
            <PageActions
                title="Overview"
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
