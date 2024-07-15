import React from "react";
import { Box, Divider, Typography, useTheme, Button } from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DescriptionIcon from "@mui/icons-material/Description";

import FlexBetween from "../FlexBetween";

const Reports = () => {
	const { palette } = useTheme();
	return (
		<Box
			padding="1rem"
			height="100%"
			width="100%"
			border={`1px solid ${palette.grey[300]}`}
			borderRadius="10px"
		>
			<Typography
				variant="h3"
				sx={{
					color: palette.grey[300],
					display: "flex",
					alignItems: "center",
				}}
			>
				<AssessmentIcon fontSize="large" sx={{ marginRight: "1rem" }} />
				Reports
			</Typography>
			<Divider sx={{ marginTop: 1, borderColor: palette.grey[700] }} />
			<FlexBetween marginTop="1.5rem" flexDirection="column">
				<Button
					variant="contained"
					color="info"
					startIcon={<AttachMoneyIcon />}
					sx={{
						width: "100%",
						height: "4rem",
						fontSize: "0.875rem",
						marginBottom: "1rem",
					}}
				>
					Revenue
				</Button>
				<Button
					variant="contained"
					color="secondary"
					startIcon={<ShoppingCartIcon />}
					sx={{
						width: "100%",
						height: "4rem",
						fontSize: "0.875rem",
						marginBottom: "1rem",
					}}
				>
					Purchases
				</Button>
				<Button
					variant="contained"
					color="primary"
					startIcon={<DescriptionIcon />}
					sx={{
						width: "100%",
						height: "4rem",
						fontSize: "0.875rem",
						marginBottom: "1rem",
					}}
				>
					Item Reports
				</Button>
			</FlexBetween>
		</Box>
	);
};

export default Reports;
