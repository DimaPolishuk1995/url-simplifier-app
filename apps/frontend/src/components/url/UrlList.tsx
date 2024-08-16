import React from "react";
import { Box } from "@mui/material";
import { FixedSizeList as List } from "react-window";
import { Row } from "../common/Row";

interface UrlListProps {
  urls: any[];
}

export const UrlList: React.FC<UrlListProps> = ({ urls }) => {
  return (
    <Box
      sx={{ maxHeight: "400px", overflowY: "auto" }}
      className="bg-gray-800 rounded-lg p-4 mt-2"
    >
      <List
        height={400}
        itemCount={urls.length}
        itemSize={70}
        width="100%"
        itemData={urls.slice().reverse()}
        className="rounded-lg"
      >
        {Row}
      </List>
    </Box>
  );
};
