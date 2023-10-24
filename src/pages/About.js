import React from "react";
import { useParams } from "react-router-dom";

/* localhost:3000/about/products */

const About = () => {
	const { category } = useParams();

	return (
		<div>
			<h1>상품 분류 정보 : {category}</h1>
		</div>
	);
};

export default About;
