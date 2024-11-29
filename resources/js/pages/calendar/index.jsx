import React, { useState, useEffect } from "react";
import { Calendar } from "antd";
import AppLayout from "@/layouts/app-layout";

const PageCalendar = (props) => {
    const { data } = props;
    console.log("🌱 page:", props);

    return (
        <AppLayout title="Calendario">
            <Calendar />
        </AppLayout>
    );
};

export default PageCalendar;
