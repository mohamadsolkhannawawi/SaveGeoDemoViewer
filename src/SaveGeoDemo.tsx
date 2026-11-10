import React from 'react';
import { Composition, Sequence } from 'remotion';
import { TitleScene } from './TitleScene';
import { DemoScene } from './DemoScene';
import { scenes } from './sceneConfig';

export const SaveGeoDemo: React.FC = () => {
  let currentFrame = 0;

  return (
    <>
      {scenes.map((scene, idx) => {
        const startFrame = currentFrame;
        const duration = scene.durationInFrames;
        currentFrame += duration;

        if (scene.type === 'title') {
          return (
            <Sequence
              key={`title-${idx}`}
              from={startFrame}
              durationInFrames={duration}
            >
              <TitleScene title={scene.title} subtitle={scene.subtitle} />
            </Sequence>
          );
        }

        if (scene.type === 'demo') {
          return (
            <Sequence
              key={`demo-${idx}`}
              from={startFrame}
              durationInFrames={duration}
            >
              <DemoScene
                assetId={scene.assetId}
                caption={scene.caption}
                cursorStart={scene.cursorStart}
                cursorTarget={scene.cursorTarget}
                clickAtFrame={scene.clickAtFrame}
              />
            </Sequence>
          );
        }

        return null;
      })}
    </>
  );
};

// Calculate total duration
const totalDurationInFrames = scenes.reduce(
  (sum, scene) => sum + scene.durationInFrames,
  0
);

export const Root: React.FC = () => {
  return (
    <Composition
      id="SaveGeoDemo"
      component={SaveGeoDemo}
      durationInFrames={totalDurationInFrames}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{}}
    />
  );
};
