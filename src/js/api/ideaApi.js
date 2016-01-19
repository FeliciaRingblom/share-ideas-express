const noInitialIdeas = 9;

const IdeaAPI = {
  ideaItems: [],
  init() {
    for ( let i = 1; i < noInitialIdeas; i++ ) {
      this.ideaItems.push( {
        'id': 'ID' + i,
        'heading': 'Idea #' + i,
        'description': 'Lorem ipsum dolor sit amet.',
        'added': '2015-01-05',
        'points': 0
      } );
    }
  }
};

IdeaAPI.init();
export default IdeaAPI;
