import {
	useTheme,
	Typography,
	Divider,
	Box,
	TextField,
	Button,
} from "@mui/material";
import React, { useState } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ReorderIcon from "@mui/icons-material/Reorder";
import FlexBetween from "../FlexBetween";

const InvestmentAndWithdrawal = () => {
	const { palette } = useTheme();
	const [amount, setAmount] = useState("");

	return (
		<Box
			padding="0.5rem"
			height="100%"
			width="100%"
			border={`1px solid ${palette.grey[300]}`}
			borderRadius="8px"
		>
			<Typography
				variant="h4"
				sx={{
					color: palette.grey[300],
					display: "flex",
					alignItems: "center",
				}}
			>
				<AccountBalanceIcon
					fontSize="1rem"
					sx={{ marginRight: "1rem" }}
				/>
				Investment and Withdrawal Ledger
			</Typography>
			<Divider sx={{ my: 1, borderColor: palette.grey[700] }} />
			<FlexBetween>
				<TextField
					label="Amount"
					variant="outlined"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					sx={{
						width: "25%",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: palette.grey[300],
							},
							"&:hover fieldset": {
								borderColor: palette.primary.main,
							},
							"&.Mui-focused fieldset": {
								borderColor: palette.primary.main,
							},
							"& input": {
								height: "1rem",
							},
						},
						"& .MuiInputLabel-outlined": {
							color: palette.grey[300],
							"&.Mui-focused": {
								color: palette.primary.main,
							},
						},
					}}
				/>
				<Button
					variant="contained"
					color="info"
					startIcon={<ArrowUpwardIcon />}
					sx={{
						width: "10rem",
						height: "2.5rem",
						fontSize: "0.875rem",
						marginBottom: "0.5rem",
					}}
				>
					INVESTMENT
				</Button>
				<Button
					variant="contained"
					color="secondary"
					startIcon={<ArrowDownwardIcon />}
					sx={{
						width: "10rem",
						height: "2.5rem",
						fontSize: "0.875rem",
						marginBottom: "0.5rem",
					}}
				>
					WITHDRAWAL
				</Button>
				<Button
					variant="contained"
					color="primary"
					startIcon={<ReorderIcon />}
					sx={{
						width: "10rem",
						height: "2.5rem",
						fontSize: "0.875rem",
						marginBottom: "0.5rem",
					}}
				>
					VIEW LEDGER
				</Button>
			</FlexBetween>
		</Box>
	);
};

export default InvestmentAndWithdrawal;
