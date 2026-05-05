import type { Ticket } from "./types";

export const mockTickets: Ticket[] = [
  {
    id: "TK-1001",
    subject: "Login page returns 500 error",
    email: "maria.garcia@acme.com",
    status: "open",
    category: "Technical",
    priority: "high",
    description: "Users are unable to log in since the last deployment.",
    createdAt: "2026-03-14T09:15:00Z",
  },
  {
    id: "TK-1002",
    subject: "Invoice not reflecting discount",
    email: "john.smith@globex.io",
    status: "in_progress",
    category: "Billing",
    priority: "medium",
    description: "Applied promo code SAVE20 but invoice still shows full price.",
    createdAt: "2026-03-13T14:30:00Z",
  },
  {
    id: "TK-1003",
    subject: "Request: Dark mode support",
    email: "alex.chen@startup.co",
    status: "open",
    category: "Feature",
    priority: "low",
    description: "Would love to see a dark mode option in the dashboard.",
    createdAt: "2026-03-13T11:00:00Z",
  },
  {
    id: "TK-1004",
    subject: "Cannot export CSV reports",
    email: "sarah.jones@corp.net",
    status: "resolved",
    category: "Technical",
    priority: "high",
    description: "Export button triggers download but file is empty.",
    createdAt: "2026-03-12T16:45:00Z",
  },
  {
    id: "TK-1005",
    subject: "How to upgrade my plan?",
    email: "mike.wilson@freelance.dev",
    status: "resolved",
    category: "General",
    priority: "low",
    description: "Looking for instructions on how to upgrade from free to pro.",
    createdAt: "2026-03-12T08:20:00Z",
  },
  {
    id: "TK-1006",
    subject: "Double charged for March",
    email: "lisa.brown@agency.com",
    status: "open",
    category: "Billing",
    priority: "high",
    description: "Credit card was charged twice for the monthly subscription.",
    createdAt: "2026-03-11T19:10:00Z",
  },
  {
    id: "TK-1007",
    subject: "API rate limiting too aggressive",
    email: "dev.team@saasapp.io",
    status: "in_progress",
    category: "Technical",
    priority: "medium",
    description: "We're hitting rate limits at only 50 req/min, docs say 100.",
    createdAt: "2026-03-11T10:30:00Z",
  },
  {
    id: "TK-1008",
    subject: "Add webhook support for events",
    email: "carlos.rivera@platform.co",
    status: "open",
    category: "Feature",
    priority: "medium",
    description: "Need webhook callbacks for ticket status change events.",
    createdAt: "2026-03-10T13:55:00Z",
  },
];

export const volumeData = [
  { day: "Mon", tickets: 4 },
  { day: "Tue", tickets: 7 },
  { day: "Wed", tickets: 5 },
  { day: "Thu", tickets: 9 },
  { day: "Fri", tickets: 6 },
  { day: "Sat", tickets: 2 },
  { day: "Sun", tickets: 3 },
];

export const sparkData = {
  responseTime: [
    { v: 2.1 }, { v: 1.8 }, { v: 2.4 }, { v: 1.9 }, { v: 1.5 }, { v: 1.7 }, { v: 1.6 },
  ],
  resolution: [
    { v: 68 }, { v: 72 }, { v: 70 }, { v: 75 }, { v: 78 }, { v: 74 }, { v: 76 },
  ],
  active: [
    { v: 12 }, { v: 14 }, { v: 11 }, { v: 15 }, { v: 13 }, { v: 10 }, { v: 9 },
  ],
};