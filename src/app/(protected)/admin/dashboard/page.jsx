const RevenueChart = dynamic(() => import("../../../../components/adminComponent/RevenueChart"), {
  ssr: false,
});
const Statistics = dynamic(() => import("../../../../components/adminComponent/Statistics"), {
  ssr: false,
});
import AdminBreadcrumb from "@/components/adminComponent/AdminBreadcrumb";
import ProgressCard from "@/components/adminComponent/ProgressCard";
import RecentOrders from "@/components/adminComponent/RecentOrders";
import Sources from "@/components/adminComponent/Sources";
import TopPerformers from "@/components/adminComponent/TopPerformers";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Dashboard",
};

const Dashboard = () => {
  return (
    <div className="text-dark">

      <AdminBreadcrumb title="Dashboard" />
      <section>
        <div className="container">
          <div className="my-6 space-y-6">
            <Statistics />

            <div className="grid gap-6 lg:grid-cols-2">
              <ProgressCard />
              <Sources />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <TopPerformers />
            </div>
            <div className="grid grid-cols-1">
              <RecentOrders />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
