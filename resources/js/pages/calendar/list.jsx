import React, { useState, useEffect } from "react";
import AppLayout from "@/layouts/app-layout";
import Datatable from "@/shared/datatable";

const PageList = (props) => {
    const { data } = props;
    console.log("🌱 page:", props);

    return (
        <AppLayout title="Calendario">
            <Datatable data={[]} />
        </AppLayout>
    );
};

export default PageList;
