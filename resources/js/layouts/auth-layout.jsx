"use client";
import { Button, Flex } from "antd";
import React from "react";
import { useDevice } from "@/utils/breakpoints";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@inertiajs/react";

const AuthLayout = (props) => {
  const { children, title, subtitle, backLink } = props;
  const { isMobile } = useDevice();

  return (
    <div className="w-full relative bg-[#EAF4F2]">
      {isMobile && (
        <div className="flex relative items-center w-full overflow-hidden py-2 justify-between text-[#002B20]">
          <Link href={backLink ?? "/"}>
            <Button
              type="text"
              icon={<IconChevronLeft className="text-primary" />}
              className="text-white"
              aria-label="Go back"
            />
          </Link>
          <h1 className="font-bold text-3xl">{title}</h1>
          <div></div>
        </div>
      )}
      <div className="container">
        <Flex align="center" justify="center" className="h-lvh max-w-sm m-auto">
          <Flex vertical gap={8} className="w-full">
            <Flex justify="space-between" className="w-full mb-10">
              <img
                src="/images/logo.svg"
                width={225}
                height={50}
                loading="eager"
                alt="Logo"
                className="mx-auto block"
              />
            </Flex>
            {!isMobile &&
            <div className="w-full mb-4">
              <h1 className="text-3xl font-bold tracking-tight text-center text-[#002B20]">
                {title}
              </h1>
              <p className="font-medium text-sm text-gray-500 dark:text-gray-400">
                {subtitle}
              </p>
            </div>}
            <div className="w-full">{children}</div>
          </Flex>
        </Flex>
      </div>
    </div>
  );
};

export default AuthLayout;