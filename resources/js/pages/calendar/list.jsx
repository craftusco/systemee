import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Dropdown, Space } from "antd";
import { Link, usePage } from "@inertiajs/react";

import {
    IconAlertCircle,
    IconCloudUpload,
    IconDots,
    IconEye,
    IconPlus,
    IconPencilMinus,
    IconTrash,
} from "@tabler/icons-react";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";
import ModalEvent from "@/shared/events/modal-event";

const PageList = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { page, processing } = props;
    const { data, meta, filters } = page;
    console.log("🌱 page:", props);
    const [selected, setSelected] = useState([]);
    // Toggle popup
    const togglePopup = (record = null) => {
        setSelected(record);
        setModalOpen(!modalOpen);
    };

    const columns = [
        {
            title: "Nome",
            key: "title",
            filterable: true,
            dataIndex: "title",
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
            icon: <IconPencilMinus />,
            label: "Modifica",
            onClick: () => router.visit(`/events/${selected?.id}`),
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
        <>
            {modalOpen && (
                <ModalEvent
                    isOpened={modalOpen}
                    onClose={togglePopup}
                    initialData={selected}
                />
            )}
            <AppLayout
                title={`Lista eventi (${meta?.total})`}
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
        </>
    );
};

export default PageList;
