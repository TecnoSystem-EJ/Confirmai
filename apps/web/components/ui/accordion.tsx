// apps/web/components/ui/accordion.tsx

import * as React from "react";

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
  collapsible?: boolean;
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  value?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
  return <div className={className}>{children}</div>;
}

export function AccordionItem({
  children,
  className = "",
}: AccordionItemProps) {
  return <div className={className}>{children}</div>;
}

export function AccordionTrigger({
  children,
  className = "",
}: AccordionTriggerProps) {
  return (
    <button
      type="button"
      className={`w-full text-left py-4 transition ${className}`}
    >
      {children}
    </button>
  );
}

export function AccordionContent({
  children,
  className = "",
}: AccordionContentProps) {
  return <div className={`pb-4 ${className}`}>{children}</div>;
}
