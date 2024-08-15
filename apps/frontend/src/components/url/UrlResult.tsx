import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface UrlResultProps {
  shortUrl: string;
  originalUrl: string;
}

export const UrlResult: React.FC<UrlResultProps> = ({ shortUrl, originalUrl }) => {
  return (
    <Box
      sx={{
        mt: 4,
        textAlign: 'center',
        p: 2,
        '@media (max-width: 600px)': {
          mt: 2,
          p: 1,
        }
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{
          fontSize: '1.25rem',
          '@media (max-width: 600px)': {
            fontSize: '1rem',
          }
        }}
      >
        Your shortened URL:
      </Typography>
      <Link
        href={originalUrl}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          wordBreak: 'break-all'
        }}
      >
        {shortUrl}
      </Link>
    </Box>
  );
};
