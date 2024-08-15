"use client";

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { UrlForm } from '@/components/form/UrlForm';
import { UrlResult } from '@/components/url/UrlResult';
import { useUrlShortener } from '@/hooks/useUrlShortener';
import { UrlList } from '@/components/url/UrlList';
import { EmptyState } from '@/components/common/EmptyState';
import { Loader } from '@/components/common/Loader';

export default function ShortenerPage() {
  const { shortUrl, originalUrl, urls, urlsLoading, urlsError, handleUrlSubmit } = useUrlShortener();

  return (
    <Container maxWidth="sm" className="text-white flex justify-center items-center h-[100%]">
      {urlsLoading ? (
        <Loader />
      ) : (
        <Box className="w-full text-center bg-gray-900 p-8 rounded-lg">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            className="text-blue-500 font-bold mb-4"
          >
            URL Simplifier
          </Typography>
          <UrlForm onSubmit={handleUrlSubmit} />
          <Box sx={{ visibility: shortUrl ? 'visible' : 'hidden', minHeight: '4rem' }}>
            <UrlResult shortUrl={shortUrl} originalUrl={originalUrl} />
          </Box>

          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            className="text-blue-500 font-bold mt-4"
          >
            All Shortened URLs
          </Typography>

          {urlsError ? (
            <Typography className="text-red-500 mt-4">Error loading URLs</Typography>
          ) : urls.length === 0 ? (
            <EmptyState />
          ) : (
            <UrlList urls={urls} />
          )}
        </Box>
      )}
    </Container>
  );
}
