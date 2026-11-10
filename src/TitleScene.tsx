import React from 'react';
import { useVideoConfig } from 'remotion';
import {
  spring,
  useCurrentFrame,
  interpolate,
} from 'remotion';

export const TitleScene: React.FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Text fades in and slides up
  const opacity = spring({
    fps,
    frame,
    config: {
      damping: 100,
      mass: 1,
      stiffness: 100,
    },
    durationInFrames: 30,
  });

  const translateY = interpolate(frame, [0, 30], [40, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0F4C3A',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <h1
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 24px 0',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.5px',
          }}
        >
          {title}
        </h1>
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 400,
            color: '#E8F3F0',
            margin: 0,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {subtitle}
        </h2>
      </div>
    </div>
  );
};
