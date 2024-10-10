import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Divider,
	TextField,
	Typography,
	useTheme,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

import Navbar from "../navbar";
import FlexBetween from "../../components/FlexBetween";
import {
	createItem,
	deleteItem,
	getItems,
	updateItem,
} from "../../state/item-registry-api";
import AddItemForm from "../../components/item-registry/AddItemForm";
import UpdateItemForm from "../../components/item-registry/UpdateItemForm";
import ConfirmationDialog from "../../components/ConfirmationDialog";
import usePreventBackNav from "../../hooks/usePreventBackNav";

const ItemRegistry = () => {
	const { palette } = useTheme();
	const [items, setItems] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [openAdd, setOpenAdd] = useState(false);
	const [itemToEdit, setItemToEdit] = useState(null);
	const [itemToDelete, setItemToDelete] = useState(null);
	const [openUpdate, setOpenUpdate] = useState(false);
	const [updatedItem, setUpdatedItem] = useState(null);
	const [
		openUpdateConfirmationDialog,
		setOpenUpdateConfirmationDialog,
	] = useState(false);
	const [
		openDeleteConfirmationDialog,
		setOpenDeleteConfirmationDialog,
	] = useState(false);
	usePreventBackNav();

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

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleAddItem = async (item) => {
		try {
			const addedItem = await createItem(item);
			setItems([...items, addedItem]);
		} catch (err) {
			console.error(err);
		}
	};

	const handleUpdateItem = (updatedItemDetails) => {
		console.log("Handling update item: ", updatedItemDetails);
		setUpdatedItem(updatedItemDetails);
		setOpenUpdateConfirmationDialog(true);
	};

	const confirmUpdateItem = async () => {
		console.log("Confirming update for item", itemToEdit);
		console.log("Updated item details: ", updatedItem);
		try {
			const item = await updateItem(itemToEdit._id, updatedItem);
			setItems(items.map((i) => (i._id === itemToEdit._id ? item : i)));
			setOpenUpdateConfirmationDialog(false);
			setOpenUpdate(false);
			setItemToEdit(null);
			setUpdatedItem(null);
		} catch (err) {
			console.error(err);
		}
	};

	const openUpdateForm = (item) => {
		console.log(`openUpdateForm: ${item}`);
		setItemToEdit(item);
		setOpenUpdate(true);
		console.log("itemToEdit after settings:", item);
	};

	const handleDeleteClick = (item) => {
		setItemToDelete(item);
		setOpenDeleteConfirmationDialog(true);
	};

	const handleConfirmDelete = async () => {
		try {
			const res = await deleteItem(itemToDelete._id);
			setItems(items.filter((i) => i._id !== itemToDelete._id));
			setOpenDeleteConfirmationDialog(false);
			console.log(res.message);
		} catch (err) {
			console.error("Failed to delete item", err);
		}
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
					Item Registry
				</Typography>
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
						onClick={() => setOpenAdd(true)}
						startIcon={<AddIcon />}
						sx={{
							height: "2.5rem",
						}}
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
									Name
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Barcode
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Description
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Buying Price
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Selling Price
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Category
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Stock Quantity
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Status
								</TableCell>
								<TableCell sx={{ color: palette.primary.main }}>
									Actions
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{filteredItems.map((item) => (
								<TableRow key={item._id}>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.name}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.barcode}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.description}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.buyingPrice}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.sellingPrice}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.category}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.stockQuantity}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										{item.status}
									</TableCell>
									<TableCell
										sx={{ color: palette.grey[100] }}
									>
										<FlexBetween>
											<Button
												variant="outlined"
												color="primary"
												size="small"
												onClick={() =>
													openUpdateForm(item)
												}
												sx={{
													marginRight: 1,
													height: "2rem",
												}}
											>
												<EditIcon />
											</Button>
											<Button
												variant="outlined"
												color="warning"
												size="small"
												onClick={() =>
													handleDeleteClick(item)
												}
											>
												<DeleteIcon />
											</Button>
										</FlexBetween>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
			<AddItemForm
				open={openAdd}
				handleClose={() => setOpenAdd(false)}
				handleAdd={handleAddItem}
			/>
			<UpdateItemForm
				open={openUpdate}
				handleClose={() => {
					setOpenUpdate(false);
				}}
				handleUpdate={handleUpdateItem}
				itemToEdit={itemToEdit}
			/>

			{/* UPDATE CONFIRMATION */}
			<ConfirmationDialog
				open={openUpdateConfirmationDialog}
				onClose={() => {
					setOpenUpdateConfirmationDialog(false);
				}}
				onConfirm={confirmUpdateItem}
				title="Confirm Update"
				message={`Are you sure you want to update ${itemToEdit?.name}`}
			/>

			{/* DELETE CONFIRMATION */}
			<ConfirmationDialog
				open={openDeleteConfirmationDialog}
				onClose={() => {
					setOpenDeleteConfirmationDialog(false);
					setItemToDelete(null);
				}}
				onConfirm={handleConfirmDelete}
				title="Confirm Delete"
				message={`Are you sure you want to delete ${itemToDelete?.name}?`}
			/>
		</>
	);
};

export default ItemRegistry;
