import React, { useState, useEffect } from "react";
import { Row, Col, Card, Avatar, Typography } from "antd";
const { Meta } = Card;
const { Text, Title } = Typography;
import { Link } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import { settingLinks } from "@/shared/settings/nav-links";

const PageSettings = (props) => {
    return (
        <AppLayout title="Impostazioni">
            {settingLinks.map((section, i) => (
                <Row gutter={[16, 16]} key={i} className="mb-4">
                    <Col key={i} span={24}>
                        <Title level={5}>{section.title}</Title>
                    </Col>
                    {section.items.map((item, j) => (
                        <Col
                            span={4}
                            xl={6}
                            lg={6}
                            md={4}
                            sm={24}
                            xs={24}
                            key={j}
                        >
                            <Card>
                                <Link href={item.url}>
                                    <Meta
                                        avatar={
                                            <Avatar shape="square" icon={item?.icon}/>
                                        }
                                        title={item.label}
                                        description={item.description}
                                    />
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ))}
        </AppLayout>
    );
};

export default PageSettings;
