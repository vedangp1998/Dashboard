import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  subheading: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({
  title,
  subheading,
  count,
  icon,
}: DashboardCardProps) => {
  return (
    <>
      <Card className="w-full bg-stone-200 dark:bg-slate-800 p-4 flex flex-col justify-between">
        <CardContent className="flex items-center justify-between ">
          <div>
            {icon}
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground">{subheading}</p>
          </div>
          <div>
            <p className="text-[30px] font-bold">{count}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default DashboardCard;
