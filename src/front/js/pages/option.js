import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";
import { Link } from "react-router-dom";

import { Card } from "../component/card";

export const Option = () => {
	const { store, actions } = useContext(Context);

	const showPost = store.userPost.map((post, index) => {
		return (
			<div key={index}>
				<Card item={post} />
			</div>
		);
	});

	return (
		<div className="container">
			<ul className="nav nav-pills mb-3 d-flex justify-content-around" id="pills-tab" role="tablist">
				<li className="nav-item" role="presentation">
					<a
						className="nav-link active"
						id="pills-home-tab"
						data-toggle="pill"
						href="#post-user"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true">
						Mis publicaciones
					</a>
				</li>
				<li className="nav-item" role="presentation">
					<a
						className="nav-link"
						id="pills-profile-tab"
						data-toggle="pill"
						href="#post-feed"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false">
						Publicaciones de mi interes
					</a>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="post-user"
					role="tabpanel"
					aria-labelledby="pills-home-tab">
					{showPost}
				</div>
				<div className="tab-pane fade" id="post-feed" role="tabpanel" aria-labelledby="pills-profile-tab">
					Opción 2
				</div>
			</div>
		</div>
	);
};
