import React from "react";
import { Container, Toolbar } from "@mui/material";
import TableUser from "../user/TableUser";

export default function Content() {
  return (
    <main>
      <Container maxWidth="lg">
        <Toolbar></Toolbar>
        <TableUser></TableUser>
      </Container>
    </main>
  );
}
