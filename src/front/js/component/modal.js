import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.js";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);
	console.log(props.show);

	return (
		<div
			className={props.show ? "modal" : ""}
			id="exampleModal"
			tabIndex="-1"
			style={{ display: props.show ? "inline-block" : "none" }}
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div className="modal-dialog" role="document">
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
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	show: PropTypes.bool
};

Modal.defaultProps = {
	show: false
};
