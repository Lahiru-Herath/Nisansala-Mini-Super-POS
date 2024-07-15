import DashboardBox from "@/components/DashboardBox";
import ItemRegistryShort from "../../components/dashboard/ItemRegistryShort";
import SuppliersShort from "../../components/dashboard/SuppliersShort";
import UserInfo from "../../components/dashboard/UserInfo";
import Reports from "../../components/dashboard/Reports";

const Row3 = () => {
	return (
		<>
			<DashboardBox gridArea="e">
				<UserInfo />
			</DashboardBox>
			<DashboardBox gridArea="f">
				<ItemRegistryShort />
			</DashboardBox>
			<DashboardBox gridArea="g">
				<SuppliersShort />
			</DashboardBox>
			<DashboardBox gridArea="h">
				<Reports />
			</DashboardBox>
		</>
	);
};

export default Row3;
