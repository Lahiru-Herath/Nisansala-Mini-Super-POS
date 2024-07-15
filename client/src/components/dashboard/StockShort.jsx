import { Button, Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";

import FlexBetween from "../FlexBetween";

const StockShort = () => {
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
				<Inventory2Icon fontSize="large" sx={{ marginRight: "1rem" }} />
				Stock
			</Typography>
			<Divider sx={{ marginTop: 1, borderColor: palette.grey[700] }} />
			<FlexBetween height="80%">
				<Button
					variant="contained"
					color="secondary"
					endIcon={<SearchIcon />}
					sx={{
						marginTop: "1rem",
						width: "8rem",
						height: "5rem",
					}}
				>
					SEARCH STOCK
				</Button>
				<Button
					variant="contained"
					color="primary"
					endIcon={<ArrowForwardIcon />}
					sx={{
						marginTop: "1rem",
						width: "8rem",
						height: "5rem",
					}}
				>
					STOCK
				</Button>
			</FlexBetween>
		</Box>
	);
};

export default StockShort;
