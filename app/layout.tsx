import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostureGuard – Webcam Posture Monitoring for Developers",
  description: "Real-time posture monitoring using your webcam. Get break reminders and exercise suggestions to stay healthy while coding."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c496a6a-68b1-4130-b3d2-0b741e6f4725"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
