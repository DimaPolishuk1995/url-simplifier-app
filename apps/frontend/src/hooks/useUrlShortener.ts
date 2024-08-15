import { InvalidateQueryFilters, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllUrls, shortenUrl } from '@/lib/urlActions';

export function useUrlShortener() {
  const queryClient = useQueryClient();

  const { data: urls = [], error: urlsError, isLoading: urlsLoading } = useQuery<
    { shortUrl: string; originalUrl: string }[],
    Error
  >({
    queryKey: ['urls'],
    queryFn: getAllUrls,
  });

  const mutation = useMutation<{ shortUrl: string; originalUrl: string }, Error, string>({
    mutationFn: async (originalUrl: string) => {
      const shortUrl = await shortenUrl(originalUrl);
      return { shortUrl, originalUrl };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['urls'] as InvalidateQueryFilters);
    },
    onError: (error) => {
      console.error('Failed to shorten URL:', error.message);
    },
  });

  const handleUrlSubmit = (originalUrl: string) => {
    mutation.mutate(originalUrl);
  };

  return {
    shortUrl: mutation.data ? `${window.location.origin}/${mutation.data.shortUrl}` : '',
    originalUrl: mutation.data ? mutation.data.originalUrl : '',
    urls,
    urlsLoading,
    urlsError,
    handleUrlSubmit,
  };
}
