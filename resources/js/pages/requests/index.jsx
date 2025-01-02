import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Dropdown, Space } from "antd";
import { Link, usePage } from "@inertiajs/react";

import {
    IconAlertCircle,
    IconCloudUpload,
    IconDots,
    IconEye,
    IconTrash, IconPencilMinus, IconPlus,
    IconMessage
} from "@tabler/icons-react";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";

const Products = (props) => {
    const { page, processing } = props;
    const { data, meta, filters } = page;
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
                <Link href={`/requests/${record?.id}`}>
                    <Space>
                        <Avatar
                            
                            shape="square"
                            icon={<IconMessage/>}
                        />
                        <span>{record?.name}</span>
                    </Space>
                </Link>
            ),
        },
        {
            title: "Tot eventi",
            type: "number",
            key: "total_events",
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
            
            key: "actions",
            sorter: false,
            align: "right",
            fixed: "right",
            render: (record) => (
                <Dropdown
                    menu={{ items: tableActions }}
                    placement="bottomRight"
                    trigger={["click"]}
                    onClick={() => setSelected(record)}
                >
                    <Button type="text" icon={<IconDots color="#222222" />} />
                </Dropdown>
            ),
        },
    ];

    const tableActions = [
        {
            key: 1,
            icon: <IconPencilMinus/>,
            label: "Modifica",
            onClick: () => router.visit(`/requests/${selected?.id}`),
        },
        {
            type: "divider",
        },
        {
            key: 2,
            danger: true,
            icon: <IconTrash/>,
            label: "Elimina",
            // onClick: async () => {
            //   if (selected?.user_id) {
            //     handleDelete(selected?.user_id);
            //   } else {
            //     console.error('documentId is undefined');
            //   }
            // },
        },
    ];

    return (
        <AppLayout
            title={`Richieste (${meta?.total})`}
            extra={
                <Button
                    type="primary"
                    icon={<IconPlus/>}
                    onClick={() => togglePopup()}
                >
                    Aggiungi
                </Button>
            }
        >
            <div className="data-content">
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

export default Products;
