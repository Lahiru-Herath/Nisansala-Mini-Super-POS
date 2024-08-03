import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

const Navbar = () => {
	const { palette } = useTheme();
	const [selected, setSelected] = useState("dashboard");
	const location = useLocation();

	useEffect(() => {
		const path = location.pathname.split("/")[1];
		console.log(path);
		setSelected(path);
	}, [location]);

	return (
		<FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
			{/* LEFT SIDE */}
			<FlexBetween gap="0.75rem">
				<AllInclusiveIcon sx={{ fontSize: "20px" }} />
				<Typography variant="h3">Nisansala Mini Super</Typography>
			</FlexBetween>

			{/* RIGHT SIDE */}
			<FlexBetween gap="3rem">
				<Typography
					variant="h5"
					sx={{ "&:hover": { color: palette.primary[100] } }}
				>
					<Link
						to="/dashboard"
						style={{
							textDecoration: "inherit",
							marginRight: "1rem",
							color:
								selected === "dashboard"
									? palette.primary[100]
									: palette.grey[700],
						}}
					>
						Dashboard
					</Link>
					<Link
						to="/invoice"
						style={{
							textDecoration: "inherit",
							marginRight: "1rem",
							color:
								selected === "invoice"
									? palette.primary[100]
									: palette.grey[700],
						}}
					>
						Invoice
					</Link>
					<Link
						to="/dashboard"
						style={{
							textDecoration: "inherit",
							marginRight: "1rem",
							color:
								selected === "grn"
									? palette.primary[100]
									: palette.grey[700],
						}}
					>
						GRN
					</Link>
					<Link
						to="/stock"
						style={{
							textDecoration: "inherit",
							marginRight: "1rem",
							color:
								selected === "stock"
									? palette.primary[100]
									: palette.grey[700],
						}}
					>
						Stock
					</Link>
					<Link
						to="/item-registry"
						style={{
							textDecoration: "inherit",
							marginRight: "1rem",
							color:
								selected === "item-registry"
									? palette.primary[100]
									: palette.grey[700],
						}}
					>
						Products
					</Link>
					<Link
						to="/dashboard"
						onClick={() => setSelected("cash-registry")}
						style={{
							textDecoration: "inherit",
							color:
								selected === "cash-registry"
									? palette.primary[100]
									: palette.grey[700],
						}}
					>
						Cash
					</Link>
				</Typography>
				<FlexBetween gap="0.5rem">
					<Link
						to="/userinfo"
						onClick={() => setSelected("userinfo")}
						style={{
							textDecoration: "inherit",
							color:
								selected === "userinfo"
									? "inherit"
									: palette.grey[700],
						}}
					>
						<AccountCircleIcon
							sx={{
								fontSize: "28px",
								"&:hover": { color: palette.primary[100] },
							}}
						/>
					</Link>
					<Box>
						<Typography
							variant="h5"
							sx={{ "&:hover": { color: palette.primary[100] } }}
						>
							Lahiru Herath
						</Typography>
						<Typography
							variant="h6"
							sx={{ "&:hover": { color: palette.primary[100] } }}
						>
							Admin
						</Typography>
					</Box>
				</FlexBetween>
			</FlexBetween>
		</FlexBetween>
	);
};

export default Navbar;
