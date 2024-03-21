'use client'
import Pokemon from "./pokemon";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { DataTable } from 'mantine-datatable';


 function Table({}) {
  return (
    <DataTable
    withTableBorder
    withColumnBorders
    highlightOnHover
    height={300}
    striped
    columns={[{ accessor: 'name' }, { accessor: 'url' }]}
    records={
      [Pokemon] 
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
      <MantineProvider defaultColorScheme="auto">{
        <Table/>
      }</MantineProvider>
      </body>
    </html>
  );
}