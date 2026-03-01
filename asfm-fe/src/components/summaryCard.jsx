// src/components/custom/DashboardSummaryCard.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function DashboardSummaryCard({ title, value, subtitle, icon, className = "" }) {
  return (
    <Card className={`w-full ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <span className="h-5 w-5 text-muted-foreground" aria-hidden="true">
            {icon}
          </span>
        )}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold tracking-tight">
          {value ?? "—"}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
}
export default DashboardSummaryCard;

