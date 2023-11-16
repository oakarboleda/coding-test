import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

const data = [
  {
    id: 1,
    city: 'Blaine',
    state: 'Minnesota',
    job_location: 'Construction Site A',
    is_logged: true
  },
  {
    id: 2,
    city: 'Ham Lake',
    state: 'Minnesota',
    job_location: 'Construction Site B',
    is_logged: false
  },
  {
    id: 3,
    city: 'Fridley',
    state: 'Minnesota',
    job_location: 'Construction Site C',
    is_logged: true
  }
];

interface Locations {
  id: number;
  city: string;
  state: string;
  job_location: string;
  is_logged: boolean;
}

export default function LocationPage() {
  return (
    <main className="grid grid-flow-row auto-rows-max">
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Start Time</TableHeaderCell>
          <TableHeaderCell>End Time</TableHeaderCell>
          <TableHeaderCell>last_login</TableHeaderCell>
          <TableHeaderCell>Job Location</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.city}</TableCell>
            <TableCell>{item.state}</TableCell>
            <TableCell>{item.job_location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </main>
  )
}
