import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Inicio = () => {
	const { store, actions } = useContext(Context);
	const [text, setText] = useState("");
	const [height, setHeight] = useState(0);

	useEffect(
		() => {
			console.log(text.length);
			console.log(height);
			if (text.length % 85 === 0) {
				setHeight(height + 1);
				// console.log("han pasado 40");
			}
		},
		[text.length % 85 === 0]
	);

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
			<div className="row">
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					rows={height}
					onChange={e => setText(e.target.value)}
				/>
			</div>
		</div>
	);
};
