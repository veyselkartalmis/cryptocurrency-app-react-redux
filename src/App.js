import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
	Navbar,
	HomePage,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News,
} from "./components";

import "./App.css";

const App = () => {
	return (
		<div className="app">
			<div className="navbar">
				<Navbar />
			</div>
			<div className="main">
				<Layout>
					<div className="routes">
						<BrowserRouter>
							<Routes>
								<Route exact path="/" element={<HomePage />} />
								<Route path="/exchanges" element={<Exchanges />} />
								<Route
									path="/cryptocurrencies"
									element={<Cryptocurrencies />}
								/>
								<Route path="/crypto/:coindId" element={<CryptoDetails />} />
								<Route path="/news" element={<News />} />
							</Routes>
						</BrowserRouter>
					</div>
				</Layout>
				<div className="footer">
					<Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
						Cryptoverse <br />
						All rights reserved
					</Typography.Title>
					<a href="/exchanges">Exchanges</a>
					<Space>
						<a href="/">Homepage</a>
							<a href="/news">News</a>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default App;
