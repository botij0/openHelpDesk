import { useTickets } from "@/context/TicketsContext";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { AlertCircle, ChevronRight } from "lucide-react";
import CreateTicketDialog from "@/components/custom/CreateTicketDialog";

const priorityStyles: Record<string, string> = {
  high: "bg-[hsl(var(--priority-high-bg))] text-destructive border-destructive/30",
  medium: "bg-[hsl(var(--priority-medium-bg))] text-[hsl(var(--status-open-foreground))] border-[hsl(var(--status-open)/0.3)]",
  low: "bg-[hsl(var(--priority-low-bg))] text-muted-foreground border-border",
};

export const OpenTickets = () => {
  const { tickets, addTicket } = useTickets();
  const openTickets = tickets.filter((t) => t.status === "open" || t.status === "in_progress");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-foreground">Open Tickets</h1>
          <p className="text-xs text-muted-foreground">{openTickets.length} tickets need attention</p>
        </div>
        <CreateTicketDialog onCreateTicket={addTicket} ticketCount={tickets.length} />
      </div>

      {openTickets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
          <AlertCircle className="h-10 w-10 mb-3 opacity-40" />
          <p className="text-sm font-medium">All caught up!</p>
          <p className="text-xs mt-1">No open tickets at the moment</p>
        </div>
      ) : (
        <div className="space-y-2">
          {openTickets.map((ticket, i) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link to={`/tickets/${ticket.id}`}>
                <Card className="p-4 border-border/60 shadow-sm hover:shadow-md transition-all hover:border-primary/20 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span className="font-mono text-xs tabular-nums text-muted-foreground shrink-0">
                        {ticket.id}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground truncate">{ticket.subject}</p>
                        <p className="text-xs text-muted-foreground">{ticket.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <Badge variant="outline" className={`text-[10px] font-medium capitalize ${priorityStyles[ticket.priority]}`}>
                        {ticket.priority}
                      </Badge>
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {ticket.category}
                      </span>
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-medium ${ticket.status === "open"
                          ? "bg-[hsl(var(--status-open-bg))] text-[hsl(var(--status-open-foreground))] border-[hsl(var(--status-open)/0.3)]"
                          : "bg-[hsl(var(--status-progress-bg))] text-[hsl(var(--status-progress-foreground))] border-[hsl(var(--status-progress)/0.3)]"
                          }`}
                      >
                        {ticket.status === "open" ? "Open" : "In Progress"}
                      </Badge>
                      <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

