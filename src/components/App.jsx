import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };

    this.onVideoClick = this.onVideoClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleSearch(query = null, max = 5) {
    var options = {query: query, max: max, key: YOUTUBE_API_KEY};
    searchYouTube(options, data => {
      this.setState({
        currentVideo: data[0],
        videoList: data
      });
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;


////////////////



// import VideoList from './VideoList.js';
// import VideoPlayer from './VideoPlayer.js';
// import Search from './Search.js';
// import exampleVideoData from '../data/exampleVideoData.js';
// import YOUTUBE_API_KEY from '../config/youtube.js';

// // var App = () => (
// //   <div>
// //     <nav className="navbar">
// //       <div className="col-md-6 offset-md-3">
// //         <div><h5><em>search</em> view goes here</h5></div>
// //       </div>
// //     </nav>
// //     <div className="row">
// //       <div className="col-md-7">
// //         <div><h5><VideoPlayer video={exampleVideoData[0]}/></h5></div>
// //       </div>
// //       <div className="col-md-5">
// //         <div><h5><VideoList videos={exampleVideoData}/></h5></div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // ReactDOM.render(<App/>, document.getElementById('app'));

// // // In the ES6 spec, files are "modules" and do not share a top-level scope
// // // `var` declarations will only exist globally where explicitly defined
// // export default App;


// ///////////////////////////////////////
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       currentVideo: exampleVideoData[0],
//       videoList: exampleVideoData,
//       query: 'cat-videos'
//     };

//     this.liveSearch = _.debounce(this.getYouTubeVideos, 500);
//   }

//   componentDidMount() {
//     this.getYouTubeVideos();
//   }

//   getYouTubeVideos() {
//     var options = {
//       key: YOUTUBE_API_KEY,
//       query: this.state.query,
//       max: 5
//     };

//     this.props.searchYouTube(options, (data) => {
//       this.setState({
//         videoList: data,
//         currentVideo: data[0],
//       });
//     });
//   }

//   handleSubmit() {
//     this.getYouTubeVideos();
//   }

//   whenClicked(video) {
//     this.setState({
//       currentVideo: video
//     });
//   }

//   handleChange(event) {
//     this.setState({
//       query: event.target.value
//     });

//     this.liveSearch();
//   }
//   // handleChange(listOfNewVideos) {
//   //   this.setState({
//   //     // currentVideo: video,
//   //     videoList: listOfNewVideos
//   //     // options: {
//   //     //   part: 'snippet',
//   //     //   query: query,
//   //     //   max: 5,
//   //     //   key: YOUTUBE_API_KEY,
//   //     // }
//   //   });
//   // }

//   render() {
//     return (
//       <div>
//         <nav className="navbar">
//           <div className="col-md-6 offset-md-3">
//             <div><h5><Search handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} /></h5></div>
//           </div>
//         </nav>
//         <div className="row">
//           <div className="col-md-7">
//             <div><h5><VideoPlayer video={this.state.currentVideo}/></h5></div>
//           </div>
//           <div className="col-md-5">
//             <div><h5><VideoList videos={this.state.videoList} whenClicked={this.whenClicked.bind(this)}/></h5></div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// // ReactDOM.render(<App />, document.getElementById('app'));

// export default App;

// {/* <Search videos={this.state.videoList} handleChange = {this.handleChange.bind(this)}/> */}