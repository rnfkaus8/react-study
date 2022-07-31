class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions ={
      method: 'GET',
      redirect: 'follow'
    }
  }

  mostPopular() {
    const requestUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`;
    return fetch(requestUrl, this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items)
  }

  search(query) {
    const requestUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=${this.key}`;
    return fetch(requestUrl, this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId})))
  }
}

export default Youtube;