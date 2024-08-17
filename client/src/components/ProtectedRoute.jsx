import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
	const { user } = useAuth();

	if (!user) {
		console.log("You are not autherized.");
		return <Navigate to="/" />;
	}

	return children;
};

export default ProtectedRoute;
