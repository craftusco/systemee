import React from "react";
import { Row, Col, Form, Input, Button, Select, InputNumber } from "antd";
import { IconSearch } from "@tabler/icons-react";
import { socialMedia } from "@/data/index";

const SelectAccount = () => {

    return (
        <Select options={socialMedia} showSearch/>
    );
};

export default SelectAccount;