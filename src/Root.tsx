import React from 'react';
import { Composition } from 'remotion';
import { SaveGeoVideo } from './SaveGeoVideo';
import { videoConfig } from './videoConfig';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SaveGeoVideo"
      component={SaveGeoVideo}
      durationInFrames={videoConfig.durationInFrames}
      fps={videoConfig.fps}
      width={1920}
      height={1080}
    />
  );
};
