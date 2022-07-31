import React, {useEffect, useState} from 'react';
import VideoList from "./components/video_list/VideoList";
import VideoSearchForm from "./components/video_search/VideoSearchForm";
import styles from "./App.module.css";

const App = ({youtube}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  const handleSearch = (query) => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };
  return (
    <div className={styles.app}>
      <VideoSearchForm onSearch={handleSearch} />
      <VideoList videos={videos}/>
    </div>
  );
};

export default App;