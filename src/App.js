import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
	Navbar,
	HomePage,
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
						<a href="https://github.com/veyselkartalmis" target="_blank">@veyselkartalmis</a>
					</Typography.Title>
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
