// import { ThemeToggle } from "@/components/theme-toggle";

import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5 w-full">
        <DashboardCard
          title="Dashboard"
          subheading="Admin Dashboard"
          count={100}
          icon={<Newspaper className="h-8 w-10" />}
        />
        <DashboardCard
          title="Categories"
          subheading="Item Categories"
          count={50}
          icon={<Newspaper className="h-8 w-10" />}
        />
        <DashboardCard
          title="Users"
          subheading="Total Users"
          count={180}
          icon={<Newspaper className="h-8 w-10" />}
        />
        <DashboardCard
          title="Comments"
          subheading="Total Comments"
          count={10}
          icon={<Newspaper className="h-8 w-10" />}
        />
      </div>
    </>
  );
}
