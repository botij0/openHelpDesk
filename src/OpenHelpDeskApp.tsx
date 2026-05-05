import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { appRouter } from "@/app.router";
import { TicketsProvider } from "./context/TicketsContext";
import { Toaster } from "@/components/ui/sonner"

const queryClient = new QueryClient();

const OpenHelpDeskApp = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TicketsProvider>
        <RouterProvider router={appRouter} />
        <Toaster />
      </TicketsProvider>
    </QueryClientProvider>
  );
}

export default OpenHelpDeskApp