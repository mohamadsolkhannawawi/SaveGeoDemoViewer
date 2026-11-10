import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { VideoScene } from './VideoScene';
import { VideoWithZoom } from './VideoWithZoom';
import { videoConfig, scenes } from './videoConfig';

export const SaveGeoVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#000000' }}>
      {/* Base video layer with zoom applied */}
      <VideoWithZoom
        videoSrc={videoConfig.videoSrc}
        scenes={scenes}
      />

      {/* Lower third captions overlay */}
      {scenes.map((scene, idx) => (
        <Sequence
          key={`caption-${idx}`}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          <VideoScene
            text={scene.text}
            durationInFrames={scene.durationInFrames}
          />
        </Sequence>
      ))}

      {/* Audio tracks */}
      {scenes.map((scene, idx) => (
        <Sequence
          key={`audio-${idx}`}
          from={scene.startFrame}
          durationInFrames={scene.durationInFrames}
        >
          <Audio src={staticFile(scene.audioSrc)} volume={0.8} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
