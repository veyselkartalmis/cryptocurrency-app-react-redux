import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
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
					<a href="/">Cryptoverse</a>
				</Typography.Title>
			</div>
			<Menu theme="dark">
				<Menu.Item icon={<HomeOutlined />}>
                    <a href="/">Home</a>
                </Menu.Item>
				<Menu.Item icon={<FundOutlined />}>
                    <a href="/">Cryptocurrencies</a>
                </Menu.Item>
				<Menu.Item icon={<MoneyCollectOutlined />}>
                    <a href="/">Exchanges</a>
                </Menu.Item>
				<Menu.Item icon={<BulbOutlined />}>
                    <a href="/">News</a>
                </Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
