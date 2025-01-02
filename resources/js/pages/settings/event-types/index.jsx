import React, { useState, useEffect } from "react";
import { Avatar, Button, ColorPicker, Divider, Dropdown, Space, Tag } from "antd";
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

const PageEventTypes = (props) => {
    const { page, processing } = props;
    const { data, meta, filters } = page;
    console.log("🌱 page.event-types.index:", props);
    const [selected, setSelected] = useState([]);
    // Toggle popup
    const togglePopup = (record = null) => {
        setSelected(record);
        setIsOpen(!isOpen);
    };

    const columns = [
        {
            title: "Titolo",
            key: "title",
            dataIndex: "title",
        },
        {
            title: "Colore",
            type: "color",
            key: "color",
            render: ({color}) => (
                <Tag color={color}>{color}</Tag>
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
            onClick: () => togglePopup(),
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
            title={`Tipologie eventi`}
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
                    showFilters={false}
                />
            </div>
        </AppLayout>
    );
};

export default PageEventTypes;
