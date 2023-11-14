import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

interface Shifts {
  id: number;
  start_time: string;
  end_time: string;
  job_location: string;
}

export default function ShiftTable({ shifts }: { shifts: Shifts[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {shifts.map((shift) => (
          <TableRow key={shift.id}>
            <TableCell>{shift.start_time}</TableCell>
            <TableCell>
              <Text>{shift.end_time}</Text>
            </TableCell>
            <TableCell>
              <Text>{shift.job_location}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
