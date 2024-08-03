import React, { useState, useEffect } from "react";
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
	Autocomplete,
} from "@mui/material";
import Navbar from "../navbar";
import FlexBetween from "../../components/FlexBetween";
import { getItems } from "../../state/item-registry-api";

const Invoice = () => {
	const { palette } = useTheme();
	const [items, setItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedItem, setSelectedItem] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [invoiceItems, setInvoiceItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [payment, setPayment] = useState(0);
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const data = await getItems();
				setItems(data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchItems();
	}, []);

	useEffect(() => {
		const newTotalPrice = invoiceItems.reduce(
			(total, item) => total + item.sellingPrice * item.quantity,
			0
		);
		setTotalPrice(newTotalPrice);
	}, [invoiceItems]);

	useEffect(() => {
		const newBalance = payment - totalPrice;
		setBalance(newBalance);
	}, [payment, totalPrice]);

	const handlePaymentChange = (e) => {
		setPayment(e.target.value);
	};

	const handleSelectItem = (event, value) => {
		setSelectedItem(value);
	};

	const handleAddItem = () => {
		if (selectedItem && quantity > 0) {
			const newItem = {
				...selectedItem,
				quantity,
			};
			setInvoiceItems([...invoiceItems, newItem]);
			setSelectedItem(null);
			setQuantity(1);
		}
	};

	return (
		<>
			<Navbar />
			<Box padding="1rem">
				<Typography variant="h3" sx={{ color: palette.grey[300] }}>
					Invoice
				</Typography>
			</Box>
			<Divider sx={{ my: 2, borderColor: palette.grey[700] }} />
			<FlexBetween>
				<Autocomplete
					options={items}
					getOptionLabel={(option) => option.name}
					value={selectedItem}
					onChange={handleSelectItem}
					inputValue={searchQuery}
					onInputChange={(event, newInputValue) =>
						setSearchQuery(newInputValue)
					}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Search"
							variant="outlined"
							fullWidth
							sx={{
								width: "20rem",
								"& .MuiOutlinedInput-root": {
									"& fieldset": {
										borderColor: palette.grey[300],
									},
									"&:hover fieldset": {
										borderColor: palette.primary.dark,
									},
									"&.Mui-focused fieldset": {
										borderColor: palette.primary.main,
									},
								},
								"& .MuiInputLabel-root": {
									color: palette.grey[300],
								},
								"& .MuiInputLabel-root.Mui-focused": {
									color: palette.primary.main,
								},
								"& .MuiOutlinedInput-input": {
									color: palette.primary.main,
								},
								"& .MuiAutocomplete-popupIndicator": {
									color: palette.grey[300],
									"&:hover": {
										color: palette.primary.dark,
									},
									"&.Mui-focused": {
										color: palette.primary.main,
									},
								},
								"& .MuiAutocomplete-clearIndicator": {
									color: palette.grey[300],
									"&:hover": {
										color: palette.primary.dark,
									},
									"&.Mui-focused": {
										color: palette.primary.main,
									},
								},
							}}
						/>
					)}
				/>
				<TextField
					label="Available"
					variant="outlined"
					value={selectedItem ? selectedItem.stockQuantity : ""}
					InputProps={{ readOnly: true }}
					sx={{
						width: "15rem",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: palette.grey[300],
							},
							"&:hover fieldset": {
								borderColor: palette.primary.dark,
							},
							"&.Mui-focused fieldset": {
								borderColor: palette.primary.main,
							},
						},
						"& .MuiInputLabel-root": {
							color: palette.grey[300],
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: palette.primary.main,
						},
						"& .MuiOutlinedInput-input": {
							color: palette.primary.main,
						},
					}}
				/>
				<TextField
					label="Cost"
					variant="outlined"
					value={selectedItem ? selectedItem.buyingPrice : ""}
					sx={{
						width: "15rem",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: palette.grey[300],
							},
							"&:hover fieldset": {
								borderColor: palette.primary.dark,
							},
							"&.Mui-focused fieldset": {
								borderColor: palette.primary.main,
							},
						},
						"& .MuiInputLabel-root": {
							color: palette.grey[300],
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: palette.primary.main,
						},
						"& .MuiOutlinedInput-input": {
							color: palette.primary.main,
						},
					}}
				/>
				<TextField
					label="Unit Price"
					variant="outlined"
					value={selectedItem ? selectedItem.sellingPrice : ""}
					sx={{
						width: "15rem",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: palette.grey[300],
							},
							"&:hover fieldset": {
								borderColor: palette.primary.dark,
							},
							"&.Mui-focused fieldset": {
								borderColor: palette.primary.main,
							},
						},
						"& .MuiInputLabel-root": {
							color: palette.grey[300],
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: palette.primary.main,
						},
						"& .MuiOutlinedInput-input": {
							color: palette.primary.main,
						},
					}}
				/>
				<TextField
					label="Quantity"
					variant="outlined"
					type="number"
					value={quantity}
					onChange={(e) => setQuantity(parseInt(e.target.value))}
					sx={{
						width: "15rem",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: palette.grey[300],
							},
							"&:hover fieldset": {
								borderColor: palette.primary.dark,
							},
							"&.Mui-focused fieldset": {
								borderColor: palette.primary.main,
							},
						},
						"& .MuiInputLabel-root": {
							color: palette.grey[300],
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: palette.primary.main,
						},
						"& .MuiOutlinedInput-input": {
							color: palette.primary.main,
						},
						"& input[type=number]": {
							"&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
								"-webkit-appearance": "none",
								margin: 0,
							},
							"&[type='number']": {
								MozAppearance: "textfield",
							},
							/* Hide spin buttons in Firefox */
							"& input[type=number]::-moz-inner-spin-button": {
								MozAppearance: "none",
								margin: 0,
							},
						},
					}}
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={handleAddItem}
					sx={{ height: "2.5rem" }}
				>
					Add Item
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
								Index
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Barcode
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Name
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Unit Price
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Quantity
							</TableCell>
							<TableCell sx={{ color: palette.primary.main }}>
								Total Price
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{invoiceItems.map((item, index) => (
							<TableRow key={item._id}>
								<TableCell sx={{ color: palette.grey[100] }}>
									{index + 1}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.barcode}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.name}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.sellingPrice}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.quantity}
								</TableCell>
								<TableCell sx={{ color: palette.grey[100] }}>
									{item.sellingPrice * item.quantity}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Box padding="1rem" textAlign="right">
				<Typography variant="h1" sx={{ color: palette.grey[300] }}>
					Total: {totalPrice}
				</Typography>
				<TextField
					label="Payment"
					variant="outlined"
					value={payment}
					onChange={handlePaymentChange}
					sx={{
						marginTop: "1rem",
						width: "15rem",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: palette.grey[300],
							},
							"&:hover fieldset": {
								borderColor: palette.primary.dark,
							},
							"&.Mui-focused fieldset": {
								borderColor: palette.primary.main,
							},
						},
						"& .MuiInputLabel-root": {
							color: palette.grey[300],
						},
						"& .MuiInputLabel-root.Mui-focused": {
							color: palette.primary.main,
						},
						"& .MuiOutlinedInput-input": {
							color: palette.primary.main,
						},
					}}
				/>
				<Typography
					variant="h1"
					sx={{ color: palette.grey[300], marginTop: "1rem" }}
				>
					Balance: {balance}
				</Typography>
				<Button
					variant="contained"
					color="primary"
					sx={{ maringTop: "1rem" }}
				>
					Create Order
				</Button>
			</Box>
		</>
	);
};

export default Invoice;
