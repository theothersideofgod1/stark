import SideMenu from "@/components/SideMenu";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function AnalysisLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      <Box sx={{width: '120px'}}>
        <SideMenu />
      </Box>
      <Box sx={{flex:1, minWidth:0}}> 
        {children}
      </Box>
    </Box>
  );
}
