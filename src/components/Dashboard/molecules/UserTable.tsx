import { ReactComponent as Filter } from "../../../assets/VectorFilter.svg";
import React, { useContext, useState } from "react";
import {
  usePagination,
  useRowSelect,
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { Loading } from "../../UserDetails/atoms/Loading";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/globalContext";
import {BsFilter } from "react-icons/bs";

type TableProps = {
  children: any;
};
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder="Search"
    />
  );
}

const UserTable = ({ columns, data, isLoading }: any) => {
  // const details: any = useContext(UserContext);
  const navigate = useNavigate();
  const [showBox, setShowBox] = useState(false);
  const { setErrors} =useContext(AppContext)

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    rowState,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    getToggleRowSelectedProps,
    toggleRowSelected,
    isSelected,
    setState,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    state: { selectedRowIds, setSelectedRowIds },
    state: { pageIndex, pageSize },
  }: any = useTable(
    {
      columns,
      data,
      defaultColumn,
      // filterTypes,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps({})}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps({
                      onClick: () => setShowBox(!showBox),
                    })}
                  > { column.Header !== "" ? <span> {column.render("Header")}
                    <BsFilter />
                    </span> : ""
}
                  </th>
                ))}
              </tr>
            ))}
            {showBox ? (
              <div className="filter_box">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
                <tr>
                  {" "}
                  <th
                    colSpan={visibleColumns.length}
                    style={{
                      textAlign: "left",
                    }}
                  >
                    <GlobalFilter
                      preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={state.globalFilter}
                      setGlobalFilter={setGlobalFilter}
                    />
                  </th>
                </tr>
                <tr>
                  {" "}
                  <th  className="buttons">
                    {" "}
                    <span>Reset</span>
                    <span  onClick={() => setShowBox(!showBox)}>Filter</span>
                  </th>
                </tr>
              </div>
            ) : (
              ""
            )}
            {/* */}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps({
                    onClick: () => {
                      // toggleRowSelected(row.id)
                      setErrors(false)
                      navigate(`/dashboard/details/${Number(row.id) + 1}`);
                      // console.log(isSelected, selectedRowIds, row.id, rowState);
                    },
                  })}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination">
          <span>
            Showing{" "}
            <strong>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>{" "}
            </strong>{" "}
            Out of <strong> {rows.length}</strong>
          </span>
          <section>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>
            <button className="text" onClick={() => gotoPage(0)}>
              {"1"}
            </button>
            <button className="text" onClick={() => gotoPage(1)}>
              {"2"}
            </button>
            <button className="text" onClick={() => gotoPage(2)}>
              {"3"}
            </button>
            ...
            <button className="text" onClick={() => gotoPage(8)}>
              {"15"}
            </button>
            <button className="text" onClick={() => gotoPage(9)}>
              {"16"}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>
          </section>
        </div>
   
      {/* <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              "selectedFlatRows[].original": selectedFlatRows.map(
                (d) => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre> */}
      {/* this code above was to detect the row im selecting */}
    </>
  );
};

export default UserTable;
