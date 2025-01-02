import React from "react";
import { Button, message } from "antd";
import AppLayout from "@/layouts/app-layout";
import FormRole from "@/modules/settings/form-role";

const PageCreateRole = (props) => {
    const { data, meta, filters, processing } = props;
    console.log("🌱 page.roles.create:", props);

    return (
        <AppLayout
            title="Crea ruolo utenti"
            backLink="/settings/roles"
            extra={
                <Button
                    type="primary"
                    onClick={() =>
                        message.success("Ruolo creato con successo!")
                    }
                >
                    Salva
                </Button>
            }
        >
            
                <FormRole initialData={data} />
            
        </AppLayout>
    );
};

export default PageCreateRole;
