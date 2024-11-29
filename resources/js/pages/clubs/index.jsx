import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Space, Table } from "antd";
import PageActions from "@/shared/components/page-actions";
import { Link } from "@inertiajs/react";
import { dateTimeFormatter } from "@/helpers/formatter";
import {
    IconEye,
} from "@tabler/icons-react";
import Datatable from "@/shared/datatable";
import AppLayout from "@/layouts/app-layout";

const Clubs = (props) => {
    const { data, filters, processing } = props;
    //const [processing, setIsLoading] = useState(true);
    console.log("🌱 page:", props);

    const columns = [
        {
            title: "Nome",
            key: "name",
            sortable: true,
            filterSearch: true,
            render: (record) => (
                <Link href={`/clubs/${record?.id}`}>
                    <Space split={<Divider type="vertical" />}>
                        <Avatar
                            size="large"
                            shape="square"
                            src={record?.iamge || "/images/placeholder.svg"}
                        />
                        <span>{record?.name}</span>
                    </Space>
                </Link>
            ),
        },
        {
            title: "Descrizione",
            key: "description",
            dataIndex: "description",
        },
        {
            title: "Website",
            key: "website",
            render: (record) => (
                <a href={record?.website} target="_blank">
                    {record?.website}
                </a>
            ),
        },
        {
            title: "Tot. Artisti",
            key: "total_products",
            dataIndex: "total_products",
            align: "right",
            filterSearch: true,
            sortable: true,
        },
        {
            title: "Azioni",
            key: "actions",
            align: "right",
            render: (record) => (
                <Space.Compact>
                    <Link href={`/clubs/${record?.id}`}>
                        <Button icon={<IconEye />}>Vedi</Button>
                    </Link>
                </Space.Compact>
            ),
        },
    ];

    return (
        <AppLayout>
            <PageActions title={`Club (${data?.total})`} />
            <div className="page-content">
            <Datatable
                        columns={columns}
                        data={data}
                        processing={processing}
                        initialFilters={filters}
                    />
            </div>
        </AppLayout>
    );
};

export default Clubs;
