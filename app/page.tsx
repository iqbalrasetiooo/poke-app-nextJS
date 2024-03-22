'use client'
import Pokemon from "./pokemon";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { DataTable } from 'mantine-datatable';


function Table() {
  const { data, isLoading, setLimit } = Pokemon();
  return (
    <DataTable
    fetching={isLoading}
    recordsPerPageOptions={setLimit}
    onRecordsPerPageChange={setLimit}
    withTableBorder
    withColumnBorders
    backgroundColor={{ dark: '#232b25', light: '#f0f7f1' }}
    borderColor="#40c057" // 👈 override default border color
    rowBorderColor="#fab005" // 👈 override default row border color
    recordsPerPage={setLimit}
    highlightOnHover
    height={700}
    striped
    columns={[{ accessor: 'name' }, { accessor: 'url' }]}
    records={
      data
    }
    />
  );
}


export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <Table/>
     
      </body>
    </html>
  );
}
