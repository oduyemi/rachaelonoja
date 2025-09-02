"use client";
import { ChakraProvider, Box, defaultSystem } from "@chakra-ui/react";
import { ClientSideLayout } from "@/components/ClientsideLayout";



export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box minH="100vh" display="flex" flexDirection="column">
        <ClientSideLayout>{children}</ClientSideLayout>
      </Box>
    </ChakraProvider>
  );
}
