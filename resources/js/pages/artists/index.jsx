import React, { useState, useEffect } from "react";
import { Alert, Avatar, Button, Divider, Popover, Space, Typography } from "antd";
const { Text } = Typography;
import PageActions from "@/shared/components/page-actions";
import { Link, usePage } from "@inertiajs/react";

import { IconAlertCircle, IconCloudUpload, IconEye } from "@tabler/icons-react";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";

const Products = (props) => {
    const { data, filters, processing } = props;
    console.log("🌱 page:", props);
    const [selected, setSelected] = useState([]);
    // Toggle popup
    const togglePopup = (record = null) => {
        setSelected(record);
        setIsOpen(!isOpen);
    };

    const columns = [
        {
            title: "Nome",
            key: "name",
            filterable: true,
            sorter: (a, b) => a.name - b.name,
            render: (record) => (
                <Link href={`/artists/${record?.id}`}>
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
            title: "SKU",
            filterable: true,
            key: "sku",
            dataIndex: "sku",
        },
        {
            title: "Categoria",
            key: "category",
            filterable: true,
        },
        {
            title: "Prezzi",
            type: "number",
            key: "price",
        },
        {
            title: "Data creazione",
            key: "created_at",
            type: "datetime",
            sorter: (a, b) => a.created_at - b.created_at,
            render: (record) => (
                <span>{dateTimeFormatter(record?.created_at)}</span>
            ),
        },
        {
            title: "Azioni",
            key: "actions",
            align: "right",
            render: (record) => (
                <Space.Compact>
                    <Link href={`/artists/${record?.id}`}>
                        <Button icon={<IconEye />} />
                    </Link>
                    <Button
                        icon={<IconCloudUpload />}
                        onClick={() => togglePopup(record)}
                    />
                </Space.Compact>
            ),
        },
    ];

    return (
        <AppLayout title="Artisti">
            <div className="data">
                <PageActions
                    title={`Artisti (${data?.total})`}
                    extra={
                        <Button
                            type="primary"
                            icon={<IconCloudUpload />}
                            onClick={() => togglePopup()}
                        >
                            Aggiungi
                        </Button>
                    }
                >
                </PageActions>
                <div className="data-content">
                    <Datatable
                        columns={columns}
                        data={data}
                        processing={processing}
                        initialFilters={filters}
    
                    />
                </div>
            </div>
        </AppLayout>
    );
};

export default Products;
