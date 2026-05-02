import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chanakya Potluri — Data Engineer",
  description:
    "Data Engineer specializing in ETL pipelines, Python/SQL, and AWS infrastructure. Building scalable data systems that turn raw data into reliable business intelligence.",
  keywords: [
    "Data Engineer",
    "ETL Pipelines",
    "Python",
    "SQL",
    "AWS",
    "dbt",
    "Apache Airflow",
  ],
  openGraph: {
    title: "Chanakya Potluri — Data Engineer",
    description:
      "Building scalable ETL pipelines and data infrastructure. Available for Data Engineer roles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
