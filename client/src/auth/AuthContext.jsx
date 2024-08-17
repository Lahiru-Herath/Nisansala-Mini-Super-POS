import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getCookie } from "./cookie.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const token = getCookie("access_token");

		if (token) {
			try {
				const decoded = jwtDecode(token);
				console.log("Decoded Token: ", decoded);
				setUser(decoded);
			} catch (err) {
				console.error("Invalid token: ", err);
			}
		}
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
