import React from 'react';
import { useCurrentFrame, Video, staticFile, Easing, interpolate } from 'remotion';
import { SceneConfig } from './videoConfig';

export const VideoWithZoom: React.FC<{
  videoSrc: string;
  scenes: SceneConfig[];
}> = ({ videoSrc, scenes }) => {
  const frame = useCurrentFrame();

  // Find active scene
  const activeScene = scenes.find(
    (s) => frame >= s.startFrame && frame < s.startFrame + s.durationInFrames
  );

  // Default values when no active scene
  let finalScale = 1.0;
  let sceneOpacity = 1.0;

  if (activeScene) {
    const sceneFrame = frame - activeScene.startFrame;
    const duration = activeScene.durationInFrames;

    // Smooth entry/exit fade (first 15 frames in, last 15 frames out)
    const entryFade = interpolate(
      sceneFrame,
      [0, 15],
      [0.8, 1.0],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.ease) }
    );
    const exitFade = interpolate(
      sceneFrame,
      [Math.max(0, duration - 15), duration],
      [1.0, 0.8],
      { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: Easing.inOut(Easing.ease) }
    );
    sceneOpacity = Math.min(entryFade, exitFade);

    // Main scene zoom - extended duration, subtle scale
    const zoomStartFrame = 20;
    const zoomEndFrame = Math.max(duration - 20, duration * 0.7);
    
    const currentScale = interpolate(
      sceneFrame,
      [0, zoomStartFrame, zoomEndFrame, duration],
      [1.0, activeScene.zoomScale * 0.85, activeScene.zoomScale * 0.85, 1.0],
      {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
        easing: Easing.bezier(0.4, 0.0, 0.2, 1.0),
      }
    );

    // Button click zoom - subtle, smooth
    const buttonClickStartFrame = activeScene.buttonClickStartFrame || 30;
    const buttonZoomActive =
      activeScene.buttonClickTarget &&
      sceneFrame >= buttonClickStartFrame &&
      sceneFrame < buttonClickStartFrame + 60;

    const buttonClickScale = buttonZoomActive
      ? interpolate(
          sceneFrame,
          [
            buttonClickStartFrame,
            buttonClickStartFrame + 20,
            buttonClickStartFrame + 40,
            buttonClickStartFrame + 60,
          ],
          [1.0, (activeScene.buttonClickZoom || 1.8) * 0.9, (activeScene.buttonClickZoom || 1.8) * 0.9, 1.0],
          {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.34, 1.56, 0.64, 1),
          }
        )
      : 1.0;

    finalScale = buttonZoomActive ? buttonClickScale : currentScale;
  }

  // Always center origin, consistent wrapper structure
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        transform: `scale(${finalScale})`,
        transformOrigin: '50% 50%',
        opacity: sceneOpacity,
        transition: 'none',
      }}
    >
      <Video
        src={staticFile(videoSrc)}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
