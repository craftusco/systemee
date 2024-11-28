import React from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    IconHome,
    IconPackage,
    IconUsersGroup,
} from "@tabler/icons-react";
import { Menu } from "antd";

const MainMenu = () => {
    const { url } = usePage();

    // Determine the selected menu item based on the current URL
    const selectedKey = url.startsWith('/products') 
        ? '/products' 
        : url.startsWith('/suppliers') 
        ? '/suppliers' 
        : '/';

    const items = [
        {
            key: "/",
            icon: <IconHome />,
            label: <Link href="/">Home</Link>,
        },
        {
            key: "/products",
            icon: <IconPackage />,
            label: <Link href="/products">Prodotti</Link>,
        },
        {
            key: "/suppliers",
            icon: <IconUsersGroup />,
            label: <Link href="/suppliers">Fornitori</Link>,
        },
    ];

    return (
        <Menu
            mode="horizontal"
            selectedKeys={[selectedKey]} // Updated to use selectedKeys
            items={items}
            theme="light"
            style={{ width: '100%', background: "transparent" }}
        />
    );
};

export default MainMenu;
