var searchYouTube = (options, callback) => {
  //
  var data = { part: 'snippet', q: options.query, maxResults: options.max, key: options.key, type: 'video', videoEmbeddable: 'true' };

  var videoRequest = $.get('https://www.googleapis.com/youtube/v3/search', data, function (data) {
    callback(data.items);
  });
};

export default searchYouTube;










// // import YOUTUBE_API_KEY from '../config/youtube.js';
// // import exampleVideoData from '../data/exampleVideoData.js';

// // var options = {
// //   part: 'snippet',
// //   query: 'dog',
// //   max: 5,
// //   key: YOUTUBE_API_KEY,
// // };

// // var successCB = function (data) {
// //   // store the data and use it in props later
// //   console.log('success');
// // };

// // var searchYouTube = function(options, callback = successCB) {
// //   // var url = 'https://www.googleapis.com/youtube/v3/search';

// //   // return $.getJSON(url, options, callback);
// //   $.ajax({
// //     url: 'https://www.googleapis.com/youtube/v3/search',
// //     type: 'GET',
// //     data: {
// //       part: 'snippet',
// //       type: 'video',
// //       key: options.key,
// //       maxResults: options.max,
// //       q: options.query,
// //       videoEmbeddable: 'true'
// //     },
// //     contentType: 'application/json',
// //     success: (data) => { callback(data.items); }
// //   });
// // };

// var searchYouTube = (options, callback) => {
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: {
//       part: 'snippet',
//       type: 'video',
//       key: options.key,
//       maxResults: options.max,
//       q: options.query,
//       videoEmbeddable: 'true'
//     },
//     contentType: 'application/json',
//     success: (data) => { callback(data.items); }
// //   });
// };

// export default searchYouTube;