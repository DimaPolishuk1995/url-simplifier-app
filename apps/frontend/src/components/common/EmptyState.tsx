import React from 'react';
import { Box, Typography } from '@mui/material';

export const EmptyState: React.FC = () => {
  return (
    <Box className="bg-gray-800 rounded-lg p-4 mt-2 flex justify-center items-center" sx={{ minHeight: '200px' }}>
      <Typography variant="body1" className="text-gray-400">
        No URLs have been shortened yet.
      </Typography>
    </Box>
  );
};
