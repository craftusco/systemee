import React, { Children } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    IconUserCircle,
    IconChevronDown,
    IconLogout,
} from "@tabler/icons-react";
import { Icon } from '@iconify/react';
import { Avatar, Divider, Menu, Dropdown } from "antd";
import confirm from "../components/confirm";

const SideNav = () => {
    const defaultSelected = usePage().url;
    const { isLoggedIn, user } = usePage().props.auth;
    console.log("defaultSelected", defaultSelected);

    const handleLogout = async () => {
        return confirm({
            title: "Sei sicuro di voler effettuare il logout?",
            message: "Stai uscendo dall'app, sei sicuro di voler procedere?",
            cancelText: "Annulla",
            confirmText: "Esci",
            isDanger: true,
            icon: <IconLogout color="#fff" />,
            async onOk() {
                post("/logout");
            },
        });
    };

    const accountItems = [
        {
            key: "profile",
            icon: <IconUserCircle className="text-primary" />,
            label: <Link href="/admin/profile">Il mio profilo</Link>,
        },
        {
            type: "divider",
        },
        {
            key: "logout",
            danger: true,

            onClick: () => handleLogout(),
            icon: <IconLogout className="text-red" />,
            label: "Logout",
        },
    ];

    const items = [
        {
            key: "/",
            icon: <Icon icon="solar:home-2-linear" />,
            label: <Link href="/">Home</Link>,
        },
        {
            key: "/artists",
            icon: <Icon icon="solar:music-note-outline" />,
            label: <Link href="/artists">Artisti</Link>,
        },
        {
            key: "/clubs",
            icon: null,
            label: <Link href="/clubs">Club</Link>,
        },
        {
            key: "/calendar/[id]",
            icon: <Icon icon="solar:calendar-add-linear" />,
            label: <Link href="/calendar">Calendario</Link>,
            children: [
                {
                    key: "/calendar",
                    icon: null,
                    label: <Link href="/calendar">Calendario</Link>,
                },
                {
                    key: "/calendar/list",
                    icon: null,
                    label: <Link href="/calendar/list">Lista eventi</Link>,
                },
            ],
        },
        {
            type: "divider",
        },
        {
            key: "/requests",
            icon: <Icon icon="solar:chat-line-outline" />,
            label: <Link href="/warnings">Richieste</Link>,
        }, 
        {
            key: "/analytics",
            icon: <Icon icon="solar:chat-square-2-linear" />,
            label: <Link href="/warnings">Analisi</Link>,
        },
        {
            type: "divider",
        },
        {
            key: "/settings",
            icon: <Icon icon="solar:settings-linear" />,
            label: (
                <Link href="/settings">
                    Impostazioni
                </Link>
            ),
        },
    ];

    return (
        <aside>
            <div className="float-right">
                <Dropdown
                    className="min-w-full"
                    trigger={["click"]}
                    placement="bottomRight"
                    menu={{
                        accountItems,
                    }}
                >
                    <div className="flex items-center cursor-pointer h-full">
                        <Avatar
                            shape="square"
                            icon={<IconUserCircle className="text-primary" />}
                        />
                        <Divider type="vertical" />
                        <div className="block">
                            <span className="block w-100">{user?.name}</span>
                        </div>
                        <IconChevronDown color="#A1A8B0" />
                    </div>
                </Dropdown>
            </div>
            <Divider />
            <Menu
                mode="inline"
                defaultSelectedKeys={defaultSelected}
                items={items}
            />
        </aside>
    );
};

export default SideNav;
