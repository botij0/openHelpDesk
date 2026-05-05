import { createContext, useContext, useState, type ReactNode } from "react";
import type { Ticket } from "@/lib/types";
import { mockTickets } from "@/lib/mock-data";

interface TicketsContextType {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  updateTicket: (id: string, updates: Partial<Ticket>) => void;
}

const TicketsContext = createContext<TicketsContextType | undefined>(undefined);

export const TicketsProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const addTicket = (ticket: Ticket) => setTickets((prev) => [ticket, ...prev]);

  const updateTicket = (id: string, updates: Partial<Ticket>) =>
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );

  return (
    <TicketsContext.Provider value={{ tickets, addTicket, updateTicket }}>
      {children}
    </TicketsContext.Provider>
  );
};

export const useTickets = () => {
  const ctx = useContext(TicketsContext);
  if (!ctx) throw new Error("useTickets must be used within TicketsProvider");
  return ctx;
};
