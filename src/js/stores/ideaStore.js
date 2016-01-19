import { EventEmitter } from 'events';
import IdeaAPI from '../api/IdeaApi';

const CHANGE_EVENT = 'change';

const IdeaStore = Object.assign(EventEmitter.prototype, {
  emitChange() {
    this.emit( CHANGE_EVENT );
  },

  addChangeListener( callback ) {
    this.on( CHANGE_EVENT, callback );
  },

  removeChangeListener( callback ) {
    this.removeListener( CHANGE_EVENT, callback );
  },

  getIdeas() {
    return IdeaAPI.ideaItems;
  },
});

export default IdeaStore;
