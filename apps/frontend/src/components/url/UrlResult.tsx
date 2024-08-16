import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface UrlResultProps {
  shortUrl: string;
  originalUrl: string;
}

export const UrlResult: React.FC<UrlResultProps> = ({
  shortUrl,
  originalUrl,
}) => {
  const [copied, setCopied] = useState(false);
  return (
    <Box
      sx={{
        mt: 4,
        textAlign: "center",
        p: 2,
        "@media (max-width: 600px)": {
          mt: 2,
          p: 1,
        },
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{
          fontSize: "1.25rem",
          "@media (max-width: 600px)": {
            fontSize: "1rem",
          },
        }}
      >
        Your shortened URL:
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link
          href={shortUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            wordBreak: "break-all",
            fontSize: "1rem",
            "@media (max-width: 600px)": {
              fontSize: "0.875rem",
            },
            color: "primary.main",
            marginRight: "1rem",
          }}
        >
          {shortUrl}
        </Link>
        <CopyToClipboard text={shortUrl} onCopy={() => setCopied(true)}>
          <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
            <Button variant="contained" color="primary">
              {copied ? "Copied" : "Copy"}
            </Button>
          </Tooltip>
        </CopyToClipboard>
      </Box>
    </Box>
  );
};
