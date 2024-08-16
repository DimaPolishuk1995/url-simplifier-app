import React from "react";
import { Box, Typography, Link, Tooltip } from "@mui/material";
import { ListChildComponentProps } from "react-window";

export const Row = React.memo(
  ({ index, style, data }: ListChildComponentProps) => {
    const url = data[index];

    return (
      <Box
        style={style}
        key={url.shortUrl}
        className="border-b border-gray-700 last:border-0 p-2 text-left"
      >
        <Typography
          variant="body1"
          className="text-blue-400 truncate"
          sx={{ mb: 1 }}
        >
          <strong>Short URL:</strong>
          <Link
            href={`${window.location.origin}/${url.shortUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${window.location.origin}/${url.shortUrl}`}
          </Link>
        </Typography>
        <Tooltip title={url.originalUrl} placement="top">
          <Typography variant="body2" className="text-gray-400 truncate">
            <strong>Original URL:</strong> {url.originalUrl}
          </Typography>
        </Tooltip>
      </Box>
    );
  }
);
