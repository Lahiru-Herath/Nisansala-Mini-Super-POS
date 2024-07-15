import DashboardBox from "@/components/DashboardBox";
import InvoiceShort from "../../components/dashboard/InvoiceShort";
import GRNShort from "../../components/dashboard/GRNShort";
import StockShort from "../../components/dashboard/StockShort";

const Row2 = () => {
	return (
		<>
			<DashboardBox gridArea="b">
				<InvoiceShort />
			</DashboardBox>
			<DashboardBox gridArea="c">
				<GRNShort />
			</DashboardBox>
			<DashboardBox gridArea="d">
				<StockShort />
			</DashboardBox>
		</>
	);
};

export default Row2;
