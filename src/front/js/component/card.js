import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const { item } = props;
	return (
		<div className="row">
			<h1>A ver si funciona</h1>
			<h1>{item.username}</h1>
		</div>
	);
};

Card.propTypes = {
	item: PropTypes.object
};
