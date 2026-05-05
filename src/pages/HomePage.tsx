import { useTickets } from "@/context/TicketsContext";
import { sparkData, volumeData } from "@/lib/mock-data";
import { KpiRow } from "@/components/custom/KpiRow";
import { Charts } from "@/components/custom/Charts";

export const HomePage = () => {
  const { tickets } = useTickets();
  const activeCount = tickets.filter((t) => t.status !== "resolved").length;
  const resolvedCount = tickets.filter((t) => t.status === "resolved").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-foreground">Statistics</h1>
        <p className="text-xs text-muted-foreground">Overview of support performance</p>
      </div>

      <KpiRow
        sparkData={sparkData}
        activeCount={activeCount}
        resolvedCount={resolvedCount}
        totalCount={tickets.length}
      />

      <Charts tickets={tickets} volumeData={volumeData} />
    </div>
  )
}
