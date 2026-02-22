import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader as ShadcnTableHeader,
  TableRow as ShadcnTableRow,
} from "@/components/ui/table";

export function ReusableTable({ columns , data , headerClassName="" }) {
  return (
    <div className="overflow-auto max-h-150 rounded-lg border border-pale-sky shadow-sm">
      <Table>
        <ShadcnTableHeader className={`sticky top-0 z-10 ${headerClassName}`}>
            <ShadcnTableRow>
              {columns.map((column) => (
                <TableHead key={column.accessorKey} className={column.headClassName}>
                  {column.header}
                </TableHead>
              ))}
            </ShadcnTableRow>
          </ShadcnTableHeader>
          <TableBody>
            {data.map((row, rowIndex) => (
              <ShadcnTableRow key={rowIndex} className="hover:bg-secondary/20">
                {columns.map((column) => (
                  <TableCell key={column.accessorKey} className={column.cellClassName}>
                    {row[column.accessorKey]}
                  </TableCell>
                ))}
              </ShadcnTableRow>
            ))}
      </TableBody>
  </Table>
  </ div>
  );
};
