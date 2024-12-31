import React, { useState, useEffect } from "react";
import { Row, Col, Card, List } from "antd";
import { Link, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";
import HomeStats from "@/shared/home/stats";

const PageIndex = (props) => {
    const { data } = props;
    console.log("🌱 page:", props);
    const { isLoggedIn, user } = usePage().props.auth;

    return (
        <AppLayout title={`Ciao, ${user?.name}`}>
            <div className="page-content">
                <HomeStats data={data} />
                <Row gutter={[16, 16]}>
                    <Col
                        span={12}
                        xl={12}
                        lg={12}
                        md={12}
                        sm={24}
                        xs={24}
                        key="calendar"
                    >
                        <Card title="Calendario">
                            <List
                                bordered
                                dataSource={data?.calendar}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Link href={item.url}>
                                            {item.title}
                                        </Link>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </AppLayout>
    );
};

export default PageIndex;
