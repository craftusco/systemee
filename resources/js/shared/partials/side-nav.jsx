import React, { Children } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    IconUserCircle,
    IconChevronDown,
    IconLogout,
    IconLogout2,
} from "@tabler/icons-react";

import { Avatar, Divider, Menu, Dropdown, Tag } from "antd";
import confirm from "../components/confirm";
import {
    Analytics01Icon,
    Calendar03Icon,
    Home01Icon,
    Message01Icon,
    MusicNoteSquare01Icon,
    Settings02Icon,
    Vynil03Icon,
} from "hugeicons-react";

const SideNav = () => {
    const defaultSelected = usePage().url;
    const { isLoggedIn, user } = usePage().props.auth;

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
            icon: <IconUserCircle size={22} />,
            label: <Link href="/admin/profile">Il mio profilo</Link>,
        },
        {
            type: "divider",
        },
        {
            key: "logout",
            danger: true,

            onClick: () => handleLogout(),
            icon: <IconLogout2 size={22} className="text-red" />,
            label: "Logout",
        },
    ];

    const items = [
        {
            key: "/",
            icon: <Home01Icon size={22} />,
            label: <Link href="/">Home</Link>,
        },
        {
            key: "/artists",
            type: 'group',
            label: "Generale",
        }, 
        {
            key: "/artists",
            icon: <MusicNoteSquare01Icon size={22} />,
            label: <Link href="/artists">Artisti</Link>,
        },
        {
            key: "/clubs",
            icon: <Vynil03Icon size={22} />,
            label: <Link href="/clubs">Club</Link>,
        },
        {
            key: "/calendar",
            type: 'group',
            icon: <Calendar03Icon size={22} />,
            label: "Calendario",
            children: [
                {
                    key: "/calendar",
                    icon: <Calendar03Icon size={22} />,
                    extra: (<Tag color="blue">12+</Tag>),
                    label: <Link href="/calendar">Calendario</Link>,
                },
                {
                    key: "/calendar/list",
                    icon: <Calendar03Icon size={22} />,
                    label: <Link href="/calendar/list">Lista eventi</Link>,
                },
            ],
        },
        {
            key: "/other",
            type: 'group',
            label: "Altro",
        },
        {
            key: "/requests",
            icon: <Message01Icon size={22} />,
            label: <Link href="/requests">Richieste</Link>,
        },
        {
            key: "/analytics",
            icon: <Analytics01Icon size={22} />,
            label: <Link href="/analytics">Analisi</Link>,
        },
        {
            key: "/settings",
            icon: <Settings02Icon size={22} />,
            label: <Link href="/settings">Impostazioni</Link>,
        },
    ];

    return (
        <aside className="h-full">
            <div className="p-2">
                <Dropdown
                    trigger={["click"]}
                    placement="bottomRight"
                    menu={{
                        accountItems,
                    }}
                >
                    <div className="flex items-center cursor-pointer h-full w-full">
                        <Avatar
                            shape="square"
                            icon={<IconUserCircle size={22} />}
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
                inlineIndent={12}
                id="side-nav"
                className="h-full flex flex-col"
            />
        </aside>
    );
};

export default SideNav;
