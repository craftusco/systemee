import React, { useState } from "react";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import MainMenu from "@/shared/partials/main-menu";

export default function DashboardLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ height: "100vh" }}>
            <div className="container">
                <Header
                    style={{
                        width: "100%",
                        position: "fixed",
                        display: "flex",
                        alignItems: "center",
                        padding: 0,
                        marginBottom: "15px",
                        zIndex: 100,
                    }}
                >
                    <MainMenu />
                </Header>
                <Content style={{paddingTop: "70px"}}>{children}</Content>
            </div>
        </Layout>
    );
}
