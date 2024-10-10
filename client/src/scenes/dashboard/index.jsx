import React from "react";
import { Box } from "@mui/material";

import Navbar from "../navbar";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import usePreventBackNav from "../../hooks/usePreventBackNav";

const Dashboard = () => {
	usePreventBackNav();

	const gridTemplate = `
        "a a a a"
        "b b c d"
        "b b c d"
        "e f g h"
        "e f g h"
        "e i i h"
    `;
	return (
		<>
			<Navbar />
			<Box
				width="100%"
				height="100%"
				margin="0rem"
				display="grid"
				gap="1rem"
				sx={{
					gridTemplateColumns: "repeat(4, minmax(300px, 1fr))",
					gridTemplateRows: "repeat(6, minmax(100px, 1fr))",
					gridTemplateAreas: gridTemplate,
				}}
			>
				<Row1 />
				<Row2 />
				<Row3 />
				<Row4 />
			</Box>
		</>
	);
};

export default Dashboard;
