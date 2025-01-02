import React, { Children } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    IconUserCircle,
    IconChevronDown,
    IconLogout,
    IconLogout2,
    IconHome,
    IconMusic,
    IconClubs,
    IconCalendar,
    IconCalendarBolt,
    IconCalendarDue,
    IconMessage2,
    IconAnalyze,
    IconSettings,
    IconInbox,
} from "@tabler/icons-react";

import { Avatar, Divider, Menu, Dropdown, Tag } from "antd";
import confirm from "../components/confirm";

const SideNav = () => {
    const defaultSelected = usePage().url.split("?")[0];
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
            icon: <IconUserCircle />,
            label: <Link href="/admin/profile">Il mio profilo</Link>,
        },
        {
            type: "divider",
        },
        {
            key: "logout",
            danger: true,

            onClick: () => handleLogout(),
            icon: <IconLogout />,
            label: "Logout",
        },
    ];

    const items = [
        {
            key: "/",
            icon: <IconHome />,
            label: <Link href="/">Home</Link>,
        },
        {
            key: "/inbox",
            icon: <IconInbox />,
            label: <Link href="/inbox">Notifiche</Link>,
        },
        {
            key: "/artists-group",
            type: "group",
            label: "Generale",
        },
        {
            key: "/artists",
            icon: <IconMusic />,
            label: <Link href="/artists">Artisti</Link>,
        },
        {
            key: "/clubs",
            icon: <IconClubs />,
            label: <Link href="/clubs">Club</Link>,
        },
        {
            key: "/calendar-group",
            type: "group",
            icon: <IconCalendar />,
            label: "Calendario",
            children: [
                {
                    key: "/calendar",
                    icon: <IconCalendarBolt />,
                    extra: <Tag color="blue">12+</Tag>,
                    label: <Link href="/calendar">Calendario</Link>,
                },
                {
                    key: "/calendar/list",
                    icon: <IconCalendarDue />,
                    label: <Link href="/calendar/list">Lista eventi</Link>,
                },
            ],
        },
        {
            key: "/other",
            type: "group",
            label: "Altro",
        },
        {
            key: "/requests",
            icon: <IconMessage2 />,
            label: <Link href="/requests">Richieste</Link>,
        },
        {
            key: "/analytics",
            icon: <IconAnalyze />,
            label: <Link href="/analytics">Analisi</Link>,
        },
        {
            key: "/settings",
            icon: <IconSettings />,
            label: <Link href="/settings">Impostazioni</Link>,
        },
    ];

    return (
        <aside className="h-full">
            <div className="p-2 text-center text-white">Logo</div>
            <Divider />
            <Menu
                mode="inline"
                defaultSelectedKeys={defaultSelected}
                items={items}
                inlineIndent={12}
                id="side-nav"
                className="h-full flex flex-col"
            />
            <Divider />
            <Dropdown
                trigger={["click"]}
                placement="bottomRight"
                menu={{
                    accountItems,
                }}
            >
                <div className="flex items-center cursor-pointer h-full w-full">
                    <Avatar shape="square" icon={<IconUserCircle />} />
                    <Divider type="vertical" />
                    <div className="block">
                        <span className="block w-100">{user?.name}</span>
                    </div>
                    <IconChevronDown color="#A1A8B0" />
                </div>
            </Dropdown>
        </aside>
    );
};

export default SideNav;
