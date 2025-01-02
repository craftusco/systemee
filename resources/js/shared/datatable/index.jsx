import React, { useState, useCallback } from "react";
import { Table, Input, Button, Flex, Card } from "antd";
import { router } from "@inertiajs/react";
import FilterInput from "./filter-input";
import {
    IconAdjustments,
    IconChevronLeft,
    IconChevronRight,
    IconFilters,
} from "@tabler/icons-react";
import ModalFilters from "./filters/modal-filters";

const Datatable = ({
    columns,
    data = {},
    meta = {},
    initialFilters = {},
    ...props
}) => {
    const [filters, setFilters] = useState(initialFilters?.filter || {});
    const [modalFilters, setModalFilters] = useState(false);
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    const { current_page, per_page = 25, total } = meta;

    const handleInputChange = (value, key) => {
        if (debounceTimeout) clearTimeout(debounceTimeout);

        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);

        const timeout = setTimeout(() => {
            router.get(window.location.href, {
                filter: newFilters,
                page: 1,
                per_page: per_page,
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
                per_page: pageSize,
            });
        },
        [filters] // Only recreate the function when filters change
    );

    return (
        <>
            {modalFilters && (
                <ModalFilters isOpened={modalFilters} onClose={() => setModalFilters(!modalFilters)} />
            )}
            <div className="flex justify-between items-center gap-4 mb-1">
                <Input placeholder="Cerca qui" />
                <Button
                    icon={<IconAdjustments />}
                    onClick={() => setModalFilters(!modalFilters)}
                >
                    Filtri
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={data || []}
                rowKey="id"
                pagination={{
                    hideOnSinglePage: true,
                    position: ["bottomRight"],
                    current: current_page,
                    total: total,
                    pageSize: per_page,
                    // nextIcon: <Button icon={<IconChevronRight/>}/>,
                    // prevIcon: <Button icon={<IconChevronLeft/>}/>
                }}
                onChange={handleTableChange}
                {...props}
            />
        </>
    );
};

export default Datatable;
