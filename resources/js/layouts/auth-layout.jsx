"use client";
import {  Flex, Typography } from "antd";
const { Title } = Typography;
import React from "react";
import { useDevice } from "@/utils/breakpoints";


const AuthLayout = (props) => {
  const { children, title, subtitle, backLink } = props;
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
              <Title level={3} className="text-center">
                {title}
              </Title>
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