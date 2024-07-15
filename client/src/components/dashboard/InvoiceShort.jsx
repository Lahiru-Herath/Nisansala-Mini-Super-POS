import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import FlexBetween from "../FlexBetween";

const InvoiceShort = () => {
	const { palette } = useTheme();

	const invoices = [
		{ id: 1, date: "2024-07-10", amount: 150.0 },
		{ id: 2, date: "2024-07-11", amount: 250.0 },
		{ id: 3, date: "2024-07-12", amount: 75.0 },
	];

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
				<ReceiptIcon fontSize="large" sx={{ marginRight: "0.5rem" }} />
				Invoice
			</Typography>
			<Divider sx={{ my: 1, borderColor: palette.grey[700] }} />

			<Box>
				<Typography variant="h5" sx={{ color: palette.primary.main }}>
					Recent Invoices
				</Typography>
				<FlexBetween>
					<Box>
						{invoices.map((invoice) => (
							<Box
								key={invoice.id}
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								marginY="0.5rem"
								width="15rem"
							>
								<Typography sx={{ color: palette.grey[500] }}>
									{invoice.date}
								</Typography>
								<Typography sx={{ color: palette.grey[500] }}>
									LKR {invoice.amount.toFixed(2)}
								</Typography>
							</Box>
						))}
					</Box>
					<Button
						variant="contained"
						color="secondary"
						endIcon={<ViewHeadlineIcon />}
						sx={{
							marginTop: "1rem",
							width: "10rem",
							height: "6rem",
						}}
					>
						INVOICE HISTORY
					</Button>
					<Button
						variant="contained"
						color="primary"
						endIcon={<ArrowForwardIcon />}
						sx={{
							marginTop: "1rem",
							width: "10rem",
							height: "6rem",
						}}
					>
						INVOICE
					</Button>
				</FlexBetween>
			</Box>
		</Box>
	);
};

export default InvoiceShort;
