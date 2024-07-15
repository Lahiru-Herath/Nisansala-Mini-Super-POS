import React, { useState } from "react";
import {
	Box,
	Button,
	Divider,
	Typography,
	TextField,
	useTheme,
} from "@mui/material";

const DailyFinancialRegistry = () => {
	const { palette } = useTheme();
	const [amount, setAmount] = useState("");
	const [entries, setEntries] = useState([]);

	const handleAddEntry = (type) => {
		if (amount) {
			const newEntry = {
				id: entries.length + 1,
				date: new Date().toLocaleDateString(),
				amount: parseFloat(amount),
				type,
			};
			setEntries([...entries, newEntry]);
			setAmount("");
		}
	};

	return (
		<Box
			padding="1rem"
			height="100%"
			width="100%"
			border={`1px solid ${palette.grey[300]}`}
			borderRadius="8px"
		>
			<Typography
				variant="h3"
				sx={{
					color: palette.grey[300],
					display: "flex",
					alignItems: "center",
				}}
			>
				Daily Financial Registry
			</Typography>
			<Divider sx={{ my: 1, borderColor: palette.grey[700] }} />
			<Box marginBottom="1rem">
				<TextField
					label="Amount"
					variant="outlined"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					fullWidth
				/>
				<Box
					display="flex"
					justifyContent="space-between"
					marginTop="1rem"
				>
					<Button
						variant="contained"
						color="primary"
						onClick={() => handleAddEntry("investment")}
					>
						Add Investment
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={() => handleAddEntry("withdrawal")}
					>
						Add Withdrawal
					</Button>
				</Box>
			</Box>
			<Typography variant="h5" sx={{ color: palette.primary.main }}>
				Recent Entries
			</Typography>
			{entries.length === 0 ? (
				<Typography sx={{ color: palette.grey[500] }}>
					No entries yet.
				</Typography>
			) : (
				entries.map((entry) => (
					<Box
						key={entry.id}
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						marginY="0.5rem"
					>
						<Typography sx={{ color: palette.grey[500] }}>
							{entry.date}
						</Typography>
						<Typography
							sx={{
								color:
									entry.type === "investment"
										? palette.success.main
										: palette.error.main,
							}}
						>
							{entry.type === "investment" ? "+" : "-"} LKR{" "}
							{entry.amount.toFixed(2)}
						</Typography>
					</Box>
				))
			)}
		</Box>
	);
};

export default DailyFinancialRegistry;
