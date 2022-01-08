import React from 'react';

export default function PostDisplayVideo({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="media-wrap entry__media">
      <div className="video-container">
        <iframe
          src={videoUrl}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
          title="video embed"
        />
      </div>
    </div>
  );
}
