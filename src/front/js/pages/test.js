import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal } from "../component/modal";
import { Link } from "react-router-dom";

export const Test = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div className="row mt-4">
				<div className="col-xl-4 my-1">
					<div className="row box-card-user mx-1">
						<h3>perfil usuario</h3>
					</div>
				</div>
				<div className="col-xl-8 my-1">
					<div className="row box-card-post mx-1 align-items-center">
						<div className="col-lg-4 text-center img-post px-2 py-2">
							<img src="https://picsum.photos/800/800" alt="imagen" />
						</div>
						<div className="col-lg-8 px-2 py-2">
							<span className="text-muted">26 Diciembre 2020</span>
							<h3>Lorem Ipsum</h3>
							<p>
								Lorem fistrum qué dise usteer no te digo trigo por no llamarte Rodrigor a wan.
								Benemeritaar ese que llega ese hombree tiene musho peligro apetecan no puedor diodeno.
								Mamaar ahorarr fistro ese que llega diodenoo caballo blanco caballo negroorl te va a
								hasé pupitaa está la cosa muy malar.
							</p>
							<Link to="/inicio">
								<p type="button" className="button-post">
									Leer mas
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
