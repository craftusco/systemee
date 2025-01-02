import { IconAlertCircle } from "@tabler/icons-react";
import { Modal } from "antd";
const { confirm } = Modal;

export const handleDelete = () => {
    confirm({
        title: "Sei sicuro di voler eliminare il ruolo?",
        content: "Questa azione è irreversibile.",
        transitionName: "ant-modal-slide-up",
        cancelText: "Annulla",
        okText: "Elimina",
        okType: "danger",
        centered: true,
        onOk() {
            console.log("Delete role");
        },
    });
};
