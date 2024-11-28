import React, { useState, useEffect } from "react";
import { Alert, Avatar, Button, Popover, Space, Typography } from "antd";
const { Text } = Typography;
import PageActions from "@/shared/components/page-actions";
import { Link, usePage } from "@inertiajs/react";

import { IconAlertCircle, IconCloudUpload, IconEye } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { popupAtom } from "@/utils/index";
import { dateTimeFormatter } from "@/helpers/formatter";
import Datatable from "@/shared/datatable/";

const Products = (props) => {
    const [isOpen, setIsOpen] = useAtom(popupAtom);
    const { data, filters, processing } = props;
    console.log("🌱 page:", props);
    const [reload, setReload] = useState(null);
    const [showAlert, toggleAlert] = useState(true);
    const [selected, setSelected] = useState([]);
    // Toggle popup
    const togglePopup = (record = null) => {
        setSelected(record);
        setIsOpen(!isOpen);
    };

    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelected(selectedRowKeys);

            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
        },
    };

    const columns = [
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
            key: "supplier.name",
            render: (record) => (
                <Link
                    href={`/clubs/${record?.supplier?.id}`}
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
                    <Link href={`/products/${record?.id}`}>
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
        <>

            <div className="data">
                <PageActions
                    title={`Prodotti (${data?.data?.pagination?.total})`}
                    extra={
                        <Button
                            type="primary"
                            disabled={selected?.length === 0}
                            icon={<IconCloudUpload />}
                            onClick={() => togglePopup()}
                        >
                            Carica
                        </Button>
                    }
                >
                    <Alert
                        showIcon
                        closable
                        type="info"
                        message="Prodotti scaricati dai vari fornitori"
                        description="Prodotti scaricati dai vari fornitori"
                    />
                </PageActions>
                <div className="data-content">
                    <Datatable
                        columns={columns}
                        data={data}
                        processing={processing}
                        initialFilters={filters}
                        rowSelection={rowSelection}
                    />
                </div>
            </div>
        </>
    );
};

export default Products;
