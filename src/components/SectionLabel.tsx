import { Box } from "@mui/system";
import { ReactNode } from "react";

export default function SectionLabel({children}:{children:Readonly<ReactNode>}) {
  return (
    <Box
      sx={{
        borderRadius: 1,
        backgroundColor: 'blue.main',
        padding: '12px',
        color: '#ffffff'
      }}
    >{children}</Box>
  );
}
