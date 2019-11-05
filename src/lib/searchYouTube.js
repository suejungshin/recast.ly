import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from '../data/exampleVideoData.js';

// let get = function (successCB, errorCB = null) {
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: { },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function (data) {
//       console.error('Failed to get videos', data);
//     }
//   });
// };

// let successCB = function (data) {
//   console.log(data)
// };

// console.log(get(successCB))

// $.get('https://www.googleapis.com/youtube/v3/search', successCB);


// GET https://www.googleapis.com/youtube/v3/search

//////////////////////////////////////////////////////////////////////////

$(document).ready(function() {
  searchYouTube(successCB, options);
});

var options = {
  part: 'snippet',
  query: 'dog',
  max: 5,
  key: YOUTUBE_API_KEY
};

var searchYouTube = function(callback, options) {
  var url = 'https://www.googleapis.com/youtube/v3/search';

  //$.getJSON(url, options, callback);
  callback(exampleVideoData);
};

var successCB = function (data) {
  // store the data and use it in props later
  console.log(data);
  console.log(data.items);

  props.setState({
    currentVideo: data.items
  });

};

export default searchYouTube;
