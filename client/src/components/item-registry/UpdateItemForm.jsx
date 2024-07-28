import React, { useState, useEffect } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	useTheme,
} from "@mui/material";

const UpdateItemForm = ({ open, handleClose, handleUpdate, itemToEdit }) => {
	const { palette } = useTheme();
	const [formValues, setFormValues] = useState({
		name: "",
		barcode: "",
		description: "",
		buyingPrice: "",
		sellingPrice: "",
		category: "",
		stockQuantity: "",
		status: "",
	});

	useEffect(() => {
		if (itemToEdit) {
			setFormValues({
				name: itemToEdit.name,
				barcode: itemToEdit.barcode,
				description: itemToEdit.description,
				buyingPrice: itemToEdit.buyingPrice,
				sellingPrice: itemToEdit.sellingPrice,
				category: itemToEdit.category,
				stockQuantity: itemToEdit.stockQuantity,
				status: itemToEdit.status,
			});
		}
	}, [itemToEdit]);

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		handleUpdate(formValues);
		handleClose();
	};

	return (
		<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
			<DialogTitle
				sx={{ backgroundColor: palette.primary.main, color: "#fff" }}
			>
				Update Item
			</DialogTitle>
			<DialogContent>
				<TextField
					label="Name"
					name="name"
					value={formValues.name}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Barcode"
					name="barcode"
					value={formValues.barcode}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Description"
					name="description"
					value={formValues.description}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Buying Price"
					name="buyingPrice"
					type="number"
					value={formValues.buyingPrice}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Selling Price"
					name="sellingPrice"
					type="number"
					value={formValues.sellingPrice}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<FormControl fullWidth margin="normal">
					<InputLabel>Category</InputLabel>
					<Select
						name="category"
						value={formValues.category}
						onChange={handleChange}
					>
						<MenuItem value="Produce">Produce</MenuItem>
						<MenuItem value="Deli">Deli</MenuItem>
						<MenuItem value="Bakery">Bakery</MenuItem>
						<MenuItem value="Dairy">Dairy</MenuItem>
						<MenuItem value="Frozen Foods">Frozen Foods</MenuItem>
						<MenuItem value="Pantry Staples">
							Pantry Staples
						</MenuItem>
						<MenuItem value="Beverages">Beverages</MenuItem>
						<MenuItem value="Snacks">Snacks</MenuItem>
						<MenuItem value="Breakfast Foods">
							Breakfast Foods
						</MenuItem>
						<MenuItem value="Health and Beauty">
							Health and Beauty
						</MenuItem>
						<MenuItem value="Household Supplies">
							Household Supplies
						</MenuItem>
						<MenuItem value="Baby Products">Baby Products</MenuItem>
						<MenuItem value="Pet Supplies">Pet Supplies</MenuItem>
						<MenuItem value="Pharmacy">Pharmacy</MenuItem>
						<MenuItem value="Bulk Foods">Bulk Foods</MenuItem>
						<MenuItem value="Organic and Natural">
							Organic and Natural Foods
						</MenuItem>
					</Select>
				</FormControl>
				<TextField
					label="Stock Quantity"
					name="stockQuantity"
					type="number"
					value={formValues.stockQuantity}
					onChange={handleChange}
					fullWidth
					margin="normal"
				/>
				<FormControl fullWidth margin="normal">
					<InputLabel>Status</InputLabel>
					<Select
						name="status"
						value={formValues.status}
						onChange={handleChange}
					>
						<MenuItem value="Active">Active</MenuItem>
						<MenuItem value="Inactive">Inactive</MenuItem>
					</Select>
				</FormControl>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary">
					Cancel
				</Button>
				<Button onClick={handleSubmit} color="primary">
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default UpdateItemForm;
