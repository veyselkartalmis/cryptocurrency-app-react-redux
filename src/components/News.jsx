import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

//API Function
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory: "Cryptocurrencies",
		count: simplified ? 10 : 100,
	});
	return <></>;
};

export default News;
