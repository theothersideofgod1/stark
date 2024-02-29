import SideMenu from "@/components/SideMenu";
import SubMenu from "@/components/SubMenu";
import { Grid } from "@mui/material";
import { ReactNode } from "react";

export default function AnalysisLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <SideMenu />
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  );
}
