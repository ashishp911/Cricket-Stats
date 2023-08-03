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
  Button,
  Box,
  Modal,
} from "@mui/material";

import {
  boxStyle,
  formStyles,
  tabContainerStyles,
  inputStyle,
  labelStyle,
  buttonStyle,
  buttonHoverStyle,
  tableContentStyles,
  tableCellHeaderStyles,
  tableStyles,
} from "../styles/testStyles";

const Test = () => {
  const [playersData, setPlayersData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/test");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPlayersData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const [formData, setFormData] = useState({
    player: "",
    playedMatches: "",
    innings: "",
    runs: "",
    highestScore: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "player" ? value : parseInt(value, 10);
    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Data sent successfully!", data);

      // Add the new player to the existing playersData state
      setPlayersData([...playersData, formData]);

      // Clear the form data after submitting
      setFormData({
        player: "",
        playedMatches: "",
        innings: "",
        runs: "",
        highestScore: "",
      });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
                  {parseFloat(player.runs / player.innings).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div
        className="row"
        style={{
          marginTop: "5px",
          marginBottom: "5px",
          minWidth: 650,
        }}
      >
        <div className="col-6" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          {/* <Button variant="contained"> Outlined</Button> */}
          <Button variant="contained" onClick={handleOpen}>
            Add a player
          </Button>
        </div>

        <div className="col-6" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
          {/* <Button variant="contained"> Outlined</Button> */}
          <Button variant="contained">Delete Player</Button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <form onSubmit={handleSubmit} style={formStyles}>
            <label style={labelStyle}>
              Player:
              <input
                type="text"
                name="player"
                value={formData.player}
                style={inputStyle}
                onChange={handleChange}
              />
            </label>
            <label style={labelStyle}>
              Played Matches:
              <input
                type="number"
                name="playedMatches"
                value={formData.playedMatches}
                style={inputStyle}
                onChange={handleChange}
              />
            </label>
            <label style={labelStyle}>
              Innings:
              <input
                type="number"
                name="innings"
                value={formData.innings}
                style={inputStyle}
                onChange={handleChange}
              />
            </label>
            <label style={labelStyle}>
              Runs:
              <input
                type="number"
                name="runs"
                value={formData.runs}
                style={inputStyle}
                onChange={handleChange}
              />
            </label>
            <label style={labelStyle}>
              Highest Score:
              <input
                type="number"
                name="highestScore"
                style={inputStyle}
                value={formData.highestScore}
                onChange={handleChange}
              />
            </label>
            <button
              type="submit"
              style={Object.assign({}, buttonStyle, buttonHoverStyle)}
            >
              Add Player
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Test;
