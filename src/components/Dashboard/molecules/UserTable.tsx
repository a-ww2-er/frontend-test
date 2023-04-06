import { ReactComponent as Filter } from "../../../assets/VectorFilter.svg";
import { usePagination, useRowSelect, useTable } from "react-table";
import { Loading } from "../../UserDetails/atoms/Loading";

type TableProps = {
  children: any;
};
const UserTable = ({ columns, data, isLoading }: any) => {
  // const details: any = useContext(UserContext);
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
    state: { selectedRowIds , setSelectedRowIds},
    state: { pageIndex, pageSize },
  }: any = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="dashboard">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps({
                  onClick: () =>{ toggleRowSelected(row.id);
                    // setState(row.id);
           console.log(isSelected, selectedRowIds,row.id,rowState) }
  
                 } )}>
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
            {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "} */}
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
            <button className="text" onClick={() => gotoPage(14)}>
              {"15"}
            </button>
            <button className="text" onClick={() => gotoPage(15)}>
              {"16"}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>
            {/* <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "} */}
          </section>
        </div>
      </div>
      <p>Selected Rows: {Object.keys(selectedRowIds).length}</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(
                d => d.original
              ),
            },
            null,
            2
          )}
        </code>
      </pre>
    </>
  );
};

export default UserTable;
