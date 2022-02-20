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
}

export const ImageContext = React.createContext<ImagePageContext>({
  images: [],
}); // context stores a list of images

export const ImageContextProvider: React.FC<ImageContextProviderProps> = ({
  serverURL = "http://127.0.0.1:3000/api",
  children,
}: ImageContextProviderProps) => {
  const { data, isLoading, error } = useQuery<Image[], Error>(
    "images",
    (): Promise<Image[]> =>
      fetch(serverURL)
        .then((response) => response.json())
        .then((response) => (Array.isArray(response) ? response : []))
  );
  return data ? (
    <ImageContext.Provider value={{ images: data, isLoading, error }}>
      {children}
    </ImageContext.Provider>
  ) : null;
};

ImageContextProvider.displayName = "ImageContextProvider";
