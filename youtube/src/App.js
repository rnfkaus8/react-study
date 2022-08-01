import React, {useEffect, useState} from 'react';
import VideoList from "./components/video_list/VideoList";
import VideoSearchForm from "./components/video_search/VideoSearchForm";
import styles from "./App.module.css";
import VideoDetail from "./components/video_detail/VideoDetail";

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  const handleSearch = (query) => {
    setSelectedVideo(null);
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  return (
    <div className={styles.app}>
      <VideoSearchForm onSearch={handleSearch}/>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
};

export default App;