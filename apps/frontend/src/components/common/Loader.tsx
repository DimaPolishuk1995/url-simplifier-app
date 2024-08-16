import React from "react";
import { Box, CircularProgress } from "@mui/material";

export const Loader: React.FC = () => {
  return (
    <Box className="flex justify-center items-center h-[100%]">
      <CircularProgress />
    </Box>
  );
};
