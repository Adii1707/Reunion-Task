import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import data from "../Data.json";

const BasicTable = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        header: "Name",
        enableColumnActions: false,
        enableColumnOrdering: false,
        accessorKey: "name",
      },
      {
        header: "Cateogry",
        accessorKey: "category",
        enableColumnOrdering: false,
      },
      {
        header: "Subcategory",
        accessorKey: "subcategory",
        enableColumnOrdering: false,
      },
      {
        header: "Created At",
        enableColumnActions: false,
        accessorKey: "createdAt",
        enableColumnOrdering: false,
      },
      {
        header: "Updated At",
        enableColumnActions: false,
        accessorKey: "updatedAt",
        enableColumnOrdering: false,
      },
      {
        header: "Price",
        enableColumnActions: false,
        accessorKey: "price",
        Cell: ({ cell }) =>
            cell.getValue().toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }),
          filterVariant: 'range-slider',
          filterFn: 'betweenInclusive', // default (or between)
          muiFilterSliderProps: {
            //no need to specify min/max/step if using faceted values
            marks: true,
            // step: 5_000,
            valueLabelFormat: (value) =>
              value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              }),
          },
        enableColumnOrdering: false,
      },
      {
        header: "Sale Price",
        accessorKey: "sale_price",
        enableColumnOrdering: false,
        enableColumnActions: false,

      },
    ],
    []
    //end
  );

  //demo state
  const [groupedColumnMode, setGroupedColumnMode] = useState("reorder"); //default is 'reorder

  const table = useMaterialReactTable({
    columns,
    data,
    enableGrouping: true,
    enableDensityToggle: false,
    enablePagination: true,
    enableFullScreenToggle: false,
    groupedColumnMode,
    enableFacetedValues: true,
    enableColumnDragging: false,
    muiPaginationProps: {
      color: "primary",
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
      position: "center",
    },
    paginationDisplayMode: "pages",
    initialState: {
      expanded: true, //expand all groups by default
      grouping: [],
      showColumnFilters: true //an array of columns to group by by default (can be multiple)
    },
    muiTableContainerProps: { sx: { maxHeight: '600px' } },
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export { BasicTable };
