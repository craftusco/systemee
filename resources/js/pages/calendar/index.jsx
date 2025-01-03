import React, { useState, useEffect } from "react";
import { Button, Calendar, Card } from "antd";
import AppLayout from "@/layouts/app-layout";
import { IconPlus } from "@tabler/icons-react";

const PageCalendar = (props) => {
    const { data } = props;
    console.log("🌱 page:", props);
    
    const togglePopup = (record = null) => {
        setSelected(record);
        setPopup((prev) => !prev);
    };


    return (
        <AppLayout title="Calendario" extra={
            <Button
                type="primary"
                icon={<IconPlus />}
                onClick={() => togglePopup()}
            >
                Aggiungi
            </Button>
        }
    >
        <Card>
            <Calendar />
            </Card>
        </AppLayout>
    );
};

export default PageCalendar;
