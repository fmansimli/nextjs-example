import { useEffect, useState } from "react";
import { flexRender } from "@tanstack/react-table";

import useSWR from "swr";
import { useTodosTable } from "@/_features/elements/hooks/todos";

const Page = () => {
  const { data, isLoading, error } = useSWR("/todos");

  const [globalFilter, setGlobalFilter] = useState("");
  const [filter, setFilter] = useState("");

  const table = useTodosTable(data, globalFilter);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGlobalFilter(filter);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [filter]);

  if (isLoading) {
    return (
      <div className="flex h-full  w-full items-center justify-center">
        <span className="text-xl text-red-800">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full  w-full items-center justify-center">
        <span className="text-xl text-red-800">
          something went wrong when loading todos...
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full p-5">
      <div className="w-full">
        <div className="my-5 flex items-center justify-end">
          <input placeholder="search..." onChange={(e) => setFilter(e.target.value)} />
        </div>
        <div className="min-h-[60%]">
          <table className="w-full border">
            <thead className="">
              {table.getHeaderGroups().map((hg) => (
                <tr key={hg.id} className="border">
                  {hg.headers.map((header) => (
                    <th key={header.id} className="border p-2">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border even:bg-gray-200">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="border p-2">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr className="h-32 text-center">
                  <td colSpan={12}>No Recoard Found!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="my-5 flex items-center justify-end gap-5">
          <button disabled={!table.getCanPreviousPage()} onClick={() => table.nextPage()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <span>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </span>
          <button disabled={!table.getCanNextPage()} onClick={() => table.previousPage()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <input
            type="number"
            className="w-16"
            onChange={(e) =>
              table.setPageIndex(e.target.value ? Number(e.target.value) - 1 : 0)
            }
            defaultValue={table.getState().pagination.pageIndex + 1}
            min={1}
          />
          <select className="" onChange={(e) => table.setPageSize(Number(e.target.value))}>
            <option value="10">show 10</option>
            <option value="20">show 20</option>
            <option value="30">show 30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Page;
