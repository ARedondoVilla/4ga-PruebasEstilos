import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";

export const Test = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<h1>Prueba del modal</h1>
				</div>
			</div>
			<button
				type="button"
				className="btn btn-primary"
				data-toggle="modal"
				data-target="#exampleModal"
				onClick={() => setState({ showModal: true })}>
				Launch demo modal
			</button>
			<Modal show={state.showModal} />
		</div>
	);
};
