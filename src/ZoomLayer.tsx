import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

export const ZoomLayer: React.FC<{
  children: React.ReactNode;
  zoomTarget: [number, number];
  zoomScale: number;
  durationInFrames: number;
  buttonClickTarget?: [number, number];
  buttonClickZoom?: number;
  buttonClickStartFrame?: number;
}> = ({
  children,
  zoomTarget,
  zoomScale,
  durationInFrames,
  buttonClickTarget,
  buttonClickZoom = 1.8,
  buttonClickStartFrame = 30,
}) => {
  const frame = useCurrentFrame();

  // Main scene zoom (normal behavior)
  const currentScale = interpolate(
    frame,
    [0, Math.min(30, durationInFrames / 3), Math.max(durationInFrames - 30, durationInFrames * 2 / 3), durationInFrames],
    [1.0, zoomScale, zoomScale, 1.0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  // Button click zoom (if defined)
  const buttonZoomActive = buttonClickTarget && frame >= buttonClickStartFrame && frame < buttonClickStartFrame + 60;
  const buttonClickScale = buttonZoomActive ? interpolate(
    frame,
    [buttonClickStartFrame, buttonClickStartFrame + 10, buttonClickStartFrame + 50, buttonClickStartFrame + 60],
    [1.0, buttonClickZoom, buttonClickZoom, 1.0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  ) : 1.0;

  // Use button click zoom if active, otherwise use main zoom
  const finalScale = buttonZoomActive ? buttonClickScale : currentScale;
  const finalTarget = buttonZoomActive ? (buttonClickTarget as [number, number]) : zoomTarget;

  const originX = (finalTarget[0] / 1920) * 100;
  const originY = (finalTarget[1] / 1080) * 100;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        transform: `scale(${finalScale})`,
        transformOrigin: `${originX}% ${originY}%`,
      }}
    >
      {children}
    </div>
  );
};
