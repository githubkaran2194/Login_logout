import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField
} from "@material-ui/core";
import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "karan" && password.trim() === "123") {
      alert("success");
      onLogin();
      setUsername("");
      setPassword("");
    } else {
      alert("error");
    }
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label="username"
            variant="outlined"
            fullWidth
            margin="dense"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="password"
            variant="outlined"
            fullWidth
            type="password"
            margin="dense"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="password"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            margin="dense"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onMouseDown={handleMouseDownPassword}
                    onClick={handleShowPass}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button variant="contained" color="secondary" type="submit">
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};
export default Login;
