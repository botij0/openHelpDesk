import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { appRouter } from "@/app.router";
import { TicketsProvider } from "./context/TicketsContext";

const queryClient = new QueryClient();

const OpenHelpDeskApp = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TicketsProvider>
        <RouterProvider router={appRouter} />
      </TicketsProvider>
    </QueryClientProvider>
  );
}

export default OpenHelpDeskApp