const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  // height: 500,
  // bgcolor: "background.paper",
  "background-color": "#e1f5fe",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const formStyles = {
  display: "flex",
  "flex-direction": "column",
  "max-width": "400px",
  margin: "0 auto",
  padding: "20px",
  "background-color": "#e1f5fe",
  "border-radius": "10px",
};

const labelStyle = {
  display: "block",
  "margin-bottom": "10px",
};
const inputStyle = {
  width: "100%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s ease",
};

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
  backgroundColor: "#45a049",
};

export {
  labelStyle,
  formStyles,
  boxStyle,
  tableStyles,
  tabContainerStyles,
  tableContentStyles,
  buttonHoverStyle,
  buttonStyle,
  tableCellHeaderStyles,
  inputStyle
};
