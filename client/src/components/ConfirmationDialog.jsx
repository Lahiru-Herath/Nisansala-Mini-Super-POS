import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	useTheme,
} from "@mui/material";
import React from "react";

const ConfirmationDialog = ({ open, onClose, onConfirm, title, message }) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Cancel
				</Button>
				<Button onClick={onConfirm} color="secondary">
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmationDialog;
