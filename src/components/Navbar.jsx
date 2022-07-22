import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { NavLink } from "react-router-dom";
import {
	HomeOutlined,
	MoneyCollectOutlined,
	BulbOutlined,
	FundOutlined,
	MenuOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {
	return (
		<div className="nav-container">
			<div className="logo-container">
				<Avatar src={icon} size="large" />
				<Typography.Title level={2} className="logo">
					<a>Cryptoverse</a>
				</Typography.Title>
			</div>
		</div>
	);
};

export default Navbar;
