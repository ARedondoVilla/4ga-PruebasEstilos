import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Inicio = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<h1>Aplicando estilos</h1>
				</div>
			</div>
			<div className="row align-items-center">
				<div className="col-4 size-img text-center">
					<img src="https://picsum.photos/1080/1080" />
				</div>
				<div className="col-4 text-center">
					<h3>Alejandro Redondo Villa</h3>
				</div>
				<div className="col-4 text-center">
					<h3>Otro texto random</h3>
				</div>
			</div>
			<div className="row bg-color-row">
				<div className="col-1 box py-3" />
			</div>
			<div className="row my-4">
				<div className="col-4 py-3 box-card-form">
					<div className="row">
						<div className="col form-space text-center">
							<h3>Card form</h3>
						</div>
					</div>
					<hr className="solid" />
					<div className="row justify-content-center mt-4">
						<div className="col-6 text-center pos-button">
							<button className="style-button">Pulsar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
