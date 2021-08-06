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

    this.state={ videos : [] };

    YTSearch({key : API_KEY, term : 'nba'}, (data) => {
      this.setState({videos : data});
    });
  }


  render() {
    return (
    <div>
      <SearchBar/>
      <VideoDetail video={ this.state.videos[0] }/>
      <VideoList videos={ this.state.videos }/>
      
    </div>
    );
  }
}


ReactDOM.render(
    <App />, document.getElementById('root')
);
