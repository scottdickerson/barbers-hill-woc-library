import React, { ReactNode } from "react";
import { useQuery } from "react-query";
export interface ImageContextProviderProps {
  readonly serverURL?: string;
  readonly children: ReactNode;
}

export interface Image {
  sport: string;
  award: string;
  year: number;
  description: string;
  fileName: string;
  id: string;
}

export interface ImagePageContext {
  images: Image[];
  isLoading?: boolean;
  error?: Error | null;
  serverURL?: string;
}

export const ImageContext = React.createContext<ImagePageContext>({
  images: [],
}); // context stores a list of images

export const ImageContextProvider: React.FC<ImageContextProviderProps> = ({
  serverURL = process.env.REACT_APP_SERVER_URL || "http://127.0.0.1:3000/api",
  children,
}: ImageContextProviderProps) => {
  console.log("connecting to API server", serverURL);
  const { data, isLoading, error } = useQuery<Image[], Error>(
    "images",
    (): Promise<Image[]> =>
      fetch(serverURL)
        .then((response) => response.json())
        .then((response) => (Array.isArray(response) ? response : [])),
    { refetchInterval: 30000 }
  );
  return data ? (
    <ImageContext.Provider
      value={{ images: data, isLoading, error, serverURL }}
    >
      {children}
    </ImageContext.Provider>
  ) : null;
};

ImageContextProvider.displayName = "ImageContextProvider";
