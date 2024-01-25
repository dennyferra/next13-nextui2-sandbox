"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { Activity } from "@prisma/client";

type Props = {
  activities: Activity[];
};

export function TableTree({ activities }: Props) {
  if (!activities?.length) return null;

  const columns = ["name", "depth", "path"];

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column}>{column}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {activities.map((item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
