import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Space, Table } from "antd";

import { Link } from "@inertiajs/react";
import { dateTimeFormatter } from "@/helpers/formatter";
import { IconEye, IconPlus } from "@tabler/icons-react";
import Datatable from "@/shared/datatable";
import AppLayout from "@/layouts/app-layout";


const Clubs = (props) => {
    const { page, processing } = props;
    const { data, meta, filters } = page;
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
                    <Space>
                        <Avatar
                            
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
            title: "Tot. Eventi",
            key: "total_events",
            dataIndex: "total_events",
            align: "right",
            filterSearch: true,
            sortable: true,
        },
        {
            
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
        <AppLayout
            title={`Club (${meta?.total})`}
            extra={
                <Button
                    type="primary"
                    icon={<IconPlus />}
                    onClick={() => togglePopup()}
                >
                    Aggiungi
                </Button>
            }
        >
            <div className="page-content">
                <Datatable
                    columns={columns}
                    data={data}
                    meta={meta}
                    processing={processing}
                    initialFilters={filters}
                />
            </div>
        </AppLayout>
    );
};

export default Clubs;
