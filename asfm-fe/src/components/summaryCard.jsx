// src/components/custom/DashboardSummaryCard.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

function DashboardSummaryCard({ title, value, subtitle, icon }) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div className="flex gap-2">
          <CardTitle>{title}</CardTitle>
          {icon && <span className="icon">{icon}</span>}
        </div>
      </CardHeader>
      {subtitle && (
        <CardContent>
          <div className="text-2xl font-semibold py-2">{value}</div>
          <CardDescription>{subtitle}</CardDescription>
        </CardContent>
      )}
    </Card>
  );
}

export default DashboardSummaryCard;

