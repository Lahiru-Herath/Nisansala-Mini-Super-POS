import React from "react";
import { useTheme, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import FlexBetween from "../FlexBetween";

const TotalSales = () => {
	const { palette } = useTheme();

	return (
		<FlexBetween gap="0.5rem">
			<AttachMoneyIcon
				fontSize="large"
				sx={{ color: palette.grey[300] }}
			/>
			<Typography variant="h5">Total Sales</Typography>
			<Typography variant="h3" sx={{ color: palette.primary[100] }}>
				LKR 15,375
			</Typography>
		</FlexBetween>
	);
};

export default TotalSales;
