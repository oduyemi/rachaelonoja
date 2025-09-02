"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { Header } from "@/navigation/Header";
// import { Footer } from "@/navigation/Footer";

export const ClientSideLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  useEffect(() => {
    if (isAdminRoute) {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
      }
    }
  }, [isAdminRoute, router]);

  return (
    <>
      {!isAdminRoute && (
        <>
          <Header />
        </>
      )}

      <Box flex="1" m={0} p={0}>
        {children}
      </Box>

      {!isAdminRoute && (
        <Box mt={5}>
          {/* <Footer /> */}
        </Box>
      )}
    </>
  );
};
