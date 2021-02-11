import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";
import { Link } from "react-router-dom";

import { Card } from "../component/card";

export const Option = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<h3>COLUM 4</h3>
				</div>
				<div className="col-8">
					<h3>COLUM 8</h3>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<hr className="line-divisor" />
				</div>
			</div>
			<div className="row">
				<div className="col-4">
					<h3>COLUM 4</h3>
				</div>
				<div className="col-8">
					<h3>COLUM 8</h3>
				</div>
			</div>
		</div>
	);
};
