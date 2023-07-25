import React, { useState, useEffect } from "react";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Typography,
} from "@mui/material";

const Test = () => {
  const [playersData, setPlayersData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/test");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("CLGing people ...");
      setPlayersData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const tableStyles = {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    height: "95vh",
    "flex-direction": "column",
  };

  const tabContainerStyles = {
    "background-color": "#101C12",
    "border-radius": "25px",
    width: 750,
  };
  const tableCellHeaderStyles = {
    color: "#CCE60E",
    "font-size": "25px",
  };
  const tableContentStyles = {
    color: "#23F181",
    "font-size": "15px",
  };
  return (
    <div style={tableStyles}>
      <Typography
        variant="h2"
        style={{
          color: "#CCE60E",
          marginBottom: 10,
        }}
      >
        Test Cricket
      </Typography>
      <TableContainer component={Paper} style={tabContainerStyles}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={tableCellHeaderStyles}>Player</TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>
                Played Matches
              </TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>
                Innings
              </TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>
                Runs
              </TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>
                Highest Score
              </TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>
                Total Average
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playersData.map((player, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  style={tableContentStyles}
                >
                  {player.player}
                </TableCell>
                <TableCell align="center" style={tableContentStyles}>
                  {player.playedMatches}
                </TableCell>
                <TableCell align="center" style={tableContentStyles}>
                  {player.innings}
                </TableCell>
                <TableCell align="center" style={tableContentStyles}>
                  {player.runs}
                </TableCell>
                <TableCell align="center" style={tableContentStyles}>
                  {player.highestScore}
                </TableCell>
                <TableCell align="center" style={tableContentStyles}>
                  {parseFloat(player.runs / player.innings).toFixed(
                    2
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Test;
