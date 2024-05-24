import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "./StateProvider";
import { Delete } from "@mui/icons-material";

export default function Cart() {
  const { cartState, deleteTour, deletePackage, deleteHotel } =
    useContext(CartContext);

  return (
    <>
      <Typography variant="h5">Hotels</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr.no </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartState.hotels.map((row, idx) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{idx + 1}</TableCell>

                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => deleteHotel(row.id)}
                    startIcon={<Delete />}
                    color="error"
                  >
                    <Box
                      sx={{
                        display: {
                          xs: "none",
                          sm: "block",
                        },
                      }}
                    >
                      Remove
                    </Box>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5">Tours</Typography>
      <TableContainer component={Paper}>
        {cartState.tours.length === 0 ? (
          <Box>No Tours Added</Box>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr.no </TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartState.tours.map((row, idx) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{idx + 1}</TableCell>

                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    <Button
                      onClick={() => deleteTour(row.id)}
                      sx={{
                        display: {},
                      }}
                      color="error"
                      startIcon={<Delete />}
                    >
                      <Box display={{ xs: "none", sm: "block" }}>Remove</Box>
                    </Button>
                    {/* <Button
                    sx={{
                      display: {
                        sm: "none",
                      },
                    }}
                    color="error"
                    startIcon={<Delete />}
                  ></Button> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <Typography variant="h5">Tour packages</Typography>
      {cartState.packages.length === 0 ? (
        <Box>No Package added</Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr.no </TableCell>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartState.packages.map((row, idx) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{idx + 1}</TableCell>

                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    <Button
                      onClick={() => deletePackage(row.id)}
                      startIcon={<Delete />}
                      color="error"
                    >
                      <Box display={{ xs: "none", sm: "block" }}>Remove</Box>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
