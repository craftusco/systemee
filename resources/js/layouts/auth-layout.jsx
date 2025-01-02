"use client";
import { Button, Flex } from "antd";
import React from "react";
import { useDevice } from "@/utils/breakpoints";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";

const AuthLayout = (props) => {
  const { children, title, subtitle, backUrl } = props;
  const { isMobile } = useDevice();

  return (
    <div className="w-full relative">
      <div className="container">
        <Flex align="center" justify="center" className="h-lvh max-w-sm m-auto">
          <Flex vertical gap={8} className="w-full">
            <div className="w-full mb-10 text-center">
              Systemee
            </div>
            <div className="w-full mb-4">
              <h1 className="text-3xl font-bold tracking-tight text-center text-[#002B20]">
                {title}
              </h1>
              <p className="font-medium text-sm text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            </div>
            <div className="w-full">{children}</div>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default AuthLayout;