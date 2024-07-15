import { Typography, useTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import FlexBetween from "../FlexBetween";

const TotalPurchases = () => {
	const { palette } = useTheme();
	return (
		<FlexBetween gap="0.5rem">
			<ShoppingCartIcon
				fontSize="large"
				sx={{ color: palette.grey[300] }}
			/>
			<Typography variant="h5">Total Purchases</Typography>
			<Typography variant="h3" sx={{ color: palette.primary[100] }}>
				LKR 15,375
			</Typography>
		</FlexBetween>
	);
};

export default TotalPurchases;
