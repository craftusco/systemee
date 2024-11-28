import { createInertiaApp } from "@inertiajs/react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import "../assets/app.css";
import AppLayout from "./layouts/app-layout.jsx";
import { ConfigProvider } from "antd";
import theme from "../assets/theme.json";
import dayjs from "dayjs";
import 'dayjs/locale/it';
import it_IT from 'antd/locale/it_IT';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const appName = import.meta.env.VITE_APP_NAME;

const queryClient = new QueryClient();

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    progress: {
        color: "#1677ff",
        showSpinner: true,
    },
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })
        let page = pages[`./pages/${name}.jsx`]
        //console.log({page})
        page.default.layout = page?.default?.layout || (page => <AppLayout children={page} />)
        return page
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <ConfigProvider theme={theme} locale={it_IT}>
                <QueryClientProvider client={queryClient}>
                    <App {...props} />
                </QueryClientProvider>
            </ConfigProvider>
        );
    }
});
