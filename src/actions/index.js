import fetch from 'isomorphic-fetch';

export const REQUEST_CHAPTERS = 'REQUEST_CHAPTERS';
function requestChapters(video) {
  return {
    type : REQUEST_CHAPTERS,
    video
  }
}

export const RECEIVE_CHAPTERS = 'RECEIVE_CHAPTERS';
function receiveChapters(video, json) {
  // console.log('Inside action.receiveChapters');
  // console.log(json);
  // console.log('Leaving action.receiveChapters');
  return {
    type : RECEIVE_CHAPTERS,
    video,
    chapters: json.map(child => child),
    receivedAt: Date.now()
  }
}


export function fetchChapters(video) {

  return function(dispatch) {

    dispatch(requestChapters(video));

    return fetch(`http://localhost:3001/api/chapters`)
      .then(
        response => response.json(),
        error => console.log('Something bad happened when retrieving chapters.', error)
      )
      .then(json =>
        dispatch(receiveChapters(video, json))
      )
  }
}