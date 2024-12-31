import React, { useState, useEffect } from "react";
import { Row, Col, Card, DatePicker } from "antd";
const { RangePicker } = DatePicker;
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import AppLayout from "@/layouts/app-layout";
import CustomLineChart from "@/shared/components/charts/line-chart";
import _ from "lodash";

const Analytics = (props) => {
    const { page } = props;
    const { data, filters } = page;

    console.log("🌱 page:", props);

    return (
        <AppLayout title={`Analisi`} extra={<RangePicker />}>
            <div className="page-content">
                <Row gutter={[16, 16]}>
                    <Col span={12}>
                        <Card title={`Totale eventi (${_.sumBy(data?.events, 'total') || 0})`}>
                            <CustomLineChart data={data?.events}/>
                        </Card>
                    </Col> 
                    <Col span={12}>
                        <Card title={`Totale artisti (${_.sumBy(data?.artists, 'total') || 0})`}>
                            <CustomLineChart data={data?.artists}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </AppLayout>
    );
};

export default Analytics;
