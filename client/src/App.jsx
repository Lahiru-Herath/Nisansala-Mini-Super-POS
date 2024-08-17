import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./scenes/login";
import Dashboard from "./scenes/dashboard";
import ItemRegistry from "./scenes/item-registry";
import Invoice from "./scenes/invoice";
import Stock from "./scenes/stock";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	const theme = useMemo(() => createTheme(themeSettings), []);
	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<AuthProvider>
						<Box
							width="100%"
							height="100%"
							padding="1rem 2rem 4rem 2rem"
						>
							<Routes>
								<Route path="/" element={<Login />} />
								<Route
									path="/dashboard"
									element={
										<ProtectedRoute>
											<Dashboard />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/item-registry"
									element={
										<ProtectedRoute>
											<ItemRegistry />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/invoice"
									element={
										<ProtectedRoute>
											<Invoice />
										</ProtectedRoute>
									}
								/>
								<Route
									path="/stock"
									element={
										<ProtectedRoute>
											<Stock />
										</ProtectedRoute>
									}
								/>
							</Routes>
						</Box>
					</AuthProvider>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
