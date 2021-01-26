import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Inicio = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1>Aplicando estilos aqui....a ver que cojones sale!!!!</h1>
				</div>
			</div>
			<div className="row">
				<div className="col size-img">
					<img src="https://picsum.photos/400/400" />
				</div>
			</div>
		</div>
	);
};
