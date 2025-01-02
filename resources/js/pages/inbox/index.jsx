import React, { useState, useEffect } from "react";
import { Button, Dropdown, Space, Tag } from "antd";
import {
    IconDots,
    IconTrash,
    IconPencilMinus,
    IconChecklist,
} from "@tabler/icons-react";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";
import { getPriority } from "@/utils/enums";

const PageInbox = (props) => {
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
            title: "Messaggio",
            key: "content",
            dataIndex: "content",
        },
        {
            title: "Priorità",
            key: "priority",
            width: 70,
            render: ({ priority }) => {
                    const { label, color } = getPriority(priority);
                    return <Tag color={color}>{label}</Tag>;
                },
        },
        {
            title: "Data",
            key: "created_at",
            type: "datetime",
            align: "right",
            width: 140,
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
                <Space.Compact>
                    <Button icon={<IconDots size={22}/>} />
                    <Button danger icon={<IconTrash size={22}/>} />
                </Space.Compact>
            ),
        },
    ];

    const tableActions = [
        {
            key: 1,
            icon: <IconPencilMinus />,
            label: "Modifica",
            onClick: () => router.visit(`/requests/${selected?.id}`),
        },
        {
            type: "divider",
        },
        {
            key: 2,
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
            title={`Notifiche (${meta?.total})`}
            extra={
                <Button
                    type="primary"
                    icon={<IconChecklist />}
                    onClick={() => togglePopup()}
                >
                    Segna come lette
                </Button>
            }
        >
            <Datatable
                columns={columns}
                data={data}
                meta={meta}
                processing={processing}
                initialFilters={filters}
            />
        </AppLayout>
    );
};

export default PageInbox;
