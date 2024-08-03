import {
	Box,
	Button,
	Divider,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getItems } from "../../state/item-registry-api";
import Navbar from "../navbar";
import FlexBetween from "../../components/FlexBetween";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ListIcon from "@mui/icons-material/List";

const Stock = () => {
	const { palette } = useTheme();
	const [items, setItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const data = await getItems();
				setItems(data);
				console.log("data", data);
				console.log("items", items);
			} catch (err) {
				console.error(err);
			}
		};
		fetchItems();
	}, []);

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	const filteredItems = items.filter(
		(item) =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.barcode.includes(searchQuery)
	);

	return (
		<>
			<Navbar />
			<Box padding="1rem">
				<Typography variant="h3" sx={{ color: palette.grey[300] }}>
					Stock
				</Typography>
			</Box>
			<Divider sx={{ my: 2, borderColor: palette.grey[700] }} />
			<FlexBetween>
				<TextField
					label="Search"
					variant="outlined"
					value={searchQuery}
					onChange={handleSearch}
					sx={{
						width: "40%",
						"& .MuiOutlinedInput-root": {
							height: "2.5rem",
							"& fieldset": {
								borderColor: palette.grey[300],
							},
							"&:hover fieldset": {
								borderColor: palette.primary[100],
							},
							"&.Mui-focused fieldset": {
								borderColor: palette.primary[100],
							},
							"& input": {
								height: "2rem",
							},
						},
						"& .MuiInputLabel-outlined": {
							color: palette.grey[300],
							"&.Mui-focused": {
								color: palette.primary[100],
							},
						},
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					startIcon={<KeyboardDoubleArrowDownIcon />}
					sx={{ height: "2.5rem" }}
				>
					GRN
				</Button>
			</FlexBetween>
			<TableContainer
				component={Paper}
				sx={{
					marginTop: 2,
					backgroundColor: palette.background.light,
					borderRadius: 2,
					padding: 1,
				}}
			>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell sx={{ color: palette.primary.main }}>
								Item Name
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Barcode
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Description
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Stock Quantity
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Stock Transactions
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredItems.map((item) => (
							<TableRow key={item._id}>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.name}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.barcode}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.description}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.stockQuantity}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									<FlexBetween>
										<Button
											variant="outlined"
											color="primary"
											size="small"
											sx={{
												marginRight: 1,
												height: "2rem",
											}}
										>
											<ListIcon />
										</Button>
									</FlexBetween>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default Stock;
