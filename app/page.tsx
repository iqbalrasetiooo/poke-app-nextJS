'use client'
import Pokemon, { getPokemon } from "./pokemon";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import pokemon from "./pokemon";
import poke from "./pokemon.json";


const PAGE_SIZE = [10, 15, 20];


function Table() {
  const { data, isLoading, total, setOffset } = getPokemon();

  const [pageSize, setPageSize] = useState(PAGE_SIZE[0]);
  
  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  
  return (
    <DataTable
    recordsPerPage={pageSize}
    page={page}
    onPageChange={
      (p) => {
        setPage(p)
        setOffset((p * pageSize) - 10)
      }
    }
    onRecordsPerPageChange={setPageSize}
    fetching={isLoading}
    withTableBorder
    withColumnBorders
    borderColor="#fffff" 
    rowBorderColor="#fffff" 
    highlightOnHover
    height={450}
    striped
    columns={[{ accessor: 'name' }, { accessor: 'url' }]}
    records={data}
    totalRecords={total}
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
