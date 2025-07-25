'use client';

import { useEffect, useRef } from 'react';

export default function TeamPageVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ([' ', 'k', 'f', 'F11', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
      }
    }

    // Prevent fullscreen mode if somehow triggered
    function onFullScreenChange() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }

    // iOS Safari events to block fullscreen
    function onWebkitBeginFullScreen(e: Event) {
      e.preventDefault();
    }
    function onWebkitEndFullScreen(e: Event) {
      e.preventDefault();
    }

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('fullscreenchange', onFullScreenChange);

    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener('webkitbeginfullscreen', onWebkitBeginFullScreen);
      videoEl.addEventListener('webkitendfullscreen', onWebkitEndFullScreen);
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('fullscreenchange', onFullScreenChange);
      if (videoEl) {
        videoEl.removeEventListener('webkitbeginfullscreen', onWebkitBeginFullScreen);
        videoEl.removeEventListener('webkitendfullscreen', onWebkitEndFullScreen);
      }
    };
  }, []);

  return (
    <div className="video max-w-4xl mx-auto mt-8 rounded-xl overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        muted
        loop
        playsInline
        // NO controls attribute at all to hide controls completely
        controls={false}
        controlsList="nodownload nofullscreen noremoteplayback"
        onContextMenu={e => e.preventDefault()}
        style={{
          userSelect: 'none',
          WebkitUserSelect: 'none',
          pointerEvents: 'none', // disables clicks and interactions
          WebkitTapHighlightColor: 'transparent',
          objectFit: 'contain',
          outline: 'none',
        }}
      >
        <source src="/videos/studio.mp4" type="video/mp4" />
        Your browser does not support the video.
      </video>
    </div>
  );
}
