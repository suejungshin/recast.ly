import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" onChange = {props.handleChange}/>
//     <button className="btn hidden-sm-down" onClick={props.handleSubmit}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" handleChange={props.handleChange}/>
    <button className="btn hidden-sm-down" onClick={props.handleSubmit}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>

);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;


// onChange={(textVal) => {
//   console.log(textVal.target.value);
//   var options = {
//     part: 'snippet',
//     q: textVal.target.value,
//     max: 5,
//     key: YOUTUBE_API_KEY,
//   };
//   var data = searchYouTube(options);
//   console.log(data);
//   // console.log(data)

// }}


// FROM HELP DESK
//////////////

// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onClick={(event) => props.handleSearch(event.target.value)}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// // `var` declarations will only exist globally where explicitly defined
// export default Search;

