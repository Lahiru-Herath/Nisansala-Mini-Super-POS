import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/login-api.js";

const Login = () => {
	const { palette } = useTheme();
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const data = await login(username, password);

			// HANDLE SUCCESSFUL LOGIN
			console.log("Login successful", data);

			// CLEARING THE ERROR
			setError("");

			// REDIRECT TO THE DASHBOARD
			navigate("/dashboard");
		} catch (err) {
			console.error("Login Failed", err);
			err.response && err.response.status === 400
				? setError(
						"Username or password is incorrect, please try again."
				  )
				: setError(
						"An unexpected error occured. Please try again later."
				  );

			// CLEAR USERNAME AND PASSWORD FIELDS
			setUsername("");
			setPassword("");
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
			width="100%"
		>
			<Box
				width="20%"
				minWidth="300px"
				height="50%"
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				border={`2px solid ${palette.primary.main}`}
				borderRadius="8px"
				boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
			>
				<AllInclusiveIcon
					sx={{
						fontSize: "40px",
						color: palette.primary[300],
						"&:hover": { color: palette.secondary.main },
					}}
				/>
				<Typography
					variant="h1"
					fontSize="20px"
					color={palette.primary[300]}
				>
					Nisansala Mini Super
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					display="flex"
					flexDirection="column"
					width="100%"
					maxWidth="400px"
					padding="2rem"
				>
					{error && (
						<Typography color="error" variant="body2">
							{error}
						</Typography>
					)}
					<TextField
						label="Username"
						variant="outlined"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						margin="normal"
						fullWidth
						required
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: palette.grey[300],
								},
								"&:hover fieldset": {
									borderColor: palette.primary.dark,
								},
								"&.Mui-focused fieldset": {
									borderColor: palette.primary.main,
								},
							},
							"& .MuiInputLabel-root": {
								color: palette.grey[300],
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: palette.primary.main,
							},
							"& .MuiOutlinedInput-input": {
								color: palette.primary.main,
							},
						}}
					/>
					<TextField
						label="Password"
						variant="outlined"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						margin="normal"
						fullWidth
						required
						sx={{
							"& .MuiOutlinedInput-root": {
								"& fieldset": {
									borderColor: palette.grey[300],
								},
								"&:hover fieldset": {
									borderColor: palette.primary.dark,
								},
								"&.Mui-focused fieldset": {
									borderColor: palette.primary.main,
								},
							},
							"& .MuiInputLabel-root": {
								color: palette.grey[300],
							},
							"& .MuiInputLabel-root.Mui-focused": {
								color: palette.primary.main,
							},
							"& .MuiOutlinedInput-input": {
								color: palette.primary.main,
							},
						}}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						sx={{ mt: 2 }}
					>
						Login
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Login;
