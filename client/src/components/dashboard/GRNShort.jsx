import { Button, Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import FlexBetween from "../FlexBetween";

const GRNShort = () => {
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
				<KeyboardDoubleArrowDownIcon
					fontSize="large"
					sx={{ marginRight: "0.5rem" }}
				/>
				GRN
			</Typography>
			<Divider sx={{ marginTop: 1, borderColor: palette.grey[700] }} />
			<FlexBetween height="80%">
				<Button
					variant="contained"
					color="secondary"
					endIcon={<ViewHeadlineIcon />}
					sx={{
						marginTop: "1rem",
						width: "8rem",
						height: "5rem",
					}}
				>
					GRN HISTORY
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
					GRN
				</Button>
			</FlexBetween>
		</Box>
	);
};

export default GRNShort;
