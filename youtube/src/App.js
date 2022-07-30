import React, {useEffect, useState} from 'react';
import YouTubeAPIConstant from "./apis/YouTubeAPIConstant";
import VideoList from "./components/video_list/VideoList";

const App = (props) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const requestUrl = YouTubeAPIConstant.URL
      + '/videos?part=snippet&chart=mostPopular&maxResults=25&key='
      + YouTubeAPIConstant.API_KEY;
    fetch(requestUrl, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(err => console.log('err', err));
  }, []);
  return <VideoList videos={videos} />;
};

export default App;