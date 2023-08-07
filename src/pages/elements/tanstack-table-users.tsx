import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table";

import useSWR from "swr";

const Page = () => {
  const { data, isLoading, error } = useSWR("/users");

  type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
  };

  const columnHelper = createColumnHelper<User>();

  const defaultColumns = [
    columnHelper.accessor("name", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Name"
    }),

    columnHelper.accessor("username", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "UserName"
    }),

    columnHelper.accessor("email", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Email"
    }),

    columnHelper.accessor("phone", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Phone"
    })
  ];

  const table = useReactTable({
    columns: defaultColumns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (
    <div className="flex min-h-screen w-full p-5">
      <div>
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
            {table.getRowModel().rows.length
              ? table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className="border">
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="border p-2">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
