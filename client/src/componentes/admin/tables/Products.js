import React from "react";
import { useTable } from "react-table";
//import { productos } from "../../../pages/api/data";
import {
  fetchDeleteProduct,
  fetchProducts,
} from "../../../redux/slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";

function AdminProductTable({ productos }) {
  const data = React.useMemo(() => productos, [productos]);
  const dispatch = useDispatch();
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "main_media",
        Cell: (row) => (
          <div className="w-max">
            <img
              src={row.value}
              alt="imagen"
              className="h-14 w-14 rounded-lg object-cover"
            />
          </div>
        ),
      },
      {
        Header: "Nombre",
        accessor: "name",
      },
      {
        Header: "Precio",
        accessor: "price",
      },
      {
        Header: "Inventario",
        accessor: (row) => (row.in_stock ? "Disponible" : "Agotado"),
      },
      {
        Header: "SKU",
        accessor: "sku",
      },
      {
        Header: "",
        accessor: "actions",
        Cell: (row) => (
          <div className="flex flex-col gap-2">
            <button onClick={() => handleEdit(row.row.original)}>Editar</button>
            <button
              onClick={() => dispatch(fetchDeleteProduct(row.row.original.id))}
            >
              {" "}
              Eliminar
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className="w-full">
      <thead
        className="h-10 border-violet-400 bg-violet-200 font-outfit text-violet-800"
        style={{ borderBottomWidth: "1px", borderTopWidth: "1px" }}
      >
        <tr className="">
          <th className="w-[80px] font-outfit"></th> {/* Columna de imagen */}
          <th className="w-1/5  px-8 text-start font-britanicaRegular ">
            Nombre
          </th>
          <th className="w-1/5  px-8 text-start">Precio</th>
          <th className="w-1/5 px-8 text-start">Inventario</th>
          <th className="w-1/5 px-8 text-start">SKU</th>
          <th className="w-1/5 px-8 text-start"></th>
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="h-10 px-8 py-4" key={row.id}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className=" border-violet-200 px-8 py-4"
                  style={{ borderBottomWidth: "1px" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default AdminProductTable;
