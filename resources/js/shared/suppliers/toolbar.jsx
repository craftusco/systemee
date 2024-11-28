import React from "react";
import { Menu } from "antd";
import { Link } from "@inertiajs/react";

const Toolbar = () => {
    const { url, id } = usePage();

    const navLinks = [
        {
            key: "/clubs/[id]",
            label: <Link href={`/clubs${id}`}>Details</Link>,
        },
        {
            key: "/clubs/[id]/categories",
            label: (
                <Link href={`/clubs${id}/rows`}>
                    Item Rows
                </Link>
            ),
        },
    ];

    return (
        <Menu
            mode="horizontal"
            className="transparent"
            items={navLinks}
            selectedKeys={[router.pathname]}
        />
    );
};

export default Toolbar;
