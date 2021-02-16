import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import { Link } from "react-router-dom";

export const ModalTest = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<h1>Po toma modal!</h1>
			</div>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Launch demo modal
			</button>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Modal title
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">...</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={e => {
									window.location.reload();
								}}>
								Hace algo y vuelve a la pagina anterior
							</button>
						</div>
					</div>
				</div>
			</div>
			<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li className="nav-item">
					<a
						className="nav-link active"
						id="pills-home-tab"
						data-toggle="pill"
						href="#pills-home"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="pills-profile-tab"
						data-toggle="pill"
						href="#pills-profile"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false">
						Profile
					</a>
				</li>
				<li className="nav-item">
					<a
						className="nav-link"
						id="pills-contact-tab"
						data-toggle="pill"
						href="#pills-contact"
						role="tab"
						aria-controls="pills-contact"
						aria-selected="false">
						Contact
					</a>
				</li>
			</ul>
			<div className="tab-content" id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="pills-home"
					role="tabpanel"
					aria-labelledby="pills-home-tab">
					opcion 1
				</div>
				<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
					opcion 2
				</div>
				<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
					opcion 3
				</div>
			</div>
		</div>
	);
};
