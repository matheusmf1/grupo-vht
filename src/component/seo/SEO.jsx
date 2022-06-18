import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export default function SEO() {

	const data = {
		title: "Grupo VHT",
		description:
			"Grupo VHT, Segurança, Automação e Sistemas",
		url: "https://grupovht.com",
		keywords: [
			"Grupo VHT",
			"VHT",
			"vht",
			"segurança",
			"segurança residencial",
			"segurança de condomínios",
			"automação",
			"automatização",
			"segurança eletrônica",
			"engenharia",
			"governos",
			"facilities",
			"cursos",
		],
	}

	return (
		// <head>
		<Helmet>
			<title>{data.title}</title>
			<meta name="title" content={data.title} />
			<meta name="description" content={data.description} />
			<meta name="keywords" content={data.keywords.join(", ")} />
		</Helmet>
		// </head>
	);
}

SEO.prototype = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string,
		image: PropTypes.string,
		url: PropTypes.string,
		keywords: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};