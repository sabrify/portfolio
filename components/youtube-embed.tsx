// components/youyube-embed.tsx

interface YouTubeEmbedProps {
    videoId: string;
    start?: number;
    end?: number;
  }
  
  const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, start, end }) => {
    const startParam = start ? `&start=${start}` : "";
    const endParam = end ? `&end=${end}` : "";
  
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0${startParam}${endParam}`}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeEmbed;
  