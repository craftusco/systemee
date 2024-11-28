import React, { useState, useEffect } from "react";
import { Avatar, Button, Space, Table } from "antd";
import PageActions from "@/shared/components/page-actions";
import { Link } from "@inertiajs/react";
import { dateTimeFormatter } from "@/helpers/formatter";
import {
    IconEye,
} from "@tabler/icons-react";
import Datatable from "@/shared/datatable";

const Suppliers = (props) => {
    const { data, isLoading } = props;
    //const [isLoading, setIsLoading] = useState(true);
    console.log("🦄 page", props);

    const columns = [
        {
            title: "Nome",
            key: "name",
            sortable: true,
            filterSearch: true,
            render: (record) => (
                <Link href={`/suppliers/${record?.id}`}>
                    <Space>
                        <Avatar src={record?.logo}/>
                        {record?.name}
                    </Space>
                </Link>
            ),
        },
        {
            title: "Descrizione",
            key: "description",
            dataIndex: "description",
        },
        {
            title: "Website",
            key: "website",
            render: (record) => (
                <a href={record?.website} target="_blank">
                    {record?.website}
                </a>
            ),
        },
        {
            title: "Tot. prodotti",
            key: "total_products",
            dataIndex: "total_products",
            align: "right",
            filterSearch: true,
            sortable: true,
        },
        {
            title: "Azioni",
            key: "actions",
            align: "right",
            render: (record) => (
                <Space.Compact>
                    <Link href={`/suppliers/${record?.id}`}>
                        <Button icon={<IconEye />}>Vedi</Button>
                    </Link>
                </Space.Compact>
            ),
        },
    ];

    return (
        <div className="page">
            <PageActions title={`Fornitori (${data?.pagination?.total})`} />
            <div className="page-content">
            <Datatable
                        columns={columns}
                        data={data.items}  
                        endpoint="/suppliers" 
                        filters={data.filters} 
                        pagination={data.pagination}
                    />
            </div>
        </div>
    );
};

export default Suppliers;
