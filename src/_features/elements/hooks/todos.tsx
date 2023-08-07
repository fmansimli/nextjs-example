import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  createColumnHelper
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<Todo>();

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const defaultColumns = [
  columnHelper.accessor("id", {
    id: "S.No",
    cell: (info) => <span>{info.row.index + 1}</span>,
    header: "S.No"
  }),

  columnHelper.accessor("id", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "ID"
  }),

  columnHelper.accessor("userId", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "User ID"
  }),

  columnHelper.accessor("title", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Title"
  }),

  columnHelper.accessor("completed", {
    cell: (info) => (
      <span className="inline-block w-full text-center">
        <input type="checkbox" disabled checked={info.getValue()} />
      </span>
    ),
    header: "Completed"
  })
];

export const useTodosTable = (data: any, globalFilter: string) => {
  const table = useReactTable({
    columns: defaultColumns,
    data,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return table;
};
