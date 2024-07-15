import React from "react";
import { Typography, useTheme } from "@mui/material";
import BalanceIcon from "@mui/icons-material/Balance";

import FlexBetween from "../FlexBetween";

const Balance = () => {
	const { palette } = useTheme();
	return (
		<FlexBetween gap="0.5rem">
			<BalanceIcon fontSize="large" sx={{ color: palette.grey[300] }} />
			<Typography variant="h5">Cash Balance</Typography>
			<Typography variant="h3" sx={{ color: palette.primary[100] }}>
				LKR 15,375
			</Typography>
		</FlexBetween>
	);
};

export default Balance;
