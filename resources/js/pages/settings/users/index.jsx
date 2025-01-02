import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Dropdown, Space } from "antd";
import { Link, usePage } from "@inertiajs/react";

import {
    IconAlertCircle,
    IconCloudUpload,
    IconUserFilled,
    IconDots,
    IconEye,
    IconTrash, IconPencilMinus, IconPlus
} from "@tabler/icons-react";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";

const Users = (props) => {
    const { page } = props;
    const { data, meta, filters, processing } = page;
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
            
            render: (record) => (
                <Link href={`/settings/users/${record?.id}`}>
                    <Space>
                        <Avatar
                            shape="square"
                            icon={<IconUserFilled />}
                        />
                        <span>{record?.name}</span>
                    </Space>
                </Link>
            ),
        },
        {
            title: "Email",
            key: "email",
            dataIndex: "email",
        },
        {
            title: "Ruoli",
            key: "roles",
            render: (record) => (
                <>
                    {record?.roles?.map((role) => (
                        <Tag key={role?.id}>{role?.name}</Tag>
                    ))}
                </>
            ),
        },        
        {
            title: "Creato il",
            key: "created_at",
            type: "datetime",
            align: "right",
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
            onClick: () => router.visit(`/settings/users/${selected?.id}`),
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
            title={`Utenti (${meta?.total})`}
            backLink="/settings"
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

export default Users;
