import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography
} from "@material-ui/core";
import React from "react";

export const Dashboard = ({ isLoggedIn, handleLogout }) => {
  return (
    <>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography
              style={{ flexGrow: 1 }}
              variant={"h6"}
              component={"div"}
            >
              Dashboard
            </Typography>
            {isLoggedIn ? (
              <Button
                style={{ background: "orange" }}
                variant="contained"
                color="inherit"
                type="submit"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button variant="contained" color="default" type="submit">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};
