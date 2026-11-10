import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

const LowerThird: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  
  const slideIn = interpolate(frame, [0, 15], [100, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(33, 33, 33, 0.9)',
        padding: '24px 60px',
        color: '#FFFFFF',
        fontSize: '20px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        transform: `translateY(${slideIn}%)`,
        borderTop: '3px solid #0F4C3A',
      }}
    >
      {text}
    </div>
  );
};

export const VideoScene: React.FC<{
  text: string;
  durationInFrames: number;
}> = ({ text }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <LowerThird text={text} />
    </div>
  );
};
