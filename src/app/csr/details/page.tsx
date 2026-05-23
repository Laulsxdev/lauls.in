import type { Metadata } from "next";
import { Suspense } from "react";
import CSRDetailsPage from "@/components/csr/CSRDetailsPage";

export const metadata: Metadata = {
  title: "CSR Initiative Details — Lauls Ltd",
  description:
    "Detailed reports of Lauls Ltd's Corporate Social Responsibility programs, including SAVERA (Education & Skilling) and SEWA (Community Healthcare).",
  openGraph: {
    title: "CSR Initiative Details — Lauls Ltd",
    description:
      "Detailed reports of Lauls Ltd's Corporate Social Responsibility programs (SAVERA & SEWA).",
    url: "https://lauls.in/csr/details",
  },
  alternates: { canonical: "https://lauls.in/csr/details" },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A1628] flex items-center justify-center text-white">Loading...</div>}>
      <CSRDetailsPage />
    </Suspense>
  );
}
