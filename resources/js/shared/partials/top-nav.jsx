import React from "react";
import { Link, router } from "@inertiajs/react"
import {
  IconAlertCircle,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight
} from "@tabler/icons-react"
import { Menu, Space, Avatar, Modal, Button } from "antd"

const TopNav = ({ collapsed, setCollapsed }) => {
  const confirm = Modal.confirm;

  /* Logout Action */
  const handleLogout = () => {
    Modal.confirm({
      title: "Are you sure you want to go out?",
      icon: <IconAlertCircle />,
      transitionName: "ant-modal-slide-up",
      content:
        "You are logging out of the Adspire platform, are you sure you want to proceed?",
      okText: "Sign Out",
      okType: "danger",
      cancelText: "Cancel"
      //   onOk() {
      //     logoutAction()
      //       .then((data) => {
      //         message.success("Logged out successfully.");
      //         router.push("/login");
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //         message.error("Error logging out. Please try again.");
      //       });
      //   }
    })
  }

  const mainMenu = [
    {
      key: "account",
      label: (
        <Space>
          <Avatar size="small" name="USER" />
          <span className="flex flex-col">User admin</span>
          <IconChevronDown size="18" />
        </Space>
      ),
      children: [
        {
          key: "profile",
          label: <Link href="/profile">Profile</Link>
        },
        {
          type: "divider"
        },
        {
          key: "logout",
          danger: true,
          label: (
            <Link href="#" onClick={handleLogout}>
              Logout
            </Link>
          )
        }
      ]
    }
  ]

  return (
    <div className="flex items-center justify-between border-b border-gray-200 w-full">
      <div>
        <Button
          type="text"
          icon={collapsed ? <IconChevronRight /> : <IconChevronLeft />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>
      <div className="w-1/3 flex items-center">
        <Menu
          triggerSubMenuAction="click"
          mode="horizontal"
          theme="light"
          items={mainMenu}
          className="bg-transparent right-0"
        />
      </div>
    </div>
  )
}
export default TopNav;