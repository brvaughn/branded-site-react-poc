import { combineReducers } from 'redux';
import NavItemsReducer from './reducer-nav-items';
import ChapterListReducer from './reducer-chapter-list';
import TranscriptReducer from './reducer-transcripts';

const rootReducer = combineReducers({
  navItems : NavItemsReducer,
  chapterListItems : ChapterListReducer,
  transcripts : TranscriptReducer
});

export default rootReducer;