import React from "react";
import { Typography, useTheme } from "@mui/material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";

import FlexBetween from "../FlexBetween";

const CashInHand = () => {
	const { palette } = useTheme();
	return (
		<FlexBetween gap="0.5rem">
			<PriceCheckIcon
				fontSize="large"
				sx={{ color: palette.grey[300] }}
			/>
			<Typography variant="h5">Cash In Hand</Typography>
			<Typography variant="h3" sx={{ color: palette.primary[100] }}>
				LKR 15,375
			</Typography>
		</FlexBetween>
	);
};

export default CashInHand;
