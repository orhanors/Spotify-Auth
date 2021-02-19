import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user";
import { useHistory } from "react-router-dom";

function Logout(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	const { isLoggedIn } = useSelector((state) => state.user);
	const handleLogout = () => {
		dispatch(logout());

		if (isLoggedIn) {
			history.push("/login");
		}
	};
	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}

export default Logout;
