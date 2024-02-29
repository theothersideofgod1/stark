import { Box } from "@mui/system";
import { ReactNode } from "react";

export default function SectionLabel({children}:{children:Readonly<ReactNode>}) {
  return (
    <Box
      sx={{
        borderRadius: 1,
        background: '#0000ff',
        padding: '12px',
        color: '#ffffff',
      }}
    >{children}</Box>
  );
}
