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
		</div>
	);
};
