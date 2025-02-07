import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./scenes/login";
import Dashboard from "./scenes/dashboard";
import ItemRegistry from "./scenes/item-registry";
import Invoice from "./scenes/invoice";
import Stock from "./scenes/stock";

function App() {
	const theme = useMemo(() => createTheme(themeSettings), []);
	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box
						width="100%"
						height="100%"
						padding="1rem 2rem 4rem 2rem"
					>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route
								path="/item-registry"
								element={<ItemRegistry />}
							/>
							<Route path="/invoice" element={<Invoice />} />
							<Route path="/stock" element={<Stock />} />
						</Routes>
					</Box>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
