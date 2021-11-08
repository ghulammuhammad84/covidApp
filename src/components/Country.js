
import React, { useState } from 'react';
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Country = ({ Country }) => {
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              
              <StyledTableCell style={{ backgroundColor: "#092C74" }}>Country Name

                <input id="search" type="text" placeholder="Search here"
                  onChange={(event) => {
                    setSearch(event.target.value)

                  }
                  }
                />



              </StyledTableCell>
              <StyledTableCell align="right" style={{ backgroundColor: "#092C74" }}>Total Cases</StyledTableCell>
              <StyledTableCell align="right" style={{ backgroundColor: "#092C74" }}>Total Deaths</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Country.filter((Country)=>{
              if (search=="") {
                return Country;
              }
              else if (Country.Country.toLowerCase().includes(search.toLowerCase())) {
                return Country;
              }
            })
            .map((countryData) => {

              return (
                <StyledTableRow style={{ backgroundColor: "white" }}>
                  <StyledTableCell component="th" scope="row">{countryData.Country}</StyledTableCell>
                  <StyledTableCell align="right">{countryData.TotalConfirmed}</StyledTableCell>
                  <StyledTableCell align="right">{countryData.TotalDeaths}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Country
