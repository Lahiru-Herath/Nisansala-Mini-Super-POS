import { Button, Box, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import BookIcon from "@mui/icons-material/Book";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddIcon from "@mui/icons-material/Add";

import FlexBetween from "../FlexBetween";

const ItemRegistryShort = () => {
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
				<BookIcon fontSize="large" sx={{ marginRight: "1rem" }} />
				Item Registry
			</Typography>
			<Divider sx={{ marginTop: 1, borderColor: palette.grey[700] }} />
			<FlexBetween height="80%">
				<Button
					variant="contained"
					color="secondary"
					endIcon={<AddIcon />}
					sx={{
						marginTop: "1rem",
						width: "8rem",
						height: "5rem",
					}}
				>
					ADD ITEM
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
					ITEM LIST
				</Button>
			</FlexBetween>
		</Box>
	);
};

export default ItemRegistryShort;
