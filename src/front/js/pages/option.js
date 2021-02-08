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
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1>Titulo</h1>
					</div>
					<div className="col-12">
						<h3>Subtitulo</h3>
					</div>
					<div className="col-12">
						<div className="row justify-content-center">
							<div className="col-9">
								<p>
									Lorem fistrum ese pedazo de no te digo trigo por no llamarte Rodrigor de la pradera
									amatomaa la caidita a wan de la pradera sexuarl condemor condemor. Te va a hasé
									pupitaa diodenoo diodeno ahorarr amatomaa se calle ustée torpedo la caidita hasta
									luego Lucas. Ahorarr papaar papaar no te digo trigo por no llamarte Rodrigor
									diodenoo a gramenawer qué dise usteer amatomaa. Por la gloria de mi madre a wan
									fistro qué dise usteer benemeritaar te voy a borrar el cerito diodeno no te digo
									trigo por no llamarte Rodrigor condemor. Fistro está la cosa muy malar pupita
									fistro. Pupita tiene musho peligro quietooor de la pradera pecador te voy a borrar
									el cerito caballo blanco caballo negroorl te voy a borrar el cerito.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fluid-container full-width-color" />
		</>
	);
};
