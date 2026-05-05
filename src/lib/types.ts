export type TicketStatus = "open" | "in_progress" | "resolved";
export type TicketCategory = "Technical" | "Billing" | "Feature" | "General";
export type TicketPriority = "high" | "medium" | "low";

export interface Ticket {
  id: string;
  subject: string;
  email: string;
  status: TicketStatus;
  category: TicketCategory;
  priority: TicketPriority;
  description: string;
  createdAt: string;
}