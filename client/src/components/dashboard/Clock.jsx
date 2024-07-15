import { Box, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

const Clock = () => {
	const { palette } = useTheme();
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Box padding="1rem">
			<Typography
				variant="h3"
				textAlign="center"
				fontWeight="600"
				sx={{ color: palette.primary[100] }}
			>
				{time.toString().slice(16, 21)}
			</Typography>
			<Typography variant="h5" sx={{ color: palette.grey[100] }}>
				{time.toString().slice(0, 16)}
			</Typography>
		</Box>
	);
};

export default Clock;
