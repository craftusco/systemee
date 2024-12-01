import React, { useState, useCallback } from "react";
import { Table, Button, Popover, Checkbox } from "antd";
import { router } from "@inertiajs/react";
import { IconFilter, IconFilterBolt } from "@tabler/icons-react";
import { FilterHorizontalIcon } from "hugeicons-react";

const Datatable = ({ columns, data, initialFilters = null, ...props }) => {
    const [filters, setFilters] = useState(initialFilters?.filter || {});
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [visible, setVisible] = useState(false);

    const { current_page, per_page, total, data: rows } = data;

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);

        if (debounceTimeout) clearTimeout(debounceTimeout);

        const timeout = setTimeout(() => {
            router.get(window.location.href, {
                filter: newFilters,
                page: current_page,
                page_size: per_page,
            });
        }, 1000);

        setDebounceTimeout(timeout);
    };

    const handleTableChange = useCallback(
        (pagination) => {
            const { current, pageSize } = pagination;

            router.get(window.location.href, {
                filter: filters,
                page: current,
                page_size: pageSize,
            });
        },
        [filters]
    );


    return (
        <div style={{ position: "relative" }}>
            <div style={{ textAlign: "right", marginBottom: 16 }}>
                <Popover
                    //content={content}
                    title="Filters"
                    trigger="click"
                    open={visible}
                >
                    <Button icon={<FilterHorizontalIcon/>}>Filters</Button>
                </Popover>
            </div>
            <Table
                columns={columns}
                dataSource={rows || []}
                rowKey="id"
                pagination={{
                    hideOnSinglePage: true,
                    position: ["bottomCenter"],
                    current: current_page,
                    total: total,
                    pageSize: per_page,
                }}
                onChange={handleTableChange}
                {...props}
            />
        </div>
    );
};

export default Datatable;
