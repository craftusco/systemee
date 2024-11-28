"use client";
import { Avatar, Button, Divider, Dropdown, Flex, Typography } from "antd";
const { Text } = Typography;
import { useAtom } from "jotai";

import {
    IconChevronDown,
    IconLogout,
    IconMenu2,
    IconUserCircle,
} from "@tabler/icons-react";
import { Link, useForm, usePage } from "@inertiajs/react";
import confirm from "@/shared/components/confirm";
import { useDevice } from "@/utils/breakpoints";
import { sidebarAtom } from "@/utils/index";

const TopNav = (props) => {
    const { post, errors } = useForm();
    const { isLoggedIn, user } = usePage().props.auth;
    const breakpoints = useDevice();
    const [isSidebarOpen, openSidebar] = useAtom(sidebarAtom);

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

    const items = [
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

    return (
        <Flex
            justify={!breakpoints.md ? "space-between" : "end"}
            align="center"
            className="h-full"
        >
            <Button
                type="text"
                className="!hidden !md:block"
                icon={<IconMenu2 />}
                onClick={() => openSidebar(!isSidebarOpen)}
            />
            <div className="float-right">
                <Dropdown
                    className="min-w-full"
                    trigger={["click"]}
                    placement="bottomRight"
                    menu={{
                        items,
                    }}
                >
                    <div className="flex items-center cursor-pointer h-full">
                        <Avatar
                            shape="square"
                            icon={<IconUserCircle className="text-primary" />}
                        />
                        <Divider type="vertical" />
                        <div className="block">
                            <Text className="block w-100">
                                {user?.first_name}
                            </Text>
                        </div>
                        <IconChevronDown color="#A1A8B0" />
                    </div>
                </Dropdown>
            </div>
        </Flex>
    );
};

export default TopNav;
