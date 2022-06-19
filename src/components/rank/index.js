import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const columns = [
  { id: "no", label: "RANK", minWidth: 20 },
  { id: "name", label: "NAME", minWidth: 170 },
  {
    id: "population",
    label: "POINT",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function StickyHeadTable() {
  let today = new Date();
  let tomorrow = new Date(today);

  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  let hours = tomorrow.getHours();
  if (hours === 0) hours = 24;

  let hour = hours - today.getHours();
  let minute = new Date(tomorrow - today).getMinutes();
  let second = new Date(tomorrow - today).getSeconds();

  let minsDate = `${hour.toString().padStart(2, "0")} : ${minute
    .toString()
    .padStart(2, "0")} : ${second.toString().padStart(2, "0")}`;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [reward, setReward] = React.useState(minsDate);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    setInterval(() => {
      let today = new Date();
      let tomorrow = new Date(today);

      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);

      let hours = tomorrow.getHours();
      if (hours === 0) hours = 24;

      let hour = hours - today.getHours();
      let minute = new Date(tomorrow - today).getMinutes();
      let second = new Date(tomorrow - today).getSeconds();

      let minsDate = `${hour.toString().padStart(2, "0")} : ${minute
        .toString()
        .padStart(2, "0")} : ${second.toString().padStart(2, "0")}`;
      setReward(minsDate);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full">
      <Button
        variant="contained"
        className="w-full m-1 bg-[#d32f2f]"
        color="error"
      >
        {reward}
      </Button>
      <TableContainer
        sx={{
          height: 355,
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            height: "max-content",
          }}
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export function Rank() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-[35px] flex">
        <div className="w-6/12 flex mt-3">
          <div class="rounded-tl-lg rounded-tr-lg flex justify-center items-center hover:bg-white hover:text-black text-white border border-solid border-white w-full">
            Camp
          </div>
          <div class="rounded-tl-lg rounded-tr-lg flex justify-center items-center hover:bg-white hover:text-black text-white border border-solid border-white w-full">
            Battle
          </div>
          <div class="rounded-tl-lg rounded-tr-lg flex justify-center items-center hover:bg-white hover:text-black text-white border border-solid border-white w-full">
            Duel
          </div>
          <div class="rounded-tl-lg rounded-tr-lg flex justify-center items-center bg-white text-black border border-solid border-white w-full">
            Rank
          </div>
          <div class="rounded-tl-lg rounded-tr-lg flex justify-center items-center hover:bg-white hover:text-black text-white border border-solid border-white w-full">
            Quest
          </div>
        </div>
        <div className="w-6/12 flex content-center justify-center items-center text-white font-black text-lg">
          LEVEL 1
        </div>
      </div>
      <div className="w-full h-full bg-white flex">
        <StickyHeadTable />
        <div className="w-full h-full flex ">
          <Button
            variant="contained"
            className="bg-[#1976d2] w-[143px] h-[36px] m-1 ml-4"
          >
            RANK
          </Button>
          <Button
            variant="contained"
            className="bg-[#1976d2] w-[143px] h-[36px] m-1"
          >
            RULE
          </Button>
          <Button
            variant="contained"
            className="bg-[#1976d2] w-[143px] h-[36px] m-1"
          >
            PLACE
          </Button>
        </div>
      </div>
    </div>
  );
}
