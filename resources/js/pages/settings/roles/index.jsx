import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Dropdown, Space } from "antd";
import { Link, router } from "@inertiajs/react";

import {
    IconDots,
    IconTrash,
    IconPencilMinus,
    IconPlus,
    IconLockAccess,
} from "@tabler/icons-react";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";
import { handleDelete } from "@/lib/actions/delete-role";
import { filter } from "lodash";

const PageRoles = (props) => {
    const { page, processing } = props;
    const { data, meta, filters } = page;
    console.log("🌱 page.roles.index:", props);
    const [selected, setSelected] = useState(null);

    const columns = [
        {
            title: "Nome",
            key: "name",
            filterable: true,
            render: (record) => (
                <Link href={`/settings/roles/${record?.id}`}>
                    <Space>
                        <Avatar shape="square" icon={<IconLockAccess />} />
                        <span>{record?.name}</span>
                    </Space>
                </Link>
            ),
        },
        {
            title: "Descrizione",
            type: "text",
            filterable: true,
            key: "total_events",
        },
        {
            title: "Creato il",
            key: "created_at",
            filterable: true,
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
            icon: <IconPencilMinus />,
            label: "Modifica",
            onClick: () => router.visit(`/settings/roles/${selected?.id}`),
        },
        {
            type: "divider",
        },
        {
            key: 2,
            danger: true,
            icon: <IconTrash />,
            label: "Elimina",
            onClick: async () => {
                if (selected) {
                    handleDelete(selected?.user_id);
                } else {
                    console.error("documentId is undefined");
                }
            },
        },
    ];

    return (
        <AppLayout
            title={`Ruoli utenti (${meta?.total})`}
            backLink="/settings"
            extra={
                <Link href="/settings/roles/create">
                    <Button type="primary" icon={<IconPlus />}>
                        Aggiungi
                    </Button>
                </Link>
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

export default PageRoles;
