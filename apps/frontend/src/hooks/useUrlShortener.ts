import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getAllUrls, shortenUrl } from "@/lib/actions/urlActions";
import { useState } from "react";

export function useUrlShortener() {
  const queryClient = useQueryClient();
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "info" | "warning" | "error",
  });

  const {
    data: urls = [],
    error: urlsError,
    isLoading: urlsLoading,
  } = useQuery<{ shortUrl: string; originalUrl: string }[], Error>({
    queryKey: ["urls"],
    queryFn: getAllUrls,
  });

  const mutation = useMutation<
    { shortUrl: string; originalUrl: string },
    Error,
    string
  >({
    mutationFn: async (originalUrl: string) => {
      const shortUrl = await shortenUrl(originalUrl);
      return { shortUrl, originalUrl };
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["urls"] as InvalidateQueryFilters);
      setNotification({
        open: true,
        message: "URL successfully shortened!",
        severity: "success",
      });
    },
    onError: (error) => {
      console.error("Failed to shorten URL:", error.message);
      setNotification({
        open: true,
        message: `Error: ${error.message}`,
        severity: "error",
      });
    },
  });

  const handleUrlSubmit = (originalUrl: string) => {
    mutation.mutate(originalUrl);
  };

  const handleNotificationClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return {
    shortUrl: mutation.data
      ? `${window.location.origin}/${mutation.data.shortUrl}`
      : "",
    originalUrl: mutation.data ? mutation.data.originalUrl : "",
    urls,
    urlsLoading,
    urlsError,
    handleUrlSubmit,
    notification,
    handleNotificationClose,
  };
}
