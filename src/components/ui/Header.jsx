import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <div>
      <AppBar position="fixed" sx={{
            background: 'linear-gradient(109.14deg, rgb(17, 215, 110) -3.06%, rgb(106, 161, 239) 96.16%)',
          }}>
        <Toolbar>
          <Typography variant="h6" >
            Data User
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
