import React from "react";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import './style.css';

interface UnderlinedTextProps {
    children: ReactNode;
}

const UnderlinedText: React.FC<UnderlinedTextProps> = ({ children }) => {
    return (
        <Box component="span" position="relative" display="inline-block" sx={{ alignSelf: "flex-start" }}>
            {children}
            <Box component="span" display="block" position="absolute" width={'100%'} height={'1px'} bottom={10} bgcolor={"#e2e8f0"} />
        </Box>
    )
}
export default UnderlinedText;
