import { Button, Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import FlexBetween from "../FlexBetween";

const SuppliersShort = () => {
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
				<PersonIcon fontSize="large" sx={{ marginRight: "1rem" }} />
				Suppliers
			</Typography>
			<Divider sx={{ marginTop: 1, borderColor: palette.grey[700] }} />
			<FlexBetween height="80%">
				<Button
					variant="contained"
					color="secondary"
					endIcon={<PersonAddIcon />}
					sx={{
						marginTop: "1rem",
						width: "8rem",
						height: "5rem",
					}}
				>
					ADD SUPPLIER
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
					SUPPLIERS
				</Button>
			</FlexBetween>
		</Box>
	);
};

export default SuppliersShort;
