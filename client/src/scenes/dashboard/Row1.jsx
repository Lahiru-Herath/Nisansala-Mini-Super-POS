import Balance from "../../components/dashboard/Balance";
import CashInHand from "../../components/dashboard/CashInHand";
import Clock from "../../components/dashboard/Clock";
import TotalPurchases from "../../components/dashboard/TotalPurchases";
import TotalSales from "../../components/dashboard/TotalSales";
import DashboardBox from "../../components/DashboardBox";
import FlexBetween from "../../components/FlexBetween";

const Row1 = () => {
	return (
		<>
			<DashboardBox gridArea="a">
				<FlexBetween marginRight="1rem" height="100%">
					<Clock />
					<TotalSales />
					<TotalPurchases />
					<CashInHand />
					<Balance />
				</FlexBetween>
			</DashboardBox>
		</>
	);
};

export default Row1;
