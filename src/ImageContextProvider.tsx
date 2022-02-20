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
}

export const ImageContext = React.createContext<Image[]>([]); // context stores a list of images

export const ImageContextProvider: React.FC<ImageContextProviderProps> = ({
  serverURL = "http://127.0.0.1:3000/api/images",
  children,
}: ImageContextProviderProps) => {
  const { data, isLoading, error } = useQuery<Image[], Error>(
    "images",
    (): Promise<Image[]> =>
      fetch(serverURL).then((response) =>
        Array.isArray(response) ? response : []
      )
  );
  return data ? (
    <ImageContext.Provider value={data}>{children}</ImageContext.Provider>
  ) : null;
};

ImageContextProvider.displayName = "ImageContextProvider";
