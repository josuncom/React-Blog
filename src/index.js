import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyAB7L-ix78nLsT9kkJMezDGXIau6dC4Mb4';

class App extends Component {
  constructor(props){
    super(props);

    this.state={ 
      videos : [],
      selectedVideo : null
     };

     this.videoSearch('nba');

    
  }

  videoSearch(term){
    YTSearch({key : API_KEY, term : term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo : videos[0]});
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 500);

    return (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={ this.state.selectedVideo }/>
      <VideoList 
        onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
        videos={ this.state.videos }/>    
    </div>
    );
  }
}


ReactDOM.render(
    <App />, document.getElementById('root')
);
