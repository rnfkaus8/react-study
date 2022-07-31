class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions ={
      method: 'GET',
      redirect: 'follow'
    }
  }

  async mostPopular() {
    const requestUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`;

    const response = await fetch(requestUrl, this.getRequestOptions);
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const requestUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`;
    const response = await fetch(requestUrl, this.getRequestOptions);
    const result = await response.json();
    const map = result.items.map(item => ({...item, id: item.id.videoId}));
    return map;
  }
}

export default Youtube;