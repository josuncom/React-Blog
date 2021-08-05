import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';

const API_KEY = 'AIzaSyAB7L-ix78nLsT9kkJMezDGXIau6dC4Mb4';

class App extends Component {
  constructor(props){
    super(props);

    this.state={ videos : [] };

    YTSearch({key : API_KEY, term : 'surfboards'}, (data) => {
      this.setState({videos : data});
    });
  }
  render() {
    return (
    <div>
      <SearchBar/>
    </div>
    );
  }
}


ReactDOM.render(
    <App />, document.getElementById('root')
);
