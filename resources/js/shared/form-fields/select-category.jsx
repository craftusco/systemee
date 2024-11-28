import React from "react";
import { Select } from "antd";
import { getAllCategories } from "@/lib/woocommerce";
import { useQuery } from "@tanstack/react-query";

const SelectCategory = () => {
    const {
        data,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,  // assuming no productId is needed here
    });

    // Loading state handling
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching categories</p>;

    // Map the data into the format Ant Design expects
    const options = data?.map((category) => ({
        label: category.name,  // assuming category has a "name" field
        value: category.id,    // assuming category has an "id" field
    }));

    return (
        <Select
            options={options}
            showSearch
            placeholder="Select a category"
            style={{ width: "100%" }}  // Optionally, adjust the width
        />
    );
};

export default SelectCategory;
