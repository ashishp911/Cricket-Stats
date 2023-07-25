import React from "react";

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
  const cricketStats = [
    {
      player: "Ashish",
      playedMatches: 100,
      Innings: 150,
      Runs: 10020,
      HighestScore: 264,
    },
    {
      player: "Manikanta",
      playedMatches: 85,
      Innings: 130,
      Runs: 9000,
      HighestScore: 95,
    },
    {
      player: "Gokul",
      playedMatches: 72,
      Innings: 110,
      Runs: 7500,
      HighestScore: 85,
    },
    {
      player: "Jeevan",
      playedMatches: 22,
      Innings: 22,
      Runs: 1451,
      HighestScore: 66,
    },
    {
      player: "Vishnu",
      playedMatches: 132,
      Innings: 130,
      Runs: 11432,
      HighestScore: 183,
    },
    {
      player: "Vishnu",
      playedMatches: 132,
      Innings: 130,
      Runs: 11432,
      HighestScore: 183,
    },
    {
      player: "Vishnu",
      playedMatches: 132,
      Innings: 130,
      Runs: 11432,
      HighestScore: 183,
    },
    {
      player: "Vishnu",
      playedMatches: 132,
      Innings: 130,
      Runs: 11432,
      HighestScore: 183,
    },
    {
      player: "Vishnu",
      playedMatches: 132,
      Innings: 130,
      Runs: 11432,
      HighestScore: 183,
    },
    // Add more objects with dummy data as needed
  ];

  const tableStyles = {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    height: "95vh",
    'flex-direction': 'column',
  };

  const tabContainerStyles = {
    'background-color': '#101C12',
    'border-radius': '25px',
    width: 750,
  }
  const tableCellHeaderStyles = {
    color : "#CCE60E",
    "font-size":'25px',
  }
  const tableContentStyles = {
    color : "#23F181",
    "font-size":'15px',
  }
  return (
    <div style={tableStyles}>
      <Typography variant="h2" style={{
        color: '#CCE60E',
        marginBottom:10,

      }}>
        Test Cricket
      </Typography>
      <TableContainer component={Paper} style={tabContainerStyles}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={tableCellHeaderStyles}>Player</TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>Played Matches</TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>Innings</TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>Runs</TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>Highest Score</TableCell>
              <TableCell align="center" style={tableCellHeaderStyles}>Total Average</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cricketStats.map((playerStats, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={tableContentStyles}>
                  {playerStats.player}
                </TableCell>
                <TableCell align="center" style={tableContentStyles}>{playerStats.playedMatches}</TableCell>
                <TableCell align="center" style={tableContentStyles}>{playerStats.Innings}</TableCell>
                <TableCell align="center" style={tableContentStyles}>{playerStats.Runs}</TableCell>
                <TableCell align="center" style={tableContentStyles}>{playerStats.HighestScore}</TableCell>
                <TableCell align="center" style={tableContentStyles}>{parseFloat(playerStats.Runs/playerStats.Innings).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Test;
