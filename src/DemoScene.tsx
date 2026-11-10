import React from 'react';
import { useVideoConfig } from 'remotion';
import {
  spring,
  useCurrentFrame,
  interpolate,
} from 'remotion';

const RippleEffect: React.FC<{
  x: number;
  y: number;
  frame: number;
  clickAtFrame: number;
}> = ({ x, y, frame, clickAtFrame }) => {
  const elapsed = frame - clickAtFrame;

  if (elapsed < 0 || elapsed > 30) return null;

  const scale = interpolate(elapsed, [0, 30], [0, 2], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const opacity = interpolate(elapsed, [0, 30], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <svg
      style={{
        position: 'absolute',
        left: x,
        top: y,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
      width="60"
      height="60"
      viewBox="0 0 60 60"
    >
      <circle
        cx="30"
        cy="30"
        r="15"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        style={{
          opacity,
          transform: `scale(${scale})`,
          transformOrigin: '30px 30px',
          transition: 'none',
          // eslint-disable-next-line @remotion/non-pure-animation
        }}
      />
    </svg>
  );
};

const Cursor: React.FC<{
  x: number;
  y: number;
}> = ({ x, y }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: '24px',
        height: '24px',
        pointerEvents: 'none',
        zIndex: 100,
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
          fill="#FFFFFF"
          stroke="#212121"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

const LowerThird: React.FC<{
  caption: string;
}> = ({ caption }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(33, 33, 33, 0.85)',
        padding: '20px 40px',
        color: '#FFFFFF',
        fontSize: '18px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
      }}
    >
      {caption}
    </div>
  );
};

export const DemoScene: React.FC<{
  assetId: string;
  caption: string;
  cursorStart: [number, number];
  cursorTarget: [number, number];
  clickAtFrame: number;
}> = ({
  assetId,
  caption,
  cursorStart,
  cursorTarget,
  clickAtFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Cursor movement: eased spring from start to target
  const cursorProgress = spring({
    fps,
    frame,
    config: {
      damping: 10,
      mass: 0.5,
      stiffness: 60,
    },
    durationInFrames: Math.max(clickAtFrame - 10, 20),
  });

  const cursorX = interpolate(
    cursorProgress,
    [0, 1],
    [cursorStart[0], cursorTarget[0]],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const cursorY = interpolate(
    cursorProgress,
    [0, 1],
    [cursorStart[1], cursorTarget[1]],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const showCursor = frame < clickAtFrame + 15;

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#212121',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Asset placeholder */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#2A2A2A',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#999',
          fontSize: '16px',
          fontFamily: 'Inter, monospace',
        }}
      >
        Asset: {assetId}
      </div>

      {/* Cursor */}
      {showCursor && <Cursor x={cursorX} y={cursorY} />}

      {/* Ripple effect at click point */}
      <RippleEffect
        x={cursorTarget[0]}
        y={cursorTarget[1]}
        frame={frame}
        clickAtFrame={clickAtFrame}
      />

      {/* Lower third caption */}
      <LowerThird caption={caption} />
    </div>
  );
};
