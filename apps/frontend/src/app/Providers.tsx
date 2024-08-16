"use client";

import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";

interface ProvidersProps {
  children: React.ReactNode;
  queryClient?: QueryClient;
}

const defaultQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      console.error("Error occurred in Query:", error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error("Error occurred in Mutation:", error);
    },
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function Providers({
  children,
  queryClient = defaultQueryClient,
}: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
