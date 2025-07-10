"use client"
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body
      >
        <QueryClientProvider client={queryClient}>
          <Suspense>{children}</Suspense>
        </QueryClientProvider>
      </body>
    </html>
  );
}
