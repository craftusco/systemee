import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Dropdown, Space } from "antd";
import { Link, router, usePage } from "@inertiajs/react";
import {
    IconDots,
    IconPencilMinus,
    IconTrash,
    IconPlus,
    IconEye,
} from "@tabler/icons-react";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";

const Artists = (props) => {
    const { page, processing } = props;
    const { data, meta, filters } = page;
    console.log("🌱 page:", props);
    const [selected, setSelected] = useState([]);

    const columns = [
        {
            title: "Nome",
            key: "name",
            filterable: true,
            
            render: (record) => (
                <Link href={`/artists/${record?.id}`}>
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
            title: "Tot eventi",
            type: "number",
            filterable: true,
            key: "total_events",
        },
        {
            title: "Prezzi",
            type: "range",
            filterable: true,
            key: "price",
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
            icon: <IconEye />,
            label: "Dettagli",
            onClick: () => router.visit(`/artists/${selected?.id}`),
        },
        {
            key: 2,
            icon: <IconPencilMinus />,
            label: "Modifica",
            onClick: () => router.visit(`/artists/${selected?.id}`),
        },
        {
            type: "divider",
        },
        {
            key: 3,
            danger: true,
            icon: <IconTrash />,
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
            title={`Artisti (${page?.meta?.total})`}
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

export default Artists;
