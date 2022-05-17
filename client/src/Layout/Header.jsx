import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import CreateIcon from "@mui/icons-material/Create";
const Header = () => {
  return (
    <div>
      <Navbar bg="white">
        <Container>
          <Navbar.Brand>
            <FormControl variant="standard">
              <InputLabel htmlFor="input-with-icon-adornment">
                Name Your Client
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <CreateIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
