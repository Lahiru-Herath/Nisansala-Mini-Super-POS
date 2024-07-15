import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import { Box, Divider, Typography, useTheme, Button } from "@mui/material";
import FlexBetween from "../FlexBetween";

const UserInfo = () => {
	const { palette } = useTheme();

	const user = {
		firstName: "Lahiru",
		lastName: "Herath",
		username: "Lahiru_Herath",
		email: "hmlahirubh123@gmail.com",
		isAdmin: true,
	};

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
				<AccountCircleIcon
					fontSize="large"
					sx={{ marginRight: "1rem" }}
				/>
				User Info
			</Typography>
			<Divider sx={{ marginTop: 1, borderColor: palette.grey[700] }} />
			<Box marginTop="1rem">
				<Box
					display="flex"
					flexDirection="row"
					justifyContent="space-evenly"
				>
					<AccountBoxIcon
						fontSize="large"
						sx={{ color: palette.grey[500], fontSize: "5rem" }}
					/>
					<FlexBetween flexDirection="column" width="50%">
						<FlexBetween alignItems="baseline">
							<Typography
								variant="h5"
								sx={{ color: palette.primary.main }}
							>
								{user.firstName} {user.lastName}
							</Typography>
							<Typography
								variant="h6"
								sx={{
									color: palette.grey[600],
									marginLeft: "0.5rem",
									fontStyle: "italic",
								}}
							>
								{user.isAdmin ? "Admin" : "Cashier"}
							</Typography>
						</FlexBetween>
						<Typography
							variant="h6"
							sx={{
								color: palette.grey[500],
								marginTop: "0.5rem",
							}}
						>
							{user.username}
						</Typography>
						<Typography
							variant="h6"
							sx={{
								color: palette.grey[500],
								marginTop: "0.5rem",
							}}
						>
							{user.email}
						</Typography>
					</FlexBetween>
				</Box>
				<FlexBetween marginTop="1.5rem" flexDirection="column">
					<Button
						variant="contained"
						color="info"
						startIcon={<EditIcon />}
						sx={{
							width: "100%",
							height: "2.5rem",
							fontSize: "0.875rem",
							marginBottom: "0.5rem",
						}}
					>
						Edit Info
					</Button>
					<Button
						variant="contained"
						color="secondary"
						startIcon={<PersonAddIcon />}
						sx={{
							width: "100%",
							height: "2.5rem",
							fontSize: "0.875rem",
							marginBottom: "0.5rem",
						}}
					>
						Add New User
					</Button>
					<Button
						variant="contained"
						color="primary"
						startIcon={<PeopleIcon />}
						sx={{
							width: "100%",
							height: "2.5rem",
							fontSize: "0.875rem",
							marginBottom: "0.5rem",
						}}
					>
						View All Users
					</Button>
				</FlexBetween>
			</Box>
		</Box>
	);
};

export default UserInfo;
