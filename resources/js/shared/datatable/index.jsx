import React, { useState, useCallback } from "react";
import { Table, Input } from "antd";
import { router } from "@inertiajs/react";

const Datatable = ({ columns, data, initialFilters, ...props }) => {
    const [filters, setFilters] = useState(initialFilters.filter || {});
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    console.log("filters:", filters);

    const { current_page, per_page, total, data: rows } = data;

    const handleInputChange = (value, key) => {
        if (debounceTimeout) clearTimeout(debounceTimeout);

        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);

        const timeout = setTimeout(() => {
            router.get(window.location.href, {
                filter: newFilters,
                page: current_page,
                page_size: per_page,
            });
        }, 500);

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
        [filters] // Only recreate the function when filters change
    );

    const modifiedColumns = columns.map((col) => ({
        ...col,
        title: col.filterable ? (
            <>
                {col.title}
                <Input
                    placeholder={`Search ${col.title}`}
                    value={filters[col.key] || null}
                    allowClear
                    onChange={(e) => handleInputChange(e.target.value, col.key)}
                />
            </>
        ) : (
            col.title
        ),
    }));

    return (
        <Table
            columns={modifiedColumns}
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
    );
};

export default Datatable;
