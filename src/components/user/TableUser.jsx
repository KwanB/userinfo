import React, { useEffect, useState } from "react";
import { Table, InputBase, Button, Divider, IconButton } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import SearchIcon from "@mui/icons-material/Search";
import DetailUser from "./DetailUser";
import axios from "axios";

const columns = [
  {
    id: "firstName",
    label: "FirstName",
    minWidth: 150,
    align: "center",
  },
  {
    id: "lastName",
    label: "LastName",
    minWidth: 150,
    align: "center",
  },
  {
    id: "maidenName",
    label: "MaidenName",
    minWidth: 150,
    align: "center",
  },
  {
    id: "age",
    label: "Age",
    minWidth: 150,
    align: "center",
  },
  {
    id: "qualify",
    label: "Qualify",
    minWidth: 150,
    align: "center",
  },
  {
    id: "gender",
    label: "Gender",
    minWidth: 170,
    align: "center",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "center",
  },
  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    align: "center",
  },
  {
    id: "birthDate",
    label: "BirthDate",
    minWidth: 170,
    align: "center",
  },
  {
    id: "image",
    label: "Image",
    minWidth: 100,
    align: "center",
  },
  {
    id: "detail",
    label: "Detail",
    minWidth: 100,
    align: "center",
  },
];

export default function TableUser() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [getData, setGetData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const userData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/users");
      setGetData(data.users);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  const filteredData = getData.filter((row) => {
    const name =
      `${row.firstName} ${row.lastName} ${row.gender} ${row.email} ${row.phone} ${row.age} ${row.maidenName}`.toLowerCase();
    return name.includes(searchTerm.toLowerCase());
  });

  const [open, setOpen] = React.useState(false);
  const [dataDetail, setDataDetail] = useState([]);

  const handleClickOpen = (data) => {
    setOpen(true);
    setDataDetail(data);
  };

  return (
    <div className="mt-8">
      <div className="mb-5 grid grid-cols-6">
        <div className="col-end-7 col-span-2">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              fullWidth
              sx={{ ml: 1, flex: 1 }}
              onChange={handleSearchChange}
              value={searchTerm}
              placeholder="ค้นหา"
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton sx={{ p: '10px' }} onClick={() => {}}>
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 520 }}>
          <Table stickyHeader aria-label="sticky table">
            {/* Table header */}
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
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

            {/* Table body */}
            <TableBody>
              {filteredData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.lastName}</TableCell>
                    <TableCell align="center">{row.maidenName}</TableCell>
                    <TableCell align="center">{row.age}</TableCell>
                    <TableCell align="center">
                      {row.age > 60
                        ? <span style={{color: '#3ea744'}}>วัยเกษียณ</span>
                        : row.age >= 23
                        ? <span style={{color: '#46a9e2'}}>อายุปกติ</span>
                        : row.age >= 1
                        ? <span style={{color: '#ee8674'}}>วัยเรียน</span>
                        : <span style={{color: '#ebb0e3'}}>วัยแรกเกิด</span>}
                    </TableCell>
                    <TableCell align="center">{row.gender}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.birthDate}</TableCell>
                    <TableCell align="center">
                      <img src={row.image} alt="img" width={60} height={60} />
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="outlined" size="small" 
                      onClick={() => {
                        handleClickOpen(row);
                      }}
                      // onClick={handleClickOpen}
                      >
                        Detail
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Table pagination */}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <DetailUser open={open} setOpen={setOpen} dataDetail={dataDetail}></DetailUser>
    </div>
  );
}
