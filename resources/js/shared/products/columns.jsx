import React from "react";
import { dateTimeFormatter } from "@/helpers/formatter";
import { Link } from "@inertiajs/react";
import { IconCloudUpload, IconEye } from "@tabler/icons-react";
import { Avatar, Button, Space } from "antd";

export const productColumns = [
    {
        title: "Nome",
        key: "name",
        filterable: true,
        sorter: (a, b) => a.name - b.name,
        render: (record) => (
            <Link href={`/products/${record?.id}`}>
                <Space>
                    <Avatar
                        size="large"
                        shape="square"
                        src={record?.iamge || "/images/placeholder.svg"}
                    />
                    {record?.name}
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
        title: "Fornitore",
        filterable: true,
        key: "supplier",
        render: (record) => (
            <Link
                href={`/suppliers/${record?.supplier?.id}`}
                target="_blank"
            >
                <Space>
                    <Avatar src={record?.supplier?.logo} />
                    {record?.supplier?.name}
                </Space>
            </Link>
        ),
    },
    {
        title: "Categoria",
        key: "sku",
        filterable: true,
        dataIndex: "sku",
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
                <Link href={`/products/${record?.id}`}>
                    <Button icon={<IconEye />}/>
                </Link>
                <Button
                    icon={<IconCloudUpload />}
                    onClick={() => togglePopup(record)}
                />
            </Space.Compact>
        ),
    },
];