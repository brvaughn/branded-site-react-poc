import { combineReducers } from 'redux';
import { REQUEST_CHAPTERS, RECEIVE_CHAPTERS } from "../actions/index";


function chapters(
  state = {
    isFetching: false,
    items : []
  },
  action
){
  switch(action.type) {
    case REQUEST_CHAPTERS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_CHAPTERS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.chapters,
        lastUpdated: action.receivedAt
      });
    default:
      return state
  }
}

const chapterReducer = combineReducers({
  chapters
});

export default chapterReducer;





  // return [
  //   { title : 'Coca-Cola', marker : '10'},
  //   { title : 'Apple', marker : '20'},
  //   { title : 'Retirement', marker : '30'},
  //   { title : 'Forbes', marker : '40'},
  //   { title : 'Berkshire Hathaway', marker : '50'},
  //   { title : 'Investment Strategy', marker : '60'},
  //   { title : 'Amazon', marker : '70'},
  //   { title : 'Stocks', marker : '80'},
  //   { title : 'Millionaires', marker : '90'},
  //   { title : 'Wall Street', marker : '100'},
  //   { title : 'Dream Big', marker : '110'},
  //   { title : 'Index Fund', marker : '120'}
  //
  // ];
// }