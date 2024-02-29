import SubMenu from "@/components/SubMenu";
import { Grid } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={3}>
        <SubMenu />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  );
}
