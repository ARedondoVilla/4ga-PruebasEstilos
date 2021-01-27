import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Inicio = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<h1>Aplicando estilos aqui....a ver que cojones sale!!!!</h1>
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
			<div className="row">
				<div className="col-4 box py-3" />
				<div className="col-4 box" />
				<div className="col-4 box" />
			</div>
		</div>
	);
};
