import React, { Children } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    IconBugFilled,
    IconChartAreaFilled,
    IconTimeline,
    IconHomeFilled,
    IconUserFilled,
    IconCoins,
    IconTelescope,
} from "@tabler/icons-react";
import { Divider, Menu } from "antd";

const SideNav = () => {
    const defaultSelected = usePage().url;
    console.log("defaultSelected", defaultSelected);
    const items = [
        {
            key: "/",
            icon: <IconHomeFilled />,
            label: <Link href="/">Dashboard</Link>,
        },
        {
            key: "/accounts",
            icon: <IconUserFilled />,
            label: <Link href="/accounts">Accounts</Link>,
        },
        {
            key: "/adsets",
            icon: <IconChartAreaFilled />,
            label: <Link href="/adsets">Adsets</Link>,
        },
        {
            key: "/roi",
            icon: <IconCoins />,
            label: <Link href="/roi">ROI trends</Link>,
        },
        {
            key: "/warnings",
            icon: <IconBugFilled />,
            label: <Link href="/warnings">Warnings</Link>,
        }, 
        {
            key: "/logs",
            icon: <IconBugFilled />,
            label: <Link href="/logs">Logs</Link>,
        },
        {
            key: "/telescope",
            icon: <IconTelescope />,
            label: <a href="/telescope" target="_blank">Telescope</a>,
        }
    ];

    return (
        <aside>
            <div className="p-2 text-center">
                <h3>systemee</h3>
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
