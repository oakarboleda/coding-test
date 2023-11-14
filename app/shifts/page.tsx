'use client';

import {
  Card,
  Metric,
  Text,
  Title,
  BarList,
  Flex,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell
} from '@tremor/react';

const data = [
  {
    id: 1,
   start_time:'2023-11-13 08:00:00',
    end_time: '2023-11-13 16:00:00',
    is_admin: false,
    last_login: '2023-11-13 16:00:00',
    job_location: 'Location A'

  },
  {
    id: 2,
    start_time: '2023-11-14 12:00:00',
    end_time: '2023-11-14 20:00:00',
    is_admin: true,
    last_login: '2023-11-14 20:00:00',
    job_location: 'Location B',
  },
  {
    id: 3,
    start_time: '2023-11-15 22:00:00',
    end_time: '2023-11-16 06:00:00',
    is_admin: false,
    last_login: '2023-11-16 06:00:00',
    job_location: 'Location C',
  },
  {
    id: 4,
    start_time: '2023-11-16 07:30:00',
    end_time: '2023-11-16 15:30:00',
    is_admin: false,
    last_login: '2023-11-16 15:30:00',
    job_location: 'Location A',
  },
  {
    id: 5,
    start_time: '2023-11-17 14:00:00',
    end_time: '2023-11-17 22:00:00',
    is_admin: true,
    last_login: '2023-11-17 22:00:00',
    job_location: 'Location B',
  },
];

export default function ShiftPage() {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
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
          <TableCell>{item.start_time}</TableCell>
          <TableCell>
            <Text>{item.end_time}</Text>
          </TableCell>
          <TableCell>
            <Text>{item.last_login}</Text>
          </TableCell>
          <TableCell>
            <Text>{item.job_location}</Text>
          </TableCell>
        </TableRow>
      ))}
        </TableBody>
      </Table>
    </main>
    )
      }
