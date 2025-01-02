import React, { useState } from "react";
import { Button, Dropdown, Tag } from "antd";
import {
    IconDots,
    IconTrash,
    IconPencilMinus,
    IconPlus,
} from "@tabler/icons-react";
import Datatable from "@/shared/datatable/";
import AppLayout from "@/layouts/app-layout";
import ModalEventType from "@/modules/settings/modal-event-type";

const PageEventTypes = ({ page, processing }) => {
    const { data, meta, filters } = page;
    const [selected, setSelected] = useState(null);
    const [popupCreate, setPopup] = useState(false);

    const togglePopup = (record = null) => {
        setSelected(record);
        setPopup((prev) => !prev);
    };

    const tableActions = [
        {
            key: 1,
            icon: <IconPencilMinus />,
            label: "Modifica",
            onClick: () => togglePopup(selected),
        },
        {
            type: "divider",
        },
        {
            key: 2,
            danger: true,
            icon: <IconTrash />,
            label: "Elimina",
            onClick: () => selected?.user_id && handleDelete(selected.user_id),
        },
    ];

    const columns = [
        {
            title: "Titolo",
            key: "title",
            dataIndex: "title",
        },
        {
            title: "Descrizione",
            key: "description",
            dataIndex: "description",
        },
        {
            title: "Colore",
            key: "color",
            render: ({ color }) => <Tag color={color}>{color}</Tag>,
        },
        {
            key: "actions",
            align: "right",
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

    return (
        <>
            <ModalEventType
                isOpened={popupCreate}
                onClose={() => togglePopup()}
                initialData={selected}
            />
            <AppLayout
                title="Tipologie eventi"
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
                        showFilters={false}
                    />
                </div>
            </AppLayout>
        </>
    );
};

export default PageEventTypes;
