import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkedIn Recruiter Tracker — Track Response Rates & Optimize Outreach",
  description: "Monitor LinkedIn recruiter messages, track response rates, and get AI-powered message optimization suggestions for better candidate engagement."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6792669c-2ecc-4f08-aa09-dcc06cc6e510"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
