import React, { useState, useEffect } from "react";
import { Row, Col, Button, Space, Typography, Divider } from "antd";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link, router } from "@inertiajs/react";
const { Text, Title } = Typography;

const PageActions = (props) => {
    return (
        <div className={`page-heading mb-1`}>
            <Row align="middle" justify="space-between" key={`row-` + 0}>
                <Col key={`col-` + 0}>
                    <Space align="start">
                        {props.backUrl && (
                            <Link href={props.backUrl}>
                                <Button
                                type="text"
                                size="icon"
                                    icon={
                                        <IconChevronLeft className="anticon" />
                                    }
                                />
                            </Link>
                        )}
                        <div>
                            <Title level={3}>{props.title}</Title>
                            {props.subTitle && (
                                <div>
                                    <Text type="secondary">
                                        {props.subTitle}
                                    </Text>
                                </div>
                            )}
                        </div>
                    </Space>
                </Col>
                <Col
                    flex="auto"
                    style={{ textAlign: "right" }}
                    key={`col-` + 1}
                >
                    {props.extra}
                </Col>
            </Row>
            <Divider />
        </div>
    );
};

export default PageActions;
