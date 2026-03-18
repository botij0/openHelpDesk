import { createBrowserRouter, Navigate } from "react-router";
import { MainLayout } from "@/layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AllTickets } from "./pages/AllTickets";
import { TicketDetails } from "./pages/TicketDetails";
import { OpenTickets } from "./pages/OpenTickets";


export const appRouter = createBrowserRouter([
  // Main routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "tickets",
        element: <AllTickets />
      },
      {
        path: "tickets/:id",
        element: <TicketDetails />
      },
      {
        path: "open",
        element: <OpenTickets />
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);