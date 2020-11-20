import React, { createContext, useState } from 'react';

interface VideoData {
  videoUrl: string;
  videoTitle: string;
}

interface AppContextData {
  videoData: VideoData | null;
  setVideoData(value: VideoData | null): void;
}

export const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [videoData, setVideoData] = useState<VideoData | null>(null);

  return (
    <AppContext.Provider value={{ videoData, setVideoData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
