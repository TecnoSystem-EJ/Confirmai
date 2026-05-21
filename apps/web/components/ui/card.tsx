// apps/web/components/ui/card.tsx

import * as React from "react";

export function Card({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-xl border p-6 ${className}`}>{children}</div>;
}

export function CardHeader({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({
  children,
  className = "",
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
}

export function CardDescription({
  children,
  className = "",
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`text-sm ${className}`}>{children}</p>;
}

export function CardContent({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={className}>{children}</div>;
}
