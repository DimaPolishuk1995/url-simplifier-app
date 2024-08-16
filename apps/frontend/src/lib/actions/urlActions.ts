export interface UrlData {
  shortUrl: string;
  originalUrl: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}

export async function shortenUrl(originalUrl: string): Promise<string> {
  try {
    const response = await fetch("/api/url/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalUrl }),
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(`Failed to shorten URL: ${errorData.message}`);
    }

    const data: { shortUrl: string } = await response.json();
    return data.shortUrl;
  } catch (error) {
    console.error("Error in shortenUrl:", error);
    throw error;
  }
}

export async function getAllUrls(): Promise<UrlData[]> {
  try {
    const response = await fetch("/api/url", {
      method: "GET",
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(`Failed to fetch URLs: ${errorData.message}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in getAllUrls:", error);
    throw error;
  }
}
