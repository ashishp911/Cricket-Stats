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

const Test = () => {
  const [playersData, setPlayersData] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    // height: 500,
    // bgcolor: "background.paper",
    'background-color': '#e1f5fe',
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const formStyles = {
    display: "flex",
    "flex-direction": "column",
    'max-width': '400px',
    'margin': '0 auto',
    'padding': '20px',
    'background-color': '#e1f5fe',
    'border-radius': '10px',
  }

  const labelStyle = {
    'display':'block',
    'margin-bottom':'10px',
  }
  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const buttonStyle = {
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  };

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
    const parsedValue = name === 'player' ? value : parseInt(value, 10);
    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/test/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Data sent successfully!', data);

      // Add the new player to the existing playersData state
      setPlayersData([...playersData, formData]);

      // Clear the form data after submitting
      setFormData({
        player: '',
        playedMatches: '',
        innings: '',
        runs: '',
        highestScore: ''
      });
    } catch (error) {
      console.error('Error sending data:', error);
    }  };

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
    marginBottom: 10,
  };
  const tableCellHeaderStyles = {
    color: "#CCE60E",
    "font-size": "25px",
  };
  const tableContentStyles = {
    color: "#23F181",
    "font-size": "15px",
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049'
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
                  {parseFloat(player.runs / player.innings).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Button variant="contained"> Outli/ned</Button> */}
      <Button variant="contained" onClick={handleOpen}>
        Add a player
      </Button>
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
            <button type="submit" style={Object.assign({}, buttonStyle, buttonHoverStyle)}>Add to DB</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Test;
