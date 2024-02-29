import SubMenu from "@/components/SubMenu";
import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ width: "196px" }}>
        <SubMenu />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
    </Box>
  );
}
